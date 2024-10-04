import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldProject = FormFieldBase & {
    type?: FormFieldType.Project;
    value?: ProjectArray;
};

type ProjectArray = {
    projects: Project[];
};

type Project = {
    id: number;
    name?: string;
    parent?: Project;
};
