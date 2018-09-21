import { observable } from 'aurelia-framework';
import {
  IFormOptions,
  IJsonSchemaDefinition,
  IFormOverride,
  AuJsonSchemaForm
} from './plugin';
import { form } from './json-form';
import { schema } from './json-schema';
import { JSONHelper } from './json-helper';

export class App {
  form: IFormOverride = form;

  schema: IJsonSchemaDefinition = schema;

  @observable formString: string = JSONHelper.stringify(this.form, '\t');

  @observable schemaString: string = JSONHelper.stringify(this.schema, '\t');

  formVisible: boolean = true;

  formState: string;

  schemaState: string;

  modelString: string;

  schemaform: AuJsonSchemaForm;

  options: IFormOptions = {
    validateOnRender: true,
    noEmptyArrayInitialization: false
  };

  model: any = {
    foodAllergies: [
      'egg'
    ],
    averageDailyCoffeeConsumption: 1
  };

  attached() {
    this.refreshModel();
    this.schemaform.validationController.subscribe(() => {
      this.refreshModel();
    });
  }

  formStringChanged(newValue, oldValue) {
    if (!oldValue) { return; }
    try {
      const obj = JSONHelper.parse(newValue);
      this.form = obj;
      this.formState = undefined;
    } catch {
      this.formState = 'invalid json';
    }
  }

  schemaStringChanged(newValue, oldValue) {
    if (!oldValue) { return; }
    try {
      const obj = JSONHelper.parse(newValue);
      this.schema = obj;
      this.schemaState = undefined;
    } catch {
      this.schemaState = 'invalid json';
    }
  }

  refreshModel() {
    this.modelString = JSONHelper.stringify(this.model, '\t');
  }

  async submit($event: Event) {
    $event.preventDefault();
    const results = await this.schemaform.formInstance.formController.validationController.validate();
    if (results.valid) {
      window.alert('everything looks good!');
    } else {
      // tslint:disable-next-line:max-line-length
      window.alert('one or more errors: \r\n' + results.results.filter((r) => !r.valid).map((r) => r.message).join('\r\n'));
    }
  }

  reload() {
    this.schemaform.buildForm();
  }
}
