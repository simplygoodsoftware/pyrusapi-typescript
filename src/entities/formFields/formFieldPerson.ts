import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {Person} from "../person";

export type FormFieldPerson = FormFieldBase & {
    type?: FormFieldType.Person;
    value?: Person;
};
