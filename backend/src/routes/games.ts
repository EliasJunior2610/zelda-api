import { Router } from 'express';
import { zeldaApi } from "../services/axios";

const router = Router();

router.get('/verJogos', async (req: any, res: any) => {
    try {
        const { name } = req.query;

        if (name) {
            const apiResponse = await zeldaApi.get('games', { params: { name } });

            return res.status(200).send(apiResponse.data);
        }

        const apiResponse = await zeldaApi.get('games');

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de jogos.' });
    }
});

router.get('/verJogo/:game_id', async (req: any, res: any) => {
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