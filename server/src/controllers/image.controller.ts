import type { Request, Response } from "express";
import { injectable } from "tsyringe";

import { ImageService } from "../services/image.service.js";

@injectable()
export class ImageController {
  constructor(private readonly service: ImageService) {}

  public getImage = (req: Request, res: Response): void => {
    const imagePath = Array.isArray(req.params.path)
      ? req.params.path.join("/")
      : req.params.path;

    const file = this.service.getImagePath(String(imagePath));

    res.sendFile(file);
  };
}
