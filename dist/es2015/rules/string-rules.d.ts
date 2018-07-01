import { FluentRuleCustomizer } from "aurelia-validation";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SfString } from "../form/text/sf-string";
export declare class StringRules {
    private configuration;
    constructor(configuration: SchemaFormConfiguration);
    register(): void;
    setCustomMessages(): void;
    add(): void;
    bind(ctrl: SfString, rule: FluentRuleCustomizer<{}, any>): void;
}
