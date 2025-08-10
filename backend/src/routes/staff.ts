import Router from 'express';
import { zeldaApi } from '../services/axios';

const router = Router();

router.get('/funcionarios', async (req: any, res: any) => {
    try {
        const { name } = req.query;

        if (name) {
            const apiResponse = await zeldaApi.get('staff', { params: { name } });

            return res.status(200).send(apiResponse.data);
        }

        const apiResponse = await zeldaApi.get('staff');

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os nomes dos funcionários' });
    }
});

router.get('/funcionarios/:staff_id', async (req: any, res: any) => {
    try {
        const { staff_id } = req.params
        
        const apiResponse = await zeldaApi.get(`staff/${staff_id}`);

        res.status(200).send(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar o nome de um funcionário específico.' });
    }
});

export {
    router as staffRoutes
};