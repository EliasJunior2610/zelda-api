import { Injectable } from "@nestjs/common";
import zeldaApi from "../assets/zeldaApi";
import { GetParams, IService } from "../assets/interfaces";

@Injectable()
export class ItemsService implements IService {
    public async findAll(params?: GetParams): Promise<any> {
        try {
            const response = await zeldaApi.get('items', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar os itens:', error);
            throw new Error('Ocorreu um erro ao buscar os itens da API.');
        }
    }

    public async findById(id?: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`items/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar o item específico:', error);
            throw new Error('Ocorreu um erro ao buscar o item específico da API.');
        }
    }
}