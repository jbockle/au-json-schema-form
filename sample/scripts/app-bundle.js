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
    Promise.config({
        longStackTraces: false,
        warnings: {
            wForgottenReturn: false
        }
    });
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
            hiddenPropertyWithDefault: {
                type: "string",
                default: "I'm hidden but still populating the model!"
            },
            foodAllergies: {
                type: "array",
                items: {
                    type: "string",
                    enum: [
                        "peanuts",
                        "shellfish",
                        "egg",
                        "milk"
                    ]
                }
            },
            averageDailyCoffeeConsumption: {
                type: "number",
                description: "probably not enough",
                minimum: 0,
                exclusiveMaximum: 20
            },
            favoritePet: {
                type: "string",
                enum: [
                    "Dogs",
                    "Cats",
                    "Goldfish"
                ]
            },
            termsOfService: {
                type: "boolean",
                description: "By checking this box, blah blah",
                default: true
            },
            phoneNumbers: {
                type: "array",
                minItems: 1,
                maxItems: 3,
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
                            type: "string",
                            default: "manager"
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
            "lastName",
            "averageDailyCoffeeConsumption"
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
            $arrayStartEmpty: true,
            $arrayItem: {
                $noTitle: true
            }
        },
        favoritePet: {},
        foodAllergies: {
            $noSeparator: true,
            $arrayItem: {}
        },
        averageDailyCoffeeConsumption: {},
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
                email: {}
            }
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
                validateOnRender: true,
                arrayStartEmpty: false
            };
            this.model = {
                foodAllergies: [
                    "egg"
                ],
                averageDailyCoffeeConsumption: 1
            };
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
        App.prototype.submit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.schemaform.formInstance.formController.validationController.validate()];
                        case 1:
                            results = _a.sent();
                            if (results.valid) {
                                window.alert("everything looks good!");
                            }
                            else {
                                window.alert("one or more errors: \r\n" + results.results.filter(function (r) { return !r.valid; }).map(function (r) { return r.message; }).join("\r\n"));
                            }
                            return [2];
                    }
                });
            });
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



define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./navbar/navbar\"></require>\n  <require from=\"./app.css\"></require>\n  <div ref=\"styleDiv\"></div>\n  <div class=\"d-flex flex-column h-100\">\n    <navbar></navbar>\n    <div class=\"d-flex flex-row h-100 w-100\">\n      <div class=\"d-flex flex-column h-100 w-25 pr-2\">\n        <div class=\"d-flex flex-column flex-fill w-100 h-100 p-2\">\n          <label for=\"schema\">\n            Schema\n            <span class=\"text-danger\"\n                  if.bind=\"schemaState\"\n                  textcontent.bind=\"schemaState\"></span>\n          </label>\n          <textarea id=\"schema\"\n                    value.bind=\"schemaString\"\n                    class=\"flex-fill border border-secondary no-resize\"></textarea>\n        </div>\n        <div class=\"d-flex flex-column flex-fill w-100 h-100 p-2\">\n          <label for=\"form\">Form\n            <span class=\"text-danger\"\n                  if.bind=\"formState\"\n                  textcontent.bind=\"formState\"></span>\n          </label>\n          <textarea id=\"form\"\n                    value.bind=\"formString\"\n                    class=\"flex-fill border border-secondary no-resize\"></textarea>\n        </div>\n      </div>\n      <div class=\"d-flex flex-column flex-fill w-25 h-100 p-2\">\n        <div class=\"d-flex flex-column flex-fill h-50\">\n          <label for=\"model\">Model</label>\n          <textarea id=\"model\"\n                    value.to-view=\"modelString\"\n                    class=\"flex-fill border border-secondary no-resize\"\n                    readonly></textarea>\n        </div>\n        <div class=\"p-2 border border-danger bg-danger text-light\"\n             if.bind=\"schemaform.validationController.errors.length > 0\">\n          <ul>\n            <li repeat.for=\"error of schemaform.validationController.errors & throttle\">\n              ${error.message}\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"d-flex flex-column flex-fill h-100 pr-2 w-50\">\n        <div class=\"border p-2 clearfix align-items-center bg-dark text-light\">\n          <h4>Options</h4>\n          <form>\n            <div class=\"form-group\">\n              <div class=\"form-check float-left\">\n                <input class=\"form-check-input\"\n                       type=\"checkbox\"\n                       checked.bind=\"options.validateOnRender\"\n                       id=\"validateOnRender\">\n                <label class=\"form-check-label\"\n                       for=\"validateOnRender\">\n                  Validate on render\n                </label>\n              </div>\n            </div>\n            <button type=\"button\"\n                    class=\"btn btn-primary btn-sm float-right\"\n                    click.trigger=\"schemaform.buildForm()\"\n                    if.bind=\"schemaform\">Reload Form</button>\n          </form>\n        </div>\n        <hr>\n        <label>Form</label>\n        <form class=\"p-2 border border-warning h-100\"\n              style=\"overflow-y:auto;overflow-x: hidden\"\n              submit.delegate=\"submit()\">\n          <au-json-schema-form schema.bind=\"schema\"\n                               form.bind=\"form\"\n                               model.two-way=\"model\"\n                               options.bind=\"options\"\n                               if.bind=\"formVisible\"\n                               view-model.ref=\"schemaform\"></au-json-schema-form>\n          <button type=\"submit\"\n                  class=\"btn btn-primary float-right\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = ".no-resize {\n  font-size: .8em;\n  overflow: auto;\n  max-width: 100%;\n  max-height: 100%;\n  white-space: pre;\n  resize: none;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 10px var(--secondary);\n}\n\n::-webkit-scrollbar-track:hover {\n  box-shadow: inset 0 0 15px var(--secondary);\n}\n\n::-webkit-scrollbar-thumb {\n  box-shadow: inset 0 0 20px var(--primary);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  box-shadow: inset 0 0 40px var(--primary);\n}\n"; });
//# sourceMappingURL=app-bundle.js.map