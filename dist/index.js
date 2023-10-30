"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const ioc_1 = require("@/ioc");
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = require("#/generated/routes");
//For env File 
dotenv_1.default.config();
// Bind all dependencies
ioc_1.iocContainer.init();
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('tiny'));
app.use(express_1.default.static("public"));
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
(0, routes_1.RegisterRoutes)(app);
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map