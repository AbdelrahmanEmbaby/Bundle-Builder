import type { Request, Response } from "express";
import { injectable } from "tsyringe";

import { ImageService } from "../services/image.service.js";

@injectable()
export class ImageController {
    constructor(
        private readonly service: ImageService
    ) {}

    public getImage = (req: Request, res: Response): void => {
        const file = this.service.getImagePath(String(req.params.path));

        res.sendFile(file);
    };
}