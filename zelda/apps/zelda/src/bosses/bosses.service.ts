import axios from "axios";
import { Injectable } from "@nestjs/common";

export interface GetBossesParams {
    limit?: number | undefined;
    page?: number | undefined;
    name?: string | undefined;
}

export interface IBossService {
    findAll(params?: GetBossesParams): Promise<any>;
    // findById(id?: string): Promise<string>;
}

const zeldaApi = axios.create({
    baseURL: 'https://zelda.fanapis.com/api',
    timeout: 5000,
});

@Injectable()
export class BossesService implements IBossService {
    public async findAll(params: GetBossesParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('bosses', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao retornar os chefes:', error);
            throw new Error('Ocorreu um erro ao retornar os chefes da API.');
        }
    }

    // findById(id?: string): Promise<string> {}
}