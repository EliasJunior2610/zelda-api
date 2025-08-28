import { BossRepository, GetBossesParams, IBossRepository } from "../repositories/BossRepository";

export class BossService {
    private bossRepository: IBossRepository;

    constructor(repository: IBossRepository = new BossRepository()) {
        this.bossRepository = repository;
    };

    public async getAllBosses(params: GetBossesParams = {}): Promise<any> {
        return this.bossRepository.findAll(params);
    };

    public async getBossById(id: string): Promise<any> {
        if (!id || typeof id !== 'string') {
            throw new Error('Id inválido!');
        }
        return this.bossRepository.findById(id);
    };
};