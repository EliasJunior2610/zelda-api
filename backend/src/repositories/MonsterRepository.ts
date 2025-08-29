import { zeldaApi } from "../services/axios";

export interface GetMonstersParams {
    limit?: number | undefined,
    page?: number | undefined,
    name?: string | undefined,
};

export interface IMonsterRepository {
    findAll(params?: GetMonstersParams): Promise<any>;
    findById(id: string): Promise<any>;
};

export class MonsterRepository implements IMonsterRepository{
    public async findAll(params: GetMonstersParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('monsters', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao retornar os monstros da API:', error);
            throw new Error('Falha ao retornar os monstros da API externa.');
        }
    };

    public async findById(id: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`monsters/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao retornar o monstro ${id} da API:`, error);
            throw new Error(`Falha ao retornar o monstro com ID ${id}`);
        }
    };
};