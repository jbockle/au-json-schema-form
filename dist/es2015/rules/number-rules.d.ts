import { FluentRuleCustomizer } from "aurelia-validation";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SfNumber } from "../form/number/sf-number";
export declare class NumberRules {
    private configuration;
    constructor(configuration: SchemaFormConfiguration);
    register(): void;
    add(): void;
    bind(ctrl: SfNumber, rule: FluentRuleCustomizer<{}, any>): void;
}
