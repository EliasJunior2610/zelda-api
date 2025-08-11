import { Router } from 'express';
import { zeldaApi } from "../services/axios";

const router = Router();

router.get('/jogos', async (req: any, res: any) => {
    try {
        const { limit, page, name } = req.query;

        const apiResponse = await zeldaApi.get('games', {
            params: { limit, page, name }
        });

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de jogos.' });
    }
});

router.get('/jogo/:game_id', async (req: any, res: any) => {
    try {
        const { game_id } = req.params;
        const apiResponse = await zeldaApi.get(`games/${game_id}`);

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um jogo específico.' })
    }
});

export {
    router as gamesRoutes
};