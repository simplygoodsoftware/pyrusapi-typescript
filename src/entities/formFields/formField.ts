import {FormFieldAuthor} from "./formFieldAuthor";
import {FormFieldCatalog} from "./formFieldCatalog";
import {FormFieldCheckmark} from "./formFieldCheckmark";
import {FormFieldCreateDate} from "./formFieldCreateDate";
import {FormFieldDate} from "./formFieldDate";
import {FormFieldDueDate} from "./formFieldDueDate";
import {FormFieldDueDateTime} from "./formFieldDueDateTime";
import {FormFieldEmail} from "./formFieldEmail";
import {FormFieldFile} from "./formFieldFile";
import {FormFieldFlag} from "./formFieldFlag";
import {FormFieldFormLink} from "./formFieldFormLink";
import {FormFieldMoney} from "./formFieldMoney";
import {FormFieldMultipleChoice} from "./formFieldMultipleChoice";
import {FormFieldNewFile} from "./formFieldNewFile";
import {FormFieldNote} from "./formFieldNote";
import {FormFieldNumber} from "./formFieldNumber";
import {FormFieldPerson} from "./formFieldPerson";
import {FormFieldPhone} from "./formFieldPhone";
import {FormFieldProject} from "./formFieldProject";
import {FormFieldStatus} from "./formFieldStatus";
import {FormFieldStep} from "./formFieldStep";
import {FormFieldTable} from "./formFieldTable";
import {FormFieldText} from "./formFieldText";
import {FormFieldTime} from "./formFieldTime";
import {FormFieldTitle} from "./formFieldTitle";
import {IdOrCodeRequired, IdRequired} from "../../helpers/types";

type FormFieldCommon =
    | FormFieldAuthor
    | FormFieldCatalog
    | FormFieldCheckmark
    | FormFieldCreateDate
    | FormFieldDate
    | FormFieldDueDate
    | FormFieldDueDateTime
    | FormFieldEmail
    | FormFieldFile
    | FormFieldFlag
    | FormFieldFormLink
    | FormFieldMoney
    | FormFieldMultipleChoice
    | FormFieldNewFile
    | FormFieldNote
    | FormFieldNumber
    | FormFieldPerson
    | FormFieldPhone
    | FormFieldProject
    | FormFieldStatus
    | FormFieldStep
    | FormFieldTable
    | FormFieldText
    | FormFieldTime
    | FormFieldTitle;

export type FormField = FormFieldCommon & IdRequired;

export type FormFieldIdentified = FormFieldCommon & IdOrCodeRequired;
