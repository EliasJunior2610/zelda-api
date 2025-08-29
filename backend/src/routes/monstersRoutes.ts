import { Router } from "express";
import { MonsterController } from "../controllers/MonsterController";

const router = Router();
const monsterController = new MonsterController();

router.get('/monsters', monsterController.getAllMonsters);

router.get('/monsters/:monster_id', monsterController.getMonstersById);

export {
    router as monstersRoutes
};