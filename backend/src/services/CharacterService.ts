import { CharacterRepository, GetCharactersParams, ICharacterRepository } from "../repositories/CharacterRepository";

export class CharacterService {
    private characterRepository: ICharacterRepository;

    constructor(repository: ICharacterRepository = new CharacterRepository()) {
        this.characterRepository = repository;
    };

    public async getAllCharacters(params: GetCharactersParams = {}): Promise<any> {
        return this.characterRepository.findAll(params);
    };

    public async getCharacterById(id: string): Promise<any> {
        if (!id || typeof id !== 'string') {
            throw new Error('ID inválido!');
        }
        return this.characterRepository.findById(id);
    };
};