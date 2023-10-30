"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("@/users/users.controller");
var inversify_express_utils_1 = require("inversify-express-utils");
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var ioc_1 = __importDefault(require("@/ioc"));
//For env File 
dotenv_1.default.config();
var ioc = new ioc_1.default();
ioc.init();
var server = new inversify_express_utils_1.InversifyExpressServer(ioc);
server.setConfig(function (app) {
    app.use((0, cors_1.default)());
});
var port = process.env.PORT || 8000;
var app = server.build();
app.listen(port, function () {
    console.log("Server is Fire at http://localhost:".concat(port));
});
