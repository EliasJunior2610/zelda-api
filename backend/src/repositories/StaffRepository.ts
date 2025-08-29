import { zeldaApi } from "../services/axios";

export interface GetStaffParams {
    limit?: number | undefined,
    page?: number | undefined,
    name?: string | undefined,
};

export interface IStaffRepository {
    findAll(params?: GetStaffParams): Promise<any>;
    findById(id: string): Promise<any>;
};

export class StaffRepository implements IStaffRepository {
    public async findAll(params: GetStaffParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('staff', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao retornar os funcionários da API:', error);
            throw new Error('Falha ao retornar os funcionários da API externa.');
        }
    };

    public async findById(id: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`staff/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao retornar os funcionários ${id} da API:`, error);
            throw new Error(`Falha ao retornar os funcionários com ID ${id}`);
        }
    };
};