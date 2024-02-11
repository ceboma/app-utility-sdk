"use strict";
exports.__esModule = true;
exports.IService = void 0;
var error_response_1 = require("./models/error.response");
var IService = /** @class */ (function () {
    function IService() {
        this._error = new error_response_1.ErrorResponse(error_response_1.ErrorResponseStatus.KO, "");
    }
    IService.prototype.error = function () {
        return this._error;
    };
    return IService;
}());
exports.IService = IService;
