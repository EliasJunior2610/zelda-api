import { Request, Response } from 'express';
import { CharacterService } from '../services/CharacterService';

export class CharacterController {
    private characterService: CharacterService;

    constructor() {
        this.characterService = new CharacterService;
    };

    public getAllCharacters = async (req: Request, res: Response): Promise<void> => {
        try {
            const { limit, page, name } = req.query;
            const characters = await this.characterService.getAllCharacters({
                limit: limit ? Number(limit) : undefined,
                page: page ? Number(page) : undefined,
                name: name as string,
            });

            res.status(200).json(characters);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de personagens' });
        }
    };

    public getCharacterById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { character_id } = req.params;

            if (!character_id) {
                res.status(400).json({ error: 'ID do personagem é obrigatório!' });
                return;
            }

            const character = await this.characterService.getCharacterById(character_id);

            if (!character) {
                res.status(404).json({ error: 'Personagem não encontrado' });
                return;
            }

            res.status(200).json(character);
        } catch (error) {
            console.error(error);

            if (error instanceof Error && error.message.includes('Falha ao retornar')) {
                res.status(404).json({ error: 'Personagem não encontrado' });
            } else {
                res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um personagem específico' });
            }
        }
    };
};