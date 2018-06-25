import { IRules } from "../interfaces/rules";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { FluentRuleCustomizer } from "aurelia-validation";
export declare class CommonRules implements IRules {
    private configuration;
    constructor(configuration: SchemaFormConfiguration);
    type: string;
    register(): void;
    setCustomMessages(): void;
    add(): void;
    bind(ctrl: any): FluentRuleCustomizer<{}, any>;
}
