import { Request, Response } from "express";
import { BossService } from "../services/BossService";

export class BossController {
    private bossService: BossService;

    constructor() {
        this.bossService = new BossService();
    };

    public getAllBosses = async (req: Request, res: Response): Promise<void> => {
        try {
            const { limit, page, name } = req.query;
            const bosses = await this.bossService.getAllBosses({
                limit: limit ? Number(limit) : undefined,
                page: page ? Number(page) : undefined,
                name: name as string,
            });

            res.status(200).json(bosses);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de chefes' });
        }
    };

    public getBossById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { boss_id } = req.params;

            if (!boss_id) {
                res.status(400).json({ error: 'ID do chefe é obrigatório!' });
                return;
            }

            const boss = await this.bossService.getBossById(boss_id);

            if (!boss) {
                res.status(404).json({ error: 'Chefe não encontrado' });
                return;
            }

            res.status(200).json(boss);
        } catch (error) {
            console.error(error);

            if (error instanceof Error && error.message.includes('Falha ao retornar')) {
                res.status(404).json({ error: 'Chefe não encontrado' });
            } else {
                res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um chefe específico' });
            }
        }
    };
};