import { Request, Response } from "express";
import { ItemService } from "../services/ItemService";

export class ItemController {
    private itemService: ItemService;

    constructor() {
        this.itemService = new ItemService;
    };

    public getAllItems = async (req: Request, res: Response): Promise<void> => {
        try {
            const { limit, page, name } = req.query;
            const items = await this.itemService.getAllItems({
                limit: limit ? Number(limit) : undefined,
                page: page ? Number(page) : undefined,
                name: name as string,
            })

            res.status(200).json(items);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de itens' });
        }
    };

    public getItemById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { item_id } = req.params;

            if (!item_id) {
                res.status(400).json({ error: 'ID do item é obrigatório!'});
                return;
            }

            const item = await this.itemService.getItemById(item_id);

            if (!item) {
                res.status(404).json({ error: 'Item não encontrado' });
                return;
            }

            res.status(200).json(item);
        } catch (error) {
            console.error(error);

            if (error instanceof Error && error.message.includes('Falha ao retornar')) {
                res.status(404).json({ error: 'Item não encontrado' });
            } else {
                res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um item específico' });
            }
        }
    };
};