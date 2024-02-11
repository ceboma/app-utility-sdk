"use strict";
exports.__esModule = true;
exports.AppConvert = void 0;
var app_control_1 = require("./app.control");
var value_data_exception_1 = require("./models/value.data.exception");
var AppConvert = /** @class */ (function () {
    function AppConvert() {
    }
    AppConvert.convertyyyyMMddToDate = function (value) {
        value = AppConvert.convertStringToStringDate(value);
        return new Date(value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8));
    };
    AppConvert.convertDateToStringddMMyyyy = function (date) {
        var newDate = AppConvert.convertStringToStringDate(date.toISOString().split("T")[0]);
        newDate = newDate.substring(6, 8) + "/" + newDate.substring(4, 6) + "/" + newDate.substring(0, 4);
        return newDate;
    };
    AppConvert.convertNumberToString = function (value) {
        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
    };
    AppConvert.convertStringToStringDate = function (s) {
        s = app_control_1.AppControl.escapeSpecialChar(s);
        try {
            var occurrence = s.indexOf("/");
            if (occurrence > 0) {
                var dd = "", mm = "", yyyy = "";
                if (occurrence == 2) {
                    //La date commence par le jour
                    dd = s.substring(0, occurrence);
                    mm = s.substring(3, 5);
                    yyyy = s.substring(6);
                }
                else if (occurrence == 4) {
                    //La date commence par l'annéé
                    yyyy = s.substring(0, occurrence);
                    mm = s.substring(5, 7);
                    dd = s.substring(8);
                }
                s = yyyy + mm + dd;
            }
        }
        catch (e) {
            console.log(e);
            throw new value_data_exception_1.ValueDataException("Le format de la date n'est pas correcte.");
        }
        app_control_1.AppControl.controlValueString(s, "Le format de la date n'est pas correct.");
        return s;
    };
    return AppConvert;
}());
exports.AppConvert = AppConvert;
