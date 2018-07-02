define('navbar/navbar',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Navbar = (function () {
        function Navbar() {
            this.themes = [
                "cerulean",
                "cosmo",
                "cyborg",
                "darkly",
                "flatly",
                "journal",
                "litera",
                "lumen",
                "lux",
                "materia",
                "minty",
                "pulse",
                "sandstone",
                "simplex",
                "sketchy",
                "slate",
                "solar",
                "spacelab",
                "superhero",
                "united",
                "yeti"
            ];
            this.current = "minty";
        }
        Navbar.prototype.themeSelected = function (theme) {
            this.current = theme;
            aurelia_framework_1.DOM
                .getElementById('linkStylesheet')
                .setAttribute("href", "css/" + theme + "/bootstrap.min.css");
        };
        return Navbar;
    }());
    exports.Navbar = Navbar;
});



define('text!navbar/navbar.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-dark navbar-expand-sm bg-primary mb-3\">\n    <a class=\"navbar-brand\" href=\"#\">Aurelia JSON Schema Form</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" ref=\"toggler\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav ml-auto pr-2\">\n        <li class=\"nav-item dropdown dropleft\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"themeSelector\" role=\"button\" data-toggle=\"dropdown\">\n            <em class=\"small\">Theme:</em>&nbsp;\n            <strong>${current}</strong>\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"themeSelector\">\n            <a class=\"dropdown-item text-center ${current === theme ? 'active' : ''}\" href=\"#\" repeat.for=\"theme of themes\" click.trigger=\"themeSelected(theme)\">${theme}</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n"; });
define('main',["require", "exports", "aurelia-logging-console", "aurelia-framework", "aurelia-logging", "aurelia-pal", "./environment", "bootstrap"], function (require, exports, aurelia_logging_console_1, aurelia_framework_1, aurelia_logging_1, aurelia_pal_1, environment_1) {
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



define('json-schema',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.schema = {
        type: "object",
        properties: {
            firstName: {
                type: "string",
                minLength: 3
            },
            lastName: {
                type: "string",
                minLength: 3
            },
            termsOfService: {
                type: "boolean",
                description: "By checking this box, blah blah"
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
                        const: "United States of America"
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
    };
});



define('json-form',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.form = {
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
    };
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
define('app',["require", "exports", "aurelia-templating-resources", "aurelia-framework", "./json-form", "./json-schema"], function (require, exports, aurelia_templating_resources_1, aurelia_framework_1, json_form_1, json_schema_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(signaler, engine) {
            this.signaler = signaler;
            this.engine = engine;
            this.form = json_form_1.form;
            this.schema = json_schema_1.schema;
            this.formString = JSON.stringify(this.form, null, "\t");
            this.schemaString = JSON.stringify(this.schema, null, "\t");
            this.formVisible = true;
            this.options = {
                validateOnRender: true
            };
            this.model = {};
        }
        App.prototype.attached = function () {
            var _this = this;
            this.refreshModel();
            this.schemaform.validationController.subscribe(function (event) {
                _this.refreshModel();
            });
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
            aurelia_framework_1.inject(aurelia_templating_resources_1.BindingSignaler, aurelia_framework_1.BindingEngine),
            __metadata("design:paramtypes", [aurelia_templating_resources_1.BindingSignaler, aurelia_framework_1.BindingEngine])
        ], App);
        return App;
    }());
    exports.App = App;
});



define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./navbar/navbar\"></require>\n  <require from=\"./app.css\"></require>\n  <div ref=\"styleDiv\"></div>\n  <div class=\"d-flex flex-column h-100\">\n    <navbar></navbar>\n    <div class=\"d-flex flex-row h-100\">\n      <div class=\"d-flex flex-column h-100 w-50 pr-2\">\n        <div class=\"d-flex flex-column flex-fill w-100 h-100 p-2\">\n          <label for=\"schema\">\n            Schema\n            <span class=\"text-danger\"\n                  if.bind=\"schemaState\"\n                  textcontent.bind=\"schemaState\"></span>\n          </label>\n          <textarea id=\"schema\"\n                    value.bind=\"schemaString\"\n                    class=\"flex-fill border border-secondary no-resize\"></textarea>\n        </div>\n        <div class=\"d-flex flex-column flex-fill w-100 h-100 p-2\">\n          <label for=\"form\">Form\n            <span class=\"text-danger\"\n                  if.bind=\"formState\"\n                  textcontent.bind=\"formState\"></span>\n          </label>\n          <textarea id=\"form\"\n                    value.bind=\"formString\"\n                    class=\"flex-fill border border-secondary no-resize\"></textarea>\n        </div>\n        <div class=\"d-flex flex-column flex-fill w-100 h-100 p-2\">\n          <label for=\"model\">Model</label>\n          <textarea id=\"model\"\n                    value.to-view=\"modelString\"\n                    class=\"flex-fill border border-secondary no-resize\"\n                    readonly></textarea>\n        </div>\n      </div>\n      <div class=\"d-flex flex-column flex-fill h-100 pr-2\">\n        <div class=\"border p-2 clearfix align-items-center bg-dark text-light\">\n          <h4>Options</h4>\n          <form>\n            <div class=\"form-group\">\n              <div class=\"form-check float-left\">\n                <input class=\"form-check-input\"\n                       type=\"checkbox\"\n                       checked.bind=\"options.validateOnRender\"\n                       id=\"validateOnRender\">\n                <label class=\"form-check-label\"\n                       for=\"validateOnRender\">\n                  Validate on render\n                </label>\n              </div>\n            </div>\n            <button type=\"button\"\n                    class=\"btn btn-primary btn-sm float-right\"\n                    click.trigger=\"schemaform.buildForm()\"\n                    if.bind=\"schemaform\">Reload Form</button>\n          </form>\n        </div>\n        <hr>\n        <label>Form</label>\n        <form class=\"p-2 border border-warning\">\n          <au-json-schema-form schema.bind=\"schema\"\n                               form.bind=\"form\"\n                               model.two-way=\"model\"\n                               options.bind=\"options\"\n                               if.bind=\"formVisible\"\n                               view-model.ref=\"schemaform\"></au-json-schema-form>\n        </form>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = ".no-resize {\n  resize: none;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 10px var(--secondary);\n}\n\n::-webkit-scrollbar-track:hover {\n  box-shadow: inset 0 0 15px var(--secondary);\n}\n\n::-webkit-scrollbar-thumb {\n  box-shadow: inset 0 0 20px var(--primary);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  box-shadow: inset 0 0 40px var(--primary);\n}\n"; });
//# sourceMappingURL=app-bundle.js.map