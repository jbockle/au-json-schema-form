import { StringRules } from "./string-rules";
import { NumberRules } from "./number-rules";
import { CommonRules } from "./common-rules";
import { BooleanRules } from "./boolean-rules";
import { ArrayRules } from "./array-rules";
export declare class RulesFactory {
    type: string;
    rules: any;
    constructor(commonRules: CommonRules, stringRules: StringRules, numberRules: NumberRules, booleanRules: BooleanRules, arrayRules: ArrayRules);
    register(): void;
    add(): void;
    bind(ctrl: any): void;
}
