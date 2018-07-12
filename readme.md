# aurelia-json-schema-form

Build aurelia forms based on JSON schema! All built-in templates are styled with bootstrap 4.1.1

to view a demo, clone and checkout the **sample/readme.md**

## Use

- installation
  - `npm install aurelia-json-schema-form`
  - make sure to also install the peer dependencies: 
    - `npm install aurelia-validation`
    - `npm install bootstrap jquery popper.js` (only required if you are using the built-in templates)
- reference the plugin in your aurelia bootstrapper entry point `main.ts/js`
  - `aurelia.use.plugin(PLATFORM.moduleName("aurelia-json-schema-form")`
  - customize the plugin by specifying `PluginOptions` configution function
    - change the validation renderer
    - change templates
    - change validation messages
    - change log level
- create your schema and form (see **sample/readme.md** for an example, more documentation to follow later)
- add an `<au-json-schema-form/>` element:
  ```
  <au-json-schema-form schema.bind="schema" form.bind="form" model.two-way="model" options.bind="{validateOnRender: true}"></au-json-schema-form>
  ```

## Features

- Nested objects and arrays
- Readonly fields
- Default value population (even if not exposed in form) using default/const
- Emmet-like custom element containers! Wrap form elements in an emmet key (supports `@element#id.class.class` syntax)
  ```json
  "@div.col": [
    {
      state: {}
    }
  ]
  ```
- BYO element
  - `schemaKey` is optional, it will bind `schema` and `model` to your element
  - validation does not occur on this schema key, you must perform your own validation
  - use:
    - create element _i.e._ `my-custom-element.ts` & `my-custom-element.html`
    - add element as a global resource in your bootstrapper/feature 
      ```javascript
      aurelia.use.globalResources(PLATFORM.moduleName("../path/to/my-custom-element"))
      ```
    - add `_element` key to your form overrides
      ```json
      {
        _element: {
          elementName: "my-custom-element",
          schemaKey: "firstName"
        }
      }
      ```

## Coming soon/Need help with..

- optionally delete items from model on destroy
- bootstrap templates:
  - add date/time/date-time pickers
- add materialize templates
- add additional schema validation (maybe ajv)
- ability to declare keys you want to include/exclude for an easy, generic form

## Contributing

Want to help? Submit a PR for an item above.
