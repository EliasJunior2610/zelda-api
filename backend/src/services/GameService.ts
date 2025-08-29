import { GameRepository, GetGamesParams, IGameRepository } from "../repositories/GamesRepository";

export class GameService {
    private gameRepository: IGameRepository;

    constructor(repository: IGameRepository = new GameRepository()) {
        this.gameRepository = repository;
    };

    public async getAllGames(params: GetGamesParams = {}): Promise<any> {
        return this.gameRepository.findAll(params);
    };

    public async getGameById(id: string): Promise<any> {
        if (!id || typeof id !== 'string') {
            throw new Error('ID inválido!');
        }
        return this.gameRepository.findById(id);
    };
};