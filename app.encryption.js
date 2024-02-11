"use strict";
exports.__esModule = true;
exports.AppEncryption = void 0;
var crypto = require("crypto");
var value_data_exception_1 = require("./models/value.data.exception");
var AppEncryption = /** @class */ (function () {
    function AppEncryption() {
        this.algorithm = 'aes-256-cbc';
        this.iv = crypto.randomBytes(16);
    }
    AppEncryption.prototype.AppEncryption = function () { };
    AppEncryption.instance = function () {
        if (AppEncryption._instance == null) {
            AppEncryption._instance = new AppEncryption();
        }
        return AppEncryption._instance;
    };
    AppEncryption.prototype.setKey = function (key) {
        this.key = key;
        return AppEncryption._instance;
    };
    AppEncryption.prototype.encryptText = function (text) {
        if (!this.key)
            throw new value_data_exception_1.ValueDataException("Clé de cryptage non initialisée");
        var cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
        var encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return "".concat(this.iv.toString('hex'), ":").concat(encrypted);
    };
    AppEncryption.prototype.decryptText = function (encryptedText) {
        if (!this.key)
            throw new value_data_exception_1.ValueDataException("Clé de décryptage non initialisée");
        var _a = encryptedText.split(':'), ivHex = _a[0], encryptedData = _a[1];
        var decipher = crypto.createDecipheriv(this.algorithm, this.key, Buffer.from(ivHex, 'hex'));
        var decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    };
    return AppEncryption;
}());
exports.AppEncryption = AppEncryption;
