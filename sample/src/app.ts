import { BindingSignaler } from "aurelia-templating-resources";
import { observable, inject, useShadowDOM } from "aurelia-framework";
import { IFormOptions } from "aurelia-json-schema-form";

@useShadowDOM()
@inject(BindingSignaler)
export class App {
  form = {
    firstName: {
      $title: "Given name"
    },
    lastName: {
      $placeholder: "Last name"
    },
    age: {
      "!widget": "alt-number"
    },
    phoneNumbers: {},
    addresses: {
      "street": {},
      "@div.row": [
        {
          "@div.col": [
            {
              city: {}
            }
          ]
        },
        {
          "@div.col": [
            {
              state: {}
            }
          ]
        },
        {
          "@div.col-2": [
            {
              zip: {
                $readOnly: true
              }
            }
          ]
        }
      ]
    }
  };
  schema = {
    type: "object",
    properties: {
      firstName: {
        type: "string",
        pattern: "^j",
        minLength: 2
      },
      lastName: {
        type: "string",
        minLength: 3
      },
      age: {
        type: "number",
        minimum: 1
      },
      phoneNumbers: {
        type: "array",
        items: {
          type: "string",
          pattern: "^(\\d{3}-\\d{3}-\\d{4})|(\\d{10})$"
        }
      },
      addresses: {
        type: "array",
        items: {
          type: "object",
          properties: {
            street: {
              type: "string"
            },
            city: {
              type: "string"
            },
            state: {
              type: "string"
            },
            zip: {
              type: "number",
              minimum: 10000,
              maximum: 99999
            },
            country: {
              type: "string",
              const: "USA"
            }
          }
        }
      }
    },
    required: [
      "firstName",
      "lastName"
    ]
  };
  @observable formString: string = JSON.stringify(this.form, null, "\t");

  @observable schemaString: string = JSON.stringify(this.schema, null, "\t");

  formVisible: boolean = true;

  formState: string;

  schemaState: string;

  modelString: string;

  options: IFormOptions = {
    validateOnRender: true
  }

  model: any = {};
  attached() {
    this.refreshModel();
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
