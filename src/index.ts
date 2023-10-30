
import "reflect-metadata";
import "@/users/users.controller";

import { InversifyExpressServer } from 'inversify-express-utils';
import dotenv from 'dotenv';
import cors from 'cors';
import IOCContainer from '@/ioc';

//For env File 
dotenv.config();

const ioc = new IOCContainer();
ioc.init();

const server = new InversifyExpressServer(ioc);
server.setConfig((app) => {
	app.use(cors());
});

const port = process.env.PORT || 8000;
const app = server.build();
app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});