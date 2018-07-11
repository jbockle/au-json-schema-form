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
  references: {
    $arrayAsTabs: true,
    $tabTitle: "${model[$index].name || 'Item ' + ($index + 1)}",
    $arrayItem: {
      $noTitle: true,
      name: {},
      relationship: {},
      email: {},
      $noSeparator: true
    }
  },
  phoneNumbers: {
    $noEmptyArrayInitialization: true,
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
  termsOfService: {},
  $noSeparator: true
}
