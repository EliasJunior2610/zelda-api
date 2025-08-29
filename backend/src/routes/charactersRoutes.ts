import { Router } from "express";
import { CharacterController } from "../controllers/CharacterController";

const router = Router();
const characterController = new CharacterController();

router.get('/characters', characterController.getAllCharacters);

router.get('/characters/:character_id', characterController.getCharacterById);

export {
    router as charactersRoutes
};