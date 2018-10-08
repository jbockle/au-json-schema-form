import { bindable, customElement, inject } from 'aurelia-framework';
import { Guid } from '../../resources/guid';
import { RulesFactory } from '../../rules/rules-factory';
import { IFormOverride } from '../../interfaces/form-override';
import { SchemaFormLogger } from '../../resources/logger';
import { FormInstances } from '../../services/form-instances';
import { IFormInstance } from '../../interfaces/form-instance';
import { FormService } from '../../services/form-service';

@inject(
  FormService,
  RulesFactory,
  SchemaFormLogger,
  FormInstances
)
@customElement('sf-string')
export class SfString {
  @bindable form: IFormOverride;
  @bindable model: string;
  @bindable formInstance: string;

  id: string = Guid.newGuid();

  kind = 'string';

  view;

  private formCtrl: IFormInstance;

  constructor(
    public formService: FormService,
    public rules: RulesFactory,
    private logger: SchemaFormLogger,
    private formInstances: FormInstances
  ) { }

  modelChanged(newValue, oldValue) {
    if (this.form.$onChange) {
      this.form.$onChange(newValue, oldValue);
    }
  }

  attached() {
    this.logger.info('sf-string-attached');
    if (this.formCtrl.formOptions.validateOnRender) {
      this.formCtrl.validationController.validate({ object: this, propertyName: 'model' });
    }
  }

  bind() {
    this.logger.info('sf-string', { form: this.form, model: this.model }, arguments);
    this.formCtrl = this.formInstances.get(this.formInstance);
    this.rules.bind(this);
    this.determineViewStrategy();
  }

  private determineViewStrategy() {
    this.view = this.formService.getTemplatePath('string');
    if (this.form.$altTemplate) {
      this.view = this.form.$altTemplate;
    } else if (this.form.$textarea) {
      this.view = this.formService.getTemplatePath('stringTextArea');
    } else if (this.form.$schema.enum && this.form.$schema.enum.length <= 5) {
      this.view = this.formService.getTemplatePath('stringRadioEnum');
    } else if (this.form.$schema.enum) {
      this.view = this.formService.getTemplatePath('stringSelectEnum');
    } else if (['date-time', 'date', 'time'].indexOf(this.form.$schema.format) > -1) {
      if (this.formService.getTemplatePath(this.form.$schema.format, 'format')) {
        this.view = this.formService.getTemplatePath(this.form.$schema.format, 'format');
      }
    }
  }
}
