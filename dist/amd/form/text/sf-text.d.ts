import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
export declare class SfText {
    configuration: SchemaFormConfiguration;
    schema: any;
    model: any;
    required: string;
    title: string;
    id: string;
    constructor(configuration: SchemaFormConfiguration);
    bind(): void;
}
