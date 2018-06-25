import { FluentRuleCustomizer } from "aurelia-validation";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SfText } from "../form/text/sf-text";
export declare class StringRules {
    private configuration;
    constructor(configuration: SchemaFormConfiguration);
    register(): void;
    setCustomMessages(): void;
    add(): void;
    bind(ctrl: SfText, rule: FluentRuleCustomizer<{}, any>): void;
}
