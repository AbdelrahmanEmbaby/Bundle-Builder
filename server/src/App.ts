
import express from "express";
import type { Express } from 'express'
import { injectable } from "tsyringe";

import routes from "./routes/index.js";

@injectable()
export class App {
    private readonly app: Express;

    constructor() {
        this.app = express();

        this.configureMiddlewares();
        this.configureRoutes();
    }

    private configureMiddlewares(): void {
        this.app.use(express.json());
    }

    private configureRoutes(): void {
        this.app.use(routes);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    }
}