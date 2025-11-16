import { Injectable } from "@nestjs/common";
import zeldaApi from "../assets/zeldaApi";
import { GetParams, IService } from "../assets/interfaces";

@Injectable()
export class GamesService implements IService {
    public async findAll(params?: GetParams): Promise<any> {
        try {
            const response = await zeldaApi.get('games', { params });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar os jogos:', error);
            throw new Error('Ocorreu um erro ao buscar os jogos da API.');
        }
    }

    public async findById(id?: string): Promise<any> {
        try {
            const response = await zeldaApi.get(`games/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar o jogo específico:', error);
            throw new Error('Ocorreu um erro ao buscar o jogo específico da API.');
        }
    }
}