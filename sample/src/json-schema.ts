import { IJsonSchemaDefinition } from "aurelia-json-schema-form";

export const schema: IJsonSchemaDefinition = {
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
        title: "Phone number",
        pattern: "^(\\d{3}-\\d{3}-\\d{4})|(\\d{10})$"
      }
    },
    address: {
      type: "object",
      properties: {
        street: {
          type: "string"
        },
        city: {
          type: "string"
        },
        state: {
          type: "string",
          enum: [
            "Alabama",
            "Alaska",
            "American Samoa",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "District Of Columbia",
            "Federated States Of Micronesia",
            "Florida",
            "Georgia",
            "Guam",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Marshall Islands",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Northern Mariana Islands",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Palau",
            "Pennsylvania",
            "Puerto Rico",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virgin Islands",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
          ]
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
      },
      required: [
        "street",
        "city",
        "state",
        "zip"
      ]
    },
    references: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          relationship: {
            type: "string"
          },
          email: {
            type: "string",
            format: "email"
          }
        },
        required: [
          "name",
          "relationship",
          "email"
        ]
      }
    }
  },
  required: [
    "firstName",
    "lastName"
  ]
}