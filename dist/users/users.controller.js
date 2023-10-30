"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_express_utils_1 = require("inversify-express-utils");
var IUsersService_1 = require("./IUsersService");
var inversify_1 = require("inversify");
var UsersController = /** @class */ (function () {
    function UsersController(_userService) {
        this._userService = _userService;
    }
    UsersController.prototype.index = function (req, res, next) {
        var users = this._userService.getUsers();
        return res.status(200).json(users);
    };
    __decorate([
        (0, inversify_express_utils_1.httpGet)("/"),
        __param(0, (0, inversify_express_utils_1.request)()),
        __param(1, (0, inversify_express_utils_1.response)()),
        __param(2, (0, inversify_express_utils_1.next)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "index", null);
    UsersController = __decorate([
        (0, inversify_express_utils_1.controller)("/users"),
        __param(0, (0, inversify_1.inject)(IUsersService_1.IUsersService)),
        __metadata("design:paramtypes", [Object])
    ], UsersController);
    return UsersController;
}());
exports.default = UsersController;
