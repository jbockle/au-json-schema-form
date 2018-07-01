import { BindingSignaler } from "aurelia-templating-resources";
import { observable, inject, useShadowDOM, BindingEngine } from "aurelia-framework";
import { IFormOptions, IJsonSchemaDefinition, IForm } from "aurelia-json-schema-form";
import { form } from "./json-form";
import { schema } from "./json-schema";
import { AuJsonSchemaForm } from "aurelia-json-schema-form";
import { ValidateEvent } from "aurelia-validation";

@useShadowDOM()
@inject(BindingSignaler, BindingEngine)
export class App {
  form: IForm = form;

  schema: IJsonSchemaDefinition = schema;

  @observable formString: string = JSON.stringify(this.form, null, "\t");

  @observable schemaString: string = JSON.stringify(this.schema, null, "\t");

  formVisible: boolean = true;

  formState: string;

  schemaState: string;

  modelString: string;

  schemaform: AuJsonSchemaForm

  options: IFormOptions = {
    validateOnRender: true
  }

  model: any = {};

  constructor(private signaler: BindingSignaler, private engine: BindingEngine) { }

  attached() {
    this.refreshModel();
    this.schemaform.validationController.subscribe((event: ValidateEvent) => {
      this.refreshModel();
    });
  }

  formStringChanged(newValue, oldValue) {
    if (!oldValue) { return; }
    try {
      const obj = JSON.parse(newValue);
      this.form = obj;
      this.formState = undefined;
    } catch {
      this.formState = "invalid json";
    }
  }

  schemaStringChanged(newValue, oldValue) {
    if (!oldValue) { return; }
    try {
      const obj = JSON.parse(newValue);
      this.schema = obj;
      this.schemaState = undefined;
    } catch {
      this.schemaState = "invalid json";
    }
  }

  refreshModel() {
    this.modelString = JSON.stringify(this.model, null, "\t");
  }
}
