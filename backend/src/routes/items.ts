import { Router } from "express";
import { zeldaApi } from "../services/axios";

const router = Router();

router.get('/itens', async (req: any, res: any) => {
    try {
        const { limit, page, name } = req.query;

        const apiResponse = await zeldaApi.get('items', {
            params: { limit, page, name }
        });

        res.status(200).send(apiResponse.data);

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de itens.' });
    }
});

router.get('/itens/:item_id', async (req: any, res: any) => {
    try {
        const { item_id } = req.params;

        const apiResponse = await zeldaApi(`items/${item_id}`);

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um item específico.' });
    }
});

export {
    router as itemsRoutes
};