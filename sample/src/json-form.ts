import { IForm } from "aurelia-json-schema-form";

export const form: IForm = {
  firstName: {
    $title: "Given name"
  },
  lastName: {
    $placeholder: "Last name"
  },
  age: {},
  phoneNumbers: {},
  address: {
    street: {},
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
        "@div.col": [
          {
            country: {}
          }
        ]
      },
      {
        "@div.col-2": [
          {
            zip: {}
          }
        ]
      }
    ]
  },
  references: {
    $noTitle: true,
    name: {},
    relationship: {},
    email: {}
  },
  termsOfService: {},
  $noSeparator: true
}
