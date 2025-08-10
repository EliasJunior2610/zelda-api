import { Router } from "express";
import { zeldaApi } from "../services/axios";

const router = Router();

router.get('/monstros', async (req: any, res: any) => {
    try {
        const { name } = req.query;

        if (name) {
            const apiResponse = await zeldaApi.get('monsters', { params: { name } });

            return res.status(200).send(apiResponse.data);
        }

        const apiResponse = await zeldaApi.get('monsters');

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de monstros.' });
    }
});

router.get('/monstros/:monsters_id', async (req: any, res: any) => {
    try {
        const { monsters_id } = req.params;

        const apiResponse = await zeldaApi.get(`monsters/${monsters_id}`);

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um monstro específico.' });
    }
});

export {
    router as monstersRoutes
};