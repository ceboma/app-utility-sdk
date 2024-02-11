"use strict";
exports.__esModule = true;
exports.AppControl = void 0;
var value_data_exception_1 = require("./models/value.data.exception");
var AppControl = /** @class */ (function () {
    function AppControl() {
    }
    AppControl.controlValueNumber = function (value, message) {
        if (value == null)
            throw new value_data_exception_1.ValueDataException(message);
        if (value != null && value <= 0)
            throw new value_data_exception_1.ValueDataException(message);
        return true;
    };
    AppControl.controlValueString = function (value, message) {
        if (value == null)
            throw new value_data_exception_1.ValueDataException(message);
        if (value != null && value.trim().length <= 0)
            throw new value_data_exception_1.ValueDataException(message);
        return true;
    };
    AppControl.controlValueList = function (value, message) {
        if (value == null)
            throw new value_data_exception_1.ValueDataException(message);
        if (value != null && value.length <= 0)
            throw new value_data_exception_1.ValueDataException(message);
        return true;
    };
    AppControl.escapeSpecialChar = function (s) {
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
    return AppControl;
}());
exports.AppControl = AppControl;
