import { Injectable } from "@nestjs/common";
import zeldaApi from "../assets/zeldaApi";
import { GetParams, IService } from "../assets/interfaces";

@Injectable()
export class DungeonsService implements IService {
    public async findAll(params?: GetParams): Promise<any> {
        try {
            const response = await zeldaApi.get('dungeons', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar as masmorras:', error);
            throw new Error('Ocorreu um erro ao buscar as masmorras da API.');
        }
    }

    public async findById(id?: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`dungeons/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar a masmorra específica:', error);
            throw new Error('Ocorreu um erro ao buscar a masmorra específica da API.');
        }
    }
}