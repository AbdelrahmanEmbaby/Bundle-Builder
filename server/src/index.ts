import "reflect-metadata";
import 'dotenv/config'

import { container } from "tsyringe";

import { App } from "./App.js";

const PORT = Number(process.env.PORT) || 3000;

const app = container.resolve(App);

app.start(PORT);