"use strict";
exports.__esModule = true;
exports.HttpDataResponse = void 0;
var error_response_1 = require("./error.response");
var HttpDataResponse = /** @class */ (function () {
    function HttpDataResponse() {
        this.error = new error_response_1.ErrorResponse(error_response_1.ErrorResponseStatus.KO, "");
        this.error = new error_response_1.ErrorResponse(error_response_1.ErrorResponseStatus.KO, "");
    }
    return HttpDataResponse;
}());
exports.HttpDataResponse = HttpDataResponse;
