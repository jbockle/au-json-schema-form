define('main',["require", "exports", "aurelia-pal", "aurelia-framework", "./environment", "aurelia-logging", "aurelia-logging-console", "bootstrap"], function (require, exports, aurelia_pal_1, aurelia_framework_1, environment_1, aurelia_logging_1, aurelia_logging_console_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin(aurelia_pal_1.PLATFORM.moduleName("aurelia-validation"));
        aurelia_framework_1.LogManager.addAppender(new aurelia_logging_console_1.ConsoleAppender());
        aurelia.use
            .plugin(aurelia_pal_1.PLATFORM.moduleName("aurelia-json-schema-form"), function (options) {
            options.logLevel = aurelia_logging_1.logLevel.debug;
        });
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin(aurelia_pal_1.PLATFORM.moduleName("aurelia-testing"));
        }
        aurelia.start().then(function () { return aurelia.setRoot(aurelia_pal_1.PLATFORM.moduleName("app")); });
    }
    exports.configure = configure;
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-templating-resources", "aurelia-framework"], function (require, exports, aurelia_templating_resources_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.form = {
                firstName: {
                    $title: "Given name"
                },
                lastName: {
                    $placeholder: "Last name"
                },
                age: {
                    "!widget": "alt-number"
                },
                phoneNumbers: {},
                addresses: {
                    "street": {},
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
                            "@div.col-2": [
                                {
                                    zip: {
                                        $readOnly: true
                                    }
                                }
                            ]
                        }
                    ]
                }
            };
            this.schema = {
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
                            pattern: "^(\\d{3}-\\d{3}-\\d{4})|(\\d{10})$"
                        }
                    },
                    addresses: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                street: {
                                    type: "string"
                                },
                                city: {
                                    type: "string"
                                },
                                state: {
                                    type: "string"
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
                            }
                        }
                    }
                },
                required: [
                    "firstName",
                    "lastName"
                ]
            };
            this.formString = JSON.stringify(this.form, null, "\t");
            this.schemaString = JSON.stringify(this.schema, null, "\t");
            this.model = {};
        }
        App.prototype.attached = function () {
            this.refreshModel();
        };
        App.prototype.formStringChanged = function (newValue, oldValue) {
            if (!oldValue) {
                return;
            }
            try {
                var obj = JSON.parse(newValue);
                this.form = obj;
                this.formState = undefined;
            }
            catch (_a) {
                this.formState = "invalid json";
            }
        };
        App.prototype.schemaStringChanged = function (newValue, oldValue) {
            if (!oldValue) {
                return;
            }
            try {
                var obj = JSON.parse(newValue);
                this.schema = obj;
                this.schemaState = undefined;
            }
            catch (_a) {
                this.schemaState = "invalid json";
            }
        };
        App.prototype.refreshModel = function () {
            this.modelString = JSON.stringify(this.model, null, "\t");
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", String)
        ], App.prototype, "formString", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", String)
        ], App.prototype, "schemaString", void 0);
        App = __decorate([
            aurelia_framework_1.useShadowDOM(),
            aurelia_framework_1.inject(aurelia_templating_resources_1.BindingSignaler)
        ], App);
        return App;
    }());
    exports.App = App;
});



define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n\n  <h2>Aurelia JSON Schema Form!</h2>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <strong>Schema\n              <span class=\"text-danger\"\n                    if.bind=\"schemaState\"\n                    textcontent.bind=\"schemaState\"></span>\n            </strong>\n            <br>\n            <textarea value.bind=\"schemaString\"\n                      rows=\"12\"\n                      cols=\"80\"></textarea>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <strong>Form\n              <span class=\"text-danger\"\n                    if.bind=\"formState\"\n                    textcontent.bind=\"formState\"></span>\n            </strong>\n            <br>\n            <textarea value.bind=\"formString\"\n                      rows=\"12\"\n                      cols=\"80\"></textarea>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <strong>Model</strong>\n            <button type=\"button\"\n                    class=\"btn-info\"\n                    click.delegate=\"refreshModel()\">refresh</button>\n            <br>\n            <textarea value.to-view=\"modelString\"\n                      rows=\"12\"\n                      cols=\"80\"></textarea> ${model.firstName}\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <hello-world></hello-world>\n        <form>\n          <au-json-schema-form schema.bind=\"schema\"\n                               form.bind=\"form\"\n                               model.two-way=\"model\"\n                               options.bind=\"{validateOnRender:true}\"></au-json-schema-form>\n        </form>\n      </div>\n    </div>\n  </div>\n  <hr>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map