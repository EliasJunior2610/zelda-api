import { Injectable } from "@nestjs/common";
import zeldaApi from "../assets/zeldaApi";
import { GetParams, IService } from "../assets/interfaces";

@Injectable()
export class StaffService implements IService {
    public async findAll(params?: GetParams): Promise<any> {
        try {
            const response = await zeldaApi.get('staff', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar os funcionários:', error);
            throw new Error('Ocorreu um erro ao buscar os funcionários da API.');
        }
    }

    public async findById(id?: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`staff/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar o funcionário específico:', error);
            throw new Error('Ocorreu um erro ao buscar o funcionário específico da API.');
        }
    }
}