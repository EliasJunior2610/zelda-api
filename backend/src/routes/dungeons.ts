import { Router } from "express";
import { zeldaApi } from "../services/axios";

const router = Router();

router.get('/masmorras', async (req: any, res: any) => {
    try {
        const { limit, page, name } = req.query;

        const apiResponse = await zeldaApi.get('dungeons', {
            params: { limit, page, name }
        });

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de masmorras.' });
    }
});

router.get('/masmorras/:dungeon_id', async (req: any, res: any) => {
    try {
        const { dungeon_id } = req.params;

        const apiResponse = await zeldaApi(`dungeons/${dungeon_id}`);

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro durante a requisição de uma masmorra específica.' });
    }
});

export {
    router as dungeonsRoutes
};