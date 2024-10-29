import {FormFieldBase} from "./formFieldBase";
import {Person} from "../person";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldAuthor = FormFieldBase & {
    type?: typeof FormFieldType.Author;
    value?: Person;
};
