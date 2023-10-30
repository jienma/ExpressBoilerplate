"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var IUsersService_1 = require("@/users/IUsersService");
var users_service_1 = __importDefault(require("@/users/users.service"));
var IOCContainer = /** @class */ (function (_super) {
    __extends(IOCContainer, _super);
    function IOCContainer() {
        return _super.call(this) || this;
    }
    IOCContainer.prototype.init = function () {
        this.bind(IUsersService_1.IUsersService).to(users_service_1.default);
    };
    return IOCContainer;
}(inversify_1.Container));
exports.default = IOCContainer;
