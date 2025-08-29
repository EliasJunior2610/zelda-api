import { DungeonRepository, GetDungeonsParams, IDungeonRepository } from "../repositories/DungeonRepository";

export class DungeonService {
    private dungeonRepository: IDungeonRepository;
    
    constructor (repository: IDungeonRepository = new DungeonRepository()) {
        this.dungeonRepository = repository;
    };

    public async getAllDungeons(params: GetDungeonsParams = {}): Promise<any> {
        return this.dungeonRepository.findAll(params);
    };

    public async getDungeonById(id: string): Promise<any> {
        if (!id || typeof id !== 'string') {
            throw new Error('ID inválido!');
        }
        return this.dungeonRepository.findById(id);
    };
};