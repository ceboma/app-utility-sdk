"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppUtilityControl = void 0;
var common_1 = require("@nestjs/common");
var value_data_exception_1 = require("./models/value.data.exception");
var AppUtilityControl = /** @class */ (function () {
    function AppUtilityControl() {
    }
    AppUtilityControl.controlValueNumber = function (value, message) {
        if (value == null)
            throw new value_data_exception_1.ValueDataException(message);
        if (value != null && value <= 0)
            throw new value_data_exception_1.ValueDataException(message);
        return true;
    };
    AppUtilityControl.controlValueString = function (value, message) {
        if (value == null)
            throw new value_data_exception_1.ValueDataException(message);
        if (value != null && value.trim().length <= 0)
            throw new value_data_exception_1.ValueDataException(message);
        return true;
    };
    AppUtilityControl.controlValueList = function (value, message) {
        if (value == null)
            throw new value_data_exception_1.ValueDataException(message);
        if (value != null && value.length <= 0)
            throw new value_data_exception_1.ValueDataException(message);
        return true;
    };
    AppUtilityControl.escapeSpecialChar = function (s) {
        try {
            this.controlValueString(s, "Valeur nulle");
            return s.trim().replace(".", "/")
                .replace("/", "/")
                .replace("-", "/")
                .replace("*", "/")
                .replace("+", "/")
                .replace(",", "/");
        }
        catch (e) {
            console.log("escapeSpecialChar : " + e);
        }
        return "";
    };
    AppUtilityControl = __decorate([
        (0, common_1.Injectable)()
    ], AppUtilityControl);
    return AppUtilityControl;
}());
exports.AppUtilityControl = AppUtilityControl;
