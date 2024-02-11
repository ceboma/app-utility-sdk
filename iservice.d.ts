import { ErrorResponse } from "./models/error.response";
export declare abstract class IService {
    private _error;
    error(): ErrorResponse;
}
