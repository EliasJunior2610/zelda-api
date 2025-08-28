import { zeldaApi } from "../services/axios";

export interface GetBossesParams {
    limit?: number | undefined;
    page?: number | undefined;
    name?: string | undefined;
};

export interface IBossRepository {
    findAll(params?: GetBossesParams): Promise<any>;
    findById(id?: string): Promise<any>;
};

export class BossRepository implements IBossRepository {
    public async findAll(params: GetBossesParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('bosses', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao retornar os chefes da API:', error);
            throw new Error('Falha ao retornar os chefes da API externa.');
        }
    };

    public async findById(id: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`bosses/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao retornar o chefe ${id} da API:`, error);
            throw new Error(`Falha ao retornar os chefes com ID ${id}`);
        }
    };
};