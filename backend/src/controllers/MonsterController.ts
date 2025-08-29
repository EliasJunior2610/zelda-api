import { Request, Response } from "express";
import { MonsterService } from "../services/MonsterService";

export class MonsterController {
    private monsterService: MonsterService;

    constructor() {
        this.monsterService = new MonsterService;
    };

    public getAllMonsters = async (req: Request, res: Response): Promise<void> => {
        try {
            const { limit, page, name } = req.query;
            const monsters = await this.monsterService.getAllMonsters({
                limit: limit ? Number(limit) : undefined,
                page: page ? Number(page) : undefined,
                name: name as string,
            })

            res.status(200).json(monsters);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de monstros' });
        }
    };

    public getMonstersById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { monster_id } = req.params;

            if (!monster_id) {
                res.status(400).json({ error: 'ID do monstro é obrigatório!' });
                return;
            }

            const monster = await this.monsterService.getMonsterById(monster_id);

            if (!monster) {
                res.status(404).json({ error: 'Monstro não encontrado' });
                return;
            }

            res.status(200).json(monster);
        } catch (error) {
            console.error(error);

            if (error instanceof Error && error.message.includes('Falha ao retornar')) {
                res.status(404).json({ error: 'Monstro não encontrado' });
            } else {
                res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um monstro específico' });
            }
        }
    };
};