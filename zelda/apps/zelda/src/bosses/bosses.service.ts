import { Injectable } from "@nestjs/common";
import zeldaApi from '../assets/zeldaApi';
import { GetParams, IService } from "../assets/interfaces";

@Injectable()
export class BossesService implements IService {
    public async findAll(params: GetParams = {}): Promise<any> {
        try {
            const response = await zeldaApi.get('bosses', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao retornar os chefes:', error);
            throw new Error('Ocorreu um erro ao retornar os chefes da API.');
        }
    }

    public async findById(id?: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`bosses/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao retornar um chefe específico:', error);
            throw new Error('Ocorreu um erro ao retornar um chefe específico da API.');
        }
    }
}