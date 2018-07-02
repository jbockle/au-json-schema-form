import { IForm } from "aurelia-json-schema-form";

export const form: IForm = {
  "@div.row": [
    {
      "@div.col": [
        {
          firstName: {}
        }
      ]
    },
    {
      "@div.col": [
        {
          lastName: {}
        }
      ]
    }
  ],
  phoneNumbers: {
    $noTitle: true
  },
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
