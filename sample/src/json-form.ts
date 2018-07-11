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
    $arrayStartEmpty: true,
    $arrayItem: {
      $required: true,
      $noTitle: true
    }
  },
  favoritePet: {},
  foodAllergies: {
    $noSeparator: true,
    $arrayItem: {}
  },
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
            zip: {
              $altTemplate: "aurelia-json-schema-form/templates/bootstrap4/inputs/sft-number.html"
            }
          }
        ]
      }
    ]
  },
  references: {
    $arrayItem: {
      $noTitle: true,
      name: {},
      relationship: {},
      email: {},
      $noSeparator: true
    }
  },
  termsOfService: {},
  $noSeparator: true
}
