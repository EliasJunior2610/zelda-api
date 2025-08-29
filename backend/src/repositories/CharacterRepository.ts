import { zeldaApi } from "../services/axios";

export interface GetCharactersParams {
    limit?: number | undefined;
    page?: number | undefined;
    name?: string | undefined;
};

export interface ICharacterRepository {
    findAll(params?: GetCharactersParams): Promise<any>;
    findById(id: string): Promise<any>;
};

export class CharacterRepository implements ICharacterRepository {
    public async findAll(params: GetCharactersParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('characters', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar os personagens da API:', error);
            throw new Error('Falha ao retornar os personagens da API externa.');
        }
    };

    public async findById(id: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`characters/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao retornar o chefe ${id} da API`, error);
            throw new Error(`Falha ao retornar o chefe com ID ${id}`);
        }
    };
};