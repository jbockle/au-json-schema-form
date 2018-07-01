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

## Coming soon/Need help with..

- clean up array handling
- optionally override templates per form item
- optionally delete items from model on destroy
- bootstrap templates:
  - add date/time/date-time pickers
  - add alternate array template using tabs
- add materialize templates
- add additional schema validation (maybe ajv)

## Contributing

Want to help? Submit a PR for an item above.
