import { MonsterRepository, GetMonstersParams, IMonsterRepository } from "../repositories/MonsterRepository";

export class MonsterService {
    private monsterRepository: IMonsterRepository;

    constructor(repository: IMonsterRepository = new MonsterRepository()) {
        this.monsterRepository = repository;
    };

    public async getAllMonsters(params: GetMonstersParams = {}): Promise<any> {
        return this.monsterRepository.findAll(params);
    };

    public async getMonsterById(id: string): Promise<any> {
        if (!id || typeof id !== 'string') {
            throw new Error('ID inválido!');
        }
        return this.monsterRepository.findById(id);
    };
};