"use strict";
exports.__esModule = true;
exports.AppUtilityControl = void 0;
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
    return AppUtilityControl;
}());
exports.AppUtilityControl = AppUtilityControl;
