import express from 'express';
import { gamesRoutes } from './routes/games'
import { staffRoutes } from './routes/staff';
import { charactersRoutes } from './routes/characters';
import { monstersRoutes } from './routes/monsters';
import { bossesRoutes } from './routes/bossesRoutes';
import { dungeonsRoutes } from './routes/dungeons';
import { placesRoutes } from './routes/places';
import { itemsRoutes } from './routes/items';

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