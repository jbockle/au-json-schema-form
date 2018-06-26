import { FluentRuleCustomizer } from "aurelia-validation";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SfArray } from "../form/array/sf-array";
export declare class ArrayRules {
    private configuration;
    constructor(configuration: SchemaFormConfiguration);
    register(): void;
    add(): void;
    bind(ctrl: SfArray, rule: FluentRuleCustomizer<{}, any>): void;
}
