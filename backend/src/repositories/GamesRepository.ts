import { zeldaApi } from "../services/axios";

export interface GetGamesParams {
    limit?: number | undefined,
    page?: number | undefined,
    name?: string | undefined,
};

export interface IGameRepository {
    findAll(params?: GetGamesParams): Promise<any>;
    findById(id: string): Promise<any>;
};

export class GameRepository implements IGameRepository{
    public async findAll(params: GetGamesParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('games', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao retornar os jogos da API:', error);
            throw new Error('Falha ao retornar os jogos da API externa.');
        }
    };

    public async findById(id: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`games/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao retornar o jogo ${id} da API:`, error);
            throw new Error(`Falha ao retornar o jogo com ID ${id}`);
        }
    };
};