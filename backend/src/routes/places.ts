import { Router } from "express";
import { zeldaApi } from "../services/axios";

const router = Router();

router.get('/lugares', async (req: any, res: any) => {
    try {
        const { limit, page, name } = req.query;

        const apiResponse = await zeldaApi.get('places', {
            params: { limit, page, name }
        });

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de lugares.' });
    }
});

router.get('/lugares/:place_id', async (req: any, res: any) => {
    try {
        const { place_id } = req.params;

        const apiResponse = await zeldaApi(`places/${place_id}`);

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um lugar específico.' });
    }
});

export {
    router as placesRoutes
};