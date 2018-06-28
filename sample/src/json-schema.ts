export const schema = {
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "pattern": "^j",
      "minLength": 2
    },
    "lastName": {
      "type": "string",
      "minLength": 3
    },
    "age": {
      "type": "number",
      "minimum": 1
    },
    "phoneNumbers": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(\\d{3}-\\d{3}-\\d{4})|(\\d{10})$"
      }
    },
    "addresses": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "street": {
            "type": "string"
          },
          "city": {
            "type": "string"
          },
          "state": {
            "type": "string"
          },
          "zip": {
            "type": "number",
            "minimum": 10000,
            "maximum": 99999
          },
          "country": {
            "type": "string",
            "const": "USA"
          }
        }
      }
    }
  },
  "required": [
    "firstName",
    "lastName"
  ]
}
