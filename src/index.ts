
import "reflect-metadata";
import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { iocContainer } from '@/ioc';
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "$/routes";
import SwaggerDoc from "$/swagger.json";

//For env File 
dotenv.config();

// Bind all dependencies
iocContainer.init();

const port = process.env.PORT || 8000;
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static("public"));
app.use(
	"/docs",
	swaggerUi.serve,
	swaggerUi.setup(SwaggerDoc)
);

RegisterRoutes(app);

app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});