import { zeldaApi } from "../services/axios";

export interface GetPlacesParams {
    limit?: number | undefined,
    page?: number | undefined,
    name?: string | undefined,
};

export interface IPlaceRepository {
    findAll(params?: GetPlacesParams): Promise<any>;
    findById(id: string): Promise<any>;
};

export class PlaceRepository implements IPlaceRepository {
    public async findAll(params: GetPlacesParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('places', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao retornar os locais da API:', error);
            throw new Error('Falha ao retornar os locais da API externa.');
        }
    };

    public async findById(id: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`places/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao retornar o local ${id} da API:`, error);
            throw new Error(`Falha ao retornar o local com ID ${id}`);
        }
    };
};