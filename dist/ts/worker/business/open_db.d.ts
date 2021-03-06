import { IError } from "../interfaces";
import { BaseDb } from "./base_db";
export declare class OpenDb extends BaseDb {
    constructor(onSuccess: () => void, onError: (err: IError) => void);
    execute(): void;
    private setPrimaryKey_;
}
