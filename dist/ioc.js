"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iocContainer = exports.InitializedContainer = void 0;
const inversify_1 = require("inversify");
const IUsersService_1 = require("@/users/IUsersService");
const users_service_1 = __importDefault(require("@/users/users.service"));
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const users_controller_1 = require("@/users/users.controller");
// Our own container, so we can initialize it and tweak protected variables
class InitializedContainer extends inversify_1.Container {
    constructor() {
        super();
    }
    init() {
        /** Add Bindings here! */
        this.bind(IUsersService_1.IUsersService).to(users_service_1.default).inSingletonScope();
        this.bind(users_controller_1.UsersController).toSelf().inSingletonScope();
    }
}
exports.InitializedContainer = InitializedContainer;
// Create a new container tsoa can use
const iocContainer = new InitializedContainer();
exports.iocContainer = iocContainer;
// make inversify aware of inversify-binding-decorators
iocContainer.load((0, inversify_binding_decorators_1.buildProviderModule)());
//# sourceMappingURL=ioc.js.map