import { Request, Response } from "express";
import { GameService } from "../services/GameService";

export class GameController {
    private gameService: GameService;

    constructor() {
        this.gameService = new GameService;
    };

    public getAllGames = async (req: Request, res: Response): Promise<void> => {
        try {
            const { limit, page, name } = req.query;
            const games = await this.gameService.getAllGames({
                limit: limit ? Number(limit) : undefined,
                page: page ? Number(page) : undefined,
                name: name as string,
            })

            res.status(200).json(games);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de jogos' });
        }
    };

    public getGameById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { game_id } = req.params;

            if (!game_id) {
                res.status(400).json({ error: 'ID do jogo é obrigatório!'});
                return;
            }

            const game = await this.gameService.getGameById(game_id);

            if (!game) {
                res.status(404).json({ error: 'Jogo não encontrado' });
                return;
            }

            res.status(200).json(game);
        } catch (error) {
            console.error(error);

            if (error instanceof Error && error.message.includes('Falha ao retornar')) {
                res.status(404).json({ error: 'Jogo não encontrada' });
            } else {
                res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um jogo específico' });
            }
        }
    };
};