import { Router } from "express";
import { BossController } from "../controllers/BossController";

const router = Router();
const bossController = new BossController();

router.get('/bosses', bossController.getAllBosses);

router.get('/bosses/:boss_id', bossController.getBossById);

export {
    router as bossesRoutes
};