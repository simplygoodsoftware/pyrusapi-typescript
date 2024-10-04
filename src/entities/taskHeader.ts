import {Person} from "./person";

export type TaskHeader = {
    id: number;
    text: string;
    create_date: Date;
    last_modified_date: Date;
    author: Person;
    close_date?: Date;
    responsible?: Person;
    due_date?: Date;
};
