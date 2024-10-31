import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {Person} from "../person";

export type FormFieldPerson = FormFieldBase & {
    type?: typeof FormFieldType.Person;
    value?: Person;
};
