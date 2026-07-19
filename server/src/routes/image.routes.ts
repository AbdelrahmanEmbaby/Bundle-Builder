import { Router } from "express";
import { container } from "tsyringe";

import { ImageController } from "../controllers/image.controller.js";

const router = Router();

const controller = container.resolve(ImageController);

router.get("/*path", controller.getImage);

export default router;
