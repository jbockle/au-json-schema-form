import { FluentRuleCustomizer } from "aurelia-validation";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SfBoolean } from "../form/boolean/sf-boolean";
export declare class BooleanRules {
    private configuration;
    constructor(configuration: SchemaFormConfiguration);
    register(): void;
    add(): void;
    bind(ctrl: SfBoolean, rule: FluentRuleCustomizer<{}, any>): void;
}
