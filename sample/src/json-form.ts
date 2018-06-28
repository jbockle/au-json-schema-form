export const form = {
  "firstName": {
    "$title": "Given name"
  },
  "lastName": {
    "$placeholder": "Last name"
  },
  "age": {
    "!widget": "alt-number"
  },
  "phoneNumbers": {},
  "addresses": {
    "street": {},
    "@div.row": [
      {
        "@div.col": [
          {
            "city": {}
          }
        ]
      },
      {
        "@div.col": [
          {
            "state": {}
          }
        ]
      },
      {
        "@div.col-2": [
          {
            "zip": {
              "$readOnly": true
            }
          }
        ]
      }
    ]
  }
}
