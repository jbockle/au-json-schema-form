export interface ITemplates {
  number: string;
  numberRange: string;
  string: string;
  stringTextArea: string;
  stringRadioEnum: string;
  stringSelectEnum: string;
  object: string;
  array: string;
  arrayTabs: string;
  arrayStringEnum: string;
  boolean: string;
  formats?: IFormatTemplates;
}

export interface IFormatTemplates {
  'date-time'?: string;
  date?: string;
  time?: string;
}
