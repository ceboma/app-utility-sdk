import { ErrorResponse } from "./error.response";
export declare class HttpDataResponse<T> {
    error: ErrorResponse;
    response: T;
    constructor();
}
