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
            options.validationMessages = { pattern: "Must start with j" };
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
    };
});



define('json-form',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.form = {
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



define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./navbar/navbar\"></require>\n  <require from=\"./app.css\"></require>\n  <div ref=\"styleDiv\"></div>\n  <div class=\"d-flex flex-column h-100\">\n    <navbar></navbar>\n    <div class=\"d-flex flex-row h-100\">\n      <div class=\"d-flex flex-column h-100 w-50 pr-2\">\n        <div class=\"d-flex flex-column flex-fill w-100 h-100 p-2\">\n          <label for=\"schema\">\n            Schema\n            <span class=\"text-danger\" if.bind=\"schemaState\" textcontent.bind=\"schemaState\"></span>\n          </label>\n          <textarea id=\"schema\" value.bind=\"schemaString\" class=\"flex-fill border border-secondary no-resize\"></textarea>\n        </div>\n        <div class=\"d-flex flex-column flex-fill w-100 h-100 p-2\">\n          <label for=\"form\">Form\n            <span class=\"text-danger\" if.bind=\"formState\" textcontent.bind=\"formState\"></span>\n          </label>\n          <textarea id=\"form\" value.bind=\"formString\" class=\"flex-fill border border-secondary no-resize\"></textarea>\n        </div>\n        <div class=\"d-flex flex-column flex-fill w-100 h-100 p-2\">\n          <label for=\"model\">Model</label>\n          <textarea id=\"model\" value.to-view=\"modelString\" class=\"flex-fill border border-secondary no-resize\" readonly></textarea>\n        </div>\n      </div>\n      <div class=\"d-flex flex-column flex-fill h-100 pr-2\">\n        <label>Options</label>\n        <div class=\"border p-2 clearfix align-items-center bg-dark text-light\">\n          <div class=\"form-check float-left align-items-center\">\n            <input class=\"form-check-input\" type=\"checkbox\" checked.bind=\"options.validateOnRender\" id=\"validateOnRender\">\n            <label class=\"form-check-label\" for=\"validateOnRender\">\n              Validate on render\n            </label>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary btn-sm float-right\" click.trigger=\"schemaform.buildForm()\" if.bind=\"schemaform\">Reload Form</button>\n        </div>\n        <hr>\n        <label>Form</label>\n        <form class=\"p-2 border border-warning\">\n          <au-json-schema-form schema.bind=\"schema\" form.bind=\"form\" model.two-way=\"model\" options.bind=\"options\" if.bind=\"formVisible\"\n            view-model.ref=\"schemaform\"></au-json-schema-form>\n        </form>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = ".no-resize {\n  resize: none;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 10px var(--secondary);\n}\n\n::-webkit-scrollbar-track:hover {\n  box-shadow: inset 0 0 15px var(--secondary);\n}\n\n::-webkit-scrollbar-thumb {\n  box-shadow: inset 0 0 20px var(--primary);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  box-shadow: inset 0 0 40px var(--primary);\n}\n"; });
//# sourceMappingURL=app-bundle.js.map