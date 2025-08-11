import { Router } from "express";
import { zeldaApi } from "../services/axios";

const router = Router();

router.get('/chefes', async (req, res) => {
    try {
        const { limit, page, name } = req.query;

        const apiResponse = await zeldaApi.get('bosses', {
            params: { limit, page, name }
        });

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de chefes.' });
    }
});

router.get('/chefes/:boss_id', async (req: any, res: any) => {
    try {
        const { boss_id } = req.params;

        const apiResponse = await zeldaApi(`bosses/${boss_id}`);

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um chefe específico.' });
    }
});

export {
    router as bossesRoutes
};