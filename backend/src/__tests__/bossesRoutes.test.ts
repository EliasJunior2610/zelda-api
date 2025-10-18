const request = require('supertest');
const express = require('express');
// import { BossController } from '../controllers/BossController';
const bossesRoutes = require('../routes/bossesRoutes');

const app = express();
app.use(express.json());
app.use(bossesRoutes)

describe('/bosses', () => {
    test('success test: should return 200 code and the list of bosses', async () => {
        const response = await request(app).get('/bosses');

        expect(response.status).toBe(200);
    });
});