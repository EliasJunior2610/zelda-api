import { Request, Response } from 'express';
import { DungeonService } from '../services/DungeonService';

export class DungeonController {
    private dungeonService: DungeonService;

    constructor() {
        this.dungeonService = new DungeonService;
    };

    public getAllDungeons = async (req: Request, res: Response): Promise<void> => {
        try {
            const { limit, page, name } = req.query;
            const dungeons = await this.dungeonService.getAllDungeons({
                limit: limit ? Number(limit) : undefined,
                page: page ? Number(page) : undefined,
                name: name as string,
            });

            res.status(200).json(dungeons);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de personagens' });
        }
    };

    public getDungeonById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { dungeon_id } = req.params;

            if (!dungeon_id) {
                res.status(400).json({ error: 'ID da masmorra é obrigatória!'});
                return;
            }

            const dungeon = await this.dungeonService.getDungeonById(dungeon_id);

            if (!dungeon) {
                res.status(404).json({ error: 'Masmorra não encontrada' });
                return;
            }

            res.status(200).json(dungeon);
        } catch (error) {
            console.error(error);

            if (error instanceof Error && error.message.includes('Falha ao retornar')) {
                res.status(404).json({ error: 'Masmorra não encontrada' });
            } else {
                res.status(500).json({ error: 'Ocorreu um erro durante a requisição de uma masmorra específica' });
            }
        }
    };
};