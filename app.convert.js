"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppUtilityConvert = void 0;
var common_1 = require("@nestjs/common");
var app_control_1 = require("./app.control");
var value_data_exception_1 = require("./models/value.data.exception");
var AppUtilityConvert = /** @class */ (function () {
    function AppUtilityConvert() {
    }
    AppUtilityConvert_1 = AppUtilityConvert;
    AppUtilityConvert.convertyyyyMMddToDate = function (value) {
        value = AppUtilityConvert_1.convertStringToStringDate(value);
        return new Date(value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8));
    };
    AppUtilityConvert.convertDateToStringddMMyyyy = function (date) {
        var newDate = AppUtilityConvert_1.convertStringToStringDate(date.toISOString().split("T")[0]);
        newDate = newDate.substring(6, 8) + "/" + newDate.substring(4, 6) + "/" + newDate.substring(0, 4);
        return newDate;
    };
    AppUtilityConvert.convertNumberToString = function (value) {
        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
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
    var AppUtilityConvert_1;
    AppUtilityConvert = AppUtilityConvert_1 = __decorate([
        (0, common_1.Injectable)()
    ], AppUtilityConvert);
    return AppUtilityConvert;
}());
exports.AppUtilityConvert = AppUtilityConvert;
