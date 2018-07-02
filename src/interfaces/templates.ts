export interface ITemplates {
  number: string;
  text: string;
  object: string;
  array: string;
  boolean: string;
  formats?: IFormatTemplates;
}

export interface IFormatTemplates {
  "date-time"?: string;
  date?: string;
  time?: string;
}
