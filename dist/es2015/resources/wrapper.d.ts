import { ITemplate } from "../interfaces/template";
export declare class Wrapper {
    static readonly containerMarker: string;
    static readonly emmetRegex: RegExp;
    static readonly voidElements: string[];
    static isContainer(key: string): boolean;
    start?: string;
    end?: string;
    constructor(key: string);
    private isVoidElement;
    private validateMatches;
    private getEmmetAttr;
    applyEnd(template: ITemplate): void;
    applyStart(template: ITemplate): void;
}
