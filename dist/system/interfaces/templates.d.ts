export interface ITemplates {
    number: string;
    numberRange: string;
    string: string;
    stringRadioEnum: string;
    stringSelectEnum: string;
    object: string;
    array: string;
    arrayStringEnum: string;
    boolean: string;
    formats?: IFormatTemplates;
}
export interface IFormatTemplates {
    "date-time"?: string;
    date?: string;
    time?: string;
}
