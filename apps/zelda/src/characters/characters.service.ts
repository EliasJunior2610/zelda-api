import { Injectable } from "@nestjs/common";
import zeldaApi from "../assets/zeldaApi";
import { GetParams, IService } from "../assets/interfaces";

@Injectable()
export class CharactersService implements IService {
    public async findAll(params: GetParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('characters', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar os personagens:', error);
            throw new Error('Ocorreu um erro ao buscar os personagens da API.');
        }
    }

    public async findById(id?: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`characters/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro o personagem específico:', error);
            throw new Error('Ocorreu um erro ao buscar um personagem específico da API');
        }
    }
}