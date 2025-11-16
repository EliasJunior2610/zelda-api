import { Injectable } from "@nestjs/common";
import zeldaApi from "../assets/zeldaApi";
import { GetParams, IService } from "../assets/interfaces";

@Injectable()
export class PlacesService implements IService {
    public async findAll(params?: GetParams): Promise<any> {
        try {
            const response = await zeldaApi.get('places', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar os lugares:', error);
            throw new Error('Ocorreu um erro ao buscar os lugares da API.');
        }
    }

    public async findById(id?: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`places/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar o lugar específico:', error);
            throw new Error('Ocorreu um erro ao buscar o lugar específico da API.');
        }
    }
}