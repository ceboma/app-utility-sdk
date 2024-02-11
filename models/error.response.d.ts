export declare class ErrorResponse {
    errorCode: string;
    errorDescription: string;
    constructor(code: ErrorResponseStatus, description: string);
    clear(): void;
    toString(): string;
}
export declare enum ErrorResponseStatus {
    OK = "OK",
    KO = "KO"
}
