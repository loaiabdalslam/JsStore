import { IError } from "./interfaces";
import { ERROR_TYPE } from "./enums";
export declare class LogHelper implements IError {
    type: ERROR_TYPE;
    message: string;
    private info_;
    constructor(type: ERROR_TYPE, info?: any);
    throw(): void;
    static log(msg: any): void;
    logError(): void;
    get(): IError;
    private getMsg_;
}
