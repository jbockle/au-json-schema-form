import { StringRules } from "./string-rules";
import { NumberRules } from "./number-rules";
import { CommonRules } from "./common-rules";
export declare class RulesFactory {
    type: string;
    rules: any;
    constructor(stringRules: StringRules, numberRules: NumberRules, commonRules: CommonRules);
    register(): void;
    add(): void;
    bind(ctrl: any): void;
}
