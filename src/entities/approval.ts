import {Person} from "./person";
import {ApprovalChoice} from "../enums/approvalChoice";

export type Approval = {
    person: Person;
    approval_choice?: ApprovalChoice;
    step?: number;
};
