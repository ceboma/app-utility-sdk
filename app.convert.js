"use strict";
exports.__esModule = true;
exports.AppUtilityConvert = void 0;
var app_control_1 = require("./app.control");
var value_data_exception_1 = require("./models/value.data.exception");
var AppUtilityConvert = /** @class */ (function () {
    function AppUtilityConvert() {
    }
    AppUtilityConvert.convertyyyyMMddToDate = function (value) {
        value = AppUtilityConvert.convertStringToStringDate(value);
        return new Date(value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8));
    };
    AppUtilityConvert.convertDateToStringddMMyyyy = function (date) {
        var newDate = AppUtilityConvert.convertStringToStringDate(date.toISOString().split("T")[0]);
        newDate = newDate.substring(6, 8) + "/" + newDate.substring(4, 6) + "/" + newDate.substring(0, 4);
        return newDate;
    };
    AppUtilityConvert.convertNumberToString = function (value) {
        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
    };
    AppUtilityConvert.addDays = function (startDate, days) {
        var dateEcheance = new Date();
        dateEcheance.setDate(startDate.getDate() + days);
        return dateEcheance;
    };
    AppUtilityConvert.convertStringToStringDate = function (s) {
        s = app_control_1.AppUtilityControl.escapeSpecialChar(s);
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
        app_control_1.AppUtilityControl.controlValueString(s, "Le format de la date n'est pas correct.");
        return s;
    };
    return AppUtilityConvert;
}());
exports.AppUtilityConvert = AppUtilityConvert;
