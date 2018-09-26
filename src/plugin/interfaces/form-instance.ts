import { IJsonSchemaDefinition } from './json-schema-definition';
import { IFormOverride } from './form-override';
import { FormController } from '../form/form-controller';
import { ValidationController } from 'aurelia-validation';
import { IFormOptions } from './form-options';

export interface IFormInstance {
  schema: IJsonSchemaDefinition;
  form: IFormOverride;
  formController: FormController;
  validationController: ValidationController;
  formOptions: IFormOptions;
  model: object;
}
