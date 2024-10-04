import {OperatorId} from "../enums/operatorId";

export type FormFilter = {
    field_id: number;
    operator_id: OperatorId;
    values: string[];
};
