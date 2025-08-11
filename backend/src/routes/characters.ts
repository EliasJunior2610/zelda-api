import { Router } from "express";
import { zeldaApi } from "../services/axios";

const router = Router();

router.get('/personagens', async (req: any, res: any) => {
    try {
        const { limit, page, name } = req.query;

        const apiResponse = await zeldaApi.get('characters', {
            params: { limit, page, name }
        });

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de personagens.' });
    }
});

router.get('/personagens/:character_id', async (req: any, res: any) => {
    try {
        const { character_id } = req.params;

        const apiResponse = await zeldaApi(`characters/${character_id}`);

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um personagens específico.' });
    }
});

export {
    router as charactersRoutes
};