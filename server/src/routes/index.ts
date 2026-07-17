import { Router } from "express";

import imageRoutes from "./image.routes.js";

const router = Router();

router.use("/images", imageRoutes);

export default router;