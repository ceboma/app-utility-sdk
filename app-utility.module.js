"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppUtilityModule = void 0;
var axios_1 = require("@nestjs/axios");
var common_1 = require("@nestjs/common");
var app_utility_service_1 = require("./app-utility.service");
var app_control_1 = require("./app.control");
var app_convert_1 = require("./app.convert");
var AppUtilityModule = /** @class */ (function () {
    function AppUtilityModule() {
    }
    AppUtilityModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule],
            providers: [app_utility_service_1.AppUtilityService, app_control_1.AppUtilityControl, app_convert_1.AppUtilityConvert],
            exports: [app_utility_service_1.AppUtilityService]
        })
    ], AppUtilityModule);
    return AppUtilityModule;
}());
exports.AppUtilityModule = AppUtilityModule;
