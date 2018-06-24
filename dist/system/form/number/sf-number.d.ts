import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
export declare class SfNumber {
    configuration: SchemaFormConfiguration;
    schema: any;
    model: number;
    required: string;
    title: string;
    id: string;
    constructor(configuration: SchemaFormConfiguration);
    bind(): void;
}
