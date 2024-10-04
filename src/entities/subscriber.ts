import {Person} from "./person";
import {ApprovalChoice} from "../enums/approvalChoice";

export type Subscriber = {
    person: Person;
    approval_choice?: ApprovalChoice;
};
