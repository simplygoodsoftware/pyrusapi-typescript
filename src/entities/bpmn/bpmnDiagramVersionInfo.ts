import {Person} from "../person";

export type BpmnDiagramVersionInfo = {
    bpmn_version: number;
    description?: string;
    create_date: Date;
    delete_date?: Date | null;
    author?: Person;
};
