import { BindingSignaler } from "aurelia-templating-resources";
import { observable, inject, useShadowDOM, BindingEngine } from "aurelia-framework";
import { IFormOptions, IJsonSchemaDefinition, IFormOverride, AuJsonSchemaForm } from "aurelia-json-schema-form";
import { form } from "./json-form";
import { schema } from "./json-schema";
import { ValidateEvent, ControllerValidateResult } from "aurelia-validation";

@useShadowDOM()
@inject(BindingSignaler, BindingEngine)
export class App {
  form: IFormOverride = form;

  schema: IJsonSchemaDefinition = schema;

  @observable formString: string = JSON.stringify(this.form, null, "\t");

  @observable schemaString: string = JSON.stringify(this.schema, null, "\t");

  formVisible: boolean = true;

  formState: string;

  schemaState: string;

  modelString: string;

  resultString: string;

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
      this.resultString = JSON.stringify(this.schemaform.formInstance.formController.validationController.errors, null, "\t");
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

  async submit() {
    const results = await this.schemaform.formInstance.formController.validationController.validate();
    if (results.valid) {
      window.alert("everything looks good!");
    } else {
      window.alert("one or more errors: \r\n" + results.results.filter((r) => !r.valid).map((r) => r.message).join("\r\n"));
    }
  }
}
