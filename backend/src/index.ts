import express from 'express';
import { gamesRoutes } from './routes/gamesRoutes'
import { staffRoutes } from './routes/staffRoutes';
import { charactersRoutes } from './routes/charactersRoutes';
import { monstersRoutes } from './routes/monstersRoutes';
import { bossesRoutes } from './routes/bossesRoutes';
import { dungeonsRoutes } from './routes/dungeonsRoutes';
import { placesRoutes } from './routes/placesRoutes';
import { itemsRoutes } from './routes/itemsRoutes';

const app = express();

app.use(express.json());

app.use(gamesRoutes);

app.use(staffRoutes);

app.use(charactersRoutes);

app.use(monstersRoutes);

app.use(bossesRoutes);

app.use(dungeonsRoutes);

app.use(placesRoutes);

app.use(itemsRoutes);

app.get('/', (req, res) => {
    res.send('Servidor rodando!');
});

app.listen(3001, () => {
    console.log('Servidor iniciado em http://localhost:3001');
});

export {
    app
};