"use strict";
exports.__esModule = true;
exports.ErrorResponseStatus = exports.ErrorResponse = void 0;
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse(code, description) {
        this.errorCode = ErrorResponseStatus.KO;
        this.errorDescription = "";
        this.errorCode = code;
        this.errorDescription = description;
    }
    ErrorResponse.prototype.clear = function () {
        this.errorCode = ErrorResponseStatus.KO;
        this.errorDescription = "";
    };
    ErrorResponse.prototype.toString = function () {
        return "[".concat(this.errorCode, "] : ").concat(this.errorDescription);
    };
    return ErrorResponse;
}());
exports.ErrorResponse = ErrorResponse;
var ErrorResponseStatus;
(function (ErrorResponseStatus) {
    ErrorResponseStatus["OK"] = "OK";
    ErrorResponseStatus["KO"] = "KO";
})(ErrorResponseStatus = exports.ErrorResponseStatus || (exports.ErrorResponseStatus = {}));
