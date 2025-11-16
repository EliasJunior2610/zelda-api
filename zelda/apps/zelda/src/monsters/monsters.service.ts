import { Injectable } from "@nestjs/common";
import zeldaApi from "../assets/zeldaApi";
import { GetParams, IService } from "../assets/interfaces";

@Injectable()
export class MonstersService implements IService {
    public async findAll(params?: GetParams): Promise<any> {
        try {
            const response = await zeldaApi.get('monsters', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar os monstros:', error);
            throw new Error('Ocorreu um erro ao buscar os monstros da API.');
        }
    }

    public async findById(id?: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`monsters/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar o monstro específico:', error);
            throw new Error('Ocorreu um erro ao buscar o monstro específico da API.');
        }
    }
}