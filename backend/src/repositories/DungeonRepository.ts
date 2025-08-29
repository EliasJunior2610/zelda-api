import { zeldaApi } from "../services/axios";

export interface GetDungeonsParams {
    limit?: number | undefined;
    page?: number | undefined;
    name?: string | undefined;
};

export interface IDungeonRepository {
    findAll(params?: GetDungeonsParams): Promise<any>;
    findById(id: string): Promise<any>;
};

export class DungeonRepository implements IDungeonRepository {
    public async findAll(params: GetDungeonsParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('dungeons', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar as masmorras da API:', error);
            throw new Error('Falha ao retornar as masmorras da API externa.');
        }
    };

    public async findById(id: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`dungeons/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao retornar a masmorra ${id} da API`, error);
            throw new Error(`Falha ao retornar a masmorra com ID ${id}`);
        }
    };
};