import { IFormOverride } from "aurelia-json-schema-form";

export const form: IFormOverride = {
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
  favoritePet: {},
  foodAllergies: {},
  averageDailyCoffeeConsumption: {
    //$step: 2
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
