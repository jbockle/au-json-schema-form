import { IFormOverride } from './plugin';

export const form: IFormOverride = {
  '@div.row': [
    {
      '@div.col': [
        {
          firstName: {}
        }
      ]
    },
    {
      '@div.col': [
        {
          lastName: {
            $isReadOnly: (item) => {
              return !item.firstName;
            }
          }
        }
      ]
    }
  ],
  'references': {
    $arrayAsTabs: true,
    $tabTitle: '${model[$index].name || \'Item \' + ($index + 1)}',
    $arrayItem: {
      $noTitle: true,
      name: {},
      relationship: {},
      email: {},
      $canRemove: (item) => {
        return !item.relationship;
      },
      $noSeparator: true
    }
  },
  'phoneNumbers': {
    $noEmptyArrayInitialization: true,
    $arrayItem: {
      $required: true,
      $noTitle: true
    }
  },
  'favoritePet': {},
  'foodAllergies': {
    $noSeparator: true,
    $arrayItem: {}
  },
  'averageDailyCoffeeConsumption': {
    // $step: 2
  },
  'address': {
    'street': {},
    '@div.row': [
      {
        '@div.col': [
          {
            city: {}
          }
        ]
      },
      {
        '@div.col': [
          {
            state: {}
          }
        ]
      },
      {
        '@div.col': [
          {
            country: {}
          }
        ]
      },
      {
        '@div.col-2': [
          {
            zip: {
              $altTemplate: '../../templates/bootstrap4/inputs/sft-number.html'
            }
          }
        ]
      }
    ]
  },
  'termsOfService': {},
  '_element': [{
    elementName: 'random-number-generator',
    schemaKey: 'random'
  }],
  '$noSeparator': true
};
