import { Router, type IRouter } from "express";
import healthRouter from "./health";
import ctaRouter from "./cta";

const router: IRouter = Router();

router.use(healthRouter);
router.use(ctaRouter);

export default router;
