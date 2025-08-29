import { Router } from 'express';
import { GameController } from '../controllers/GameController';

const router = Router();
const gameController = new GameController();

router.get('/games', gameController.getAllGames);

router.get('/games/:game_id', gameController.getGameById);

export {
    router as gamesRoutes
};