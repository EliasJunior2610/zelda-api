import { Router } from "express";
import { DungeonController } from "../controllers/DungeonController";

const router = Router();
const dungeonController = new DungeonController();

router.get('/dungeons', dungeonController.getAllDungeons);

router.get('/dungeons/:dungeon_id', dungeonController.getDungeonById);

export {
    router as dungeonsRoutes
};