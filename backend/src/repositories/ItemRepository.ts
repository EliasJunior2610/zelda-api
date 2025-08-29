import { zeldaApi } from "../services/axios";

export interface GetItemsParams {
    limit?: number | undefined,
    page?: number | undefined,
    name?: string | undefined,
};

export interface IItemRepository {
    findAll(params?: GetItemsParams): Promise<any>;
    findById(id: string): Promise<any>;
};

export class ItemRepository implements IItemRepository{
    public async findAll(params: GetItemsParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('items', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao retornar os itens da API:', error);
            throw new Error('Falha ao retornar os itens da API externa.');
        }
    };

    public async findById(id: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`items/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao retornar o item ${id} da API:`, error);
            throw new Error(`Falha ao retornar o item com ID ${id}`);
        }
    };
};