import { Request, Response } from "express";
import { PlaceService } from "../services/PlaceService";

export class PlaceController {
    private placeService: PlaceService;

    constructor() {
        this.placeService = new PlaceService;
    };

    public getAllPlaces = async (req: Request, res: Response): Promise<void> => {
        try {
            const { limit, page, name } = req.query;
            const places = await this.placeService.getAllPlaces({
                limit: limit ? Number(limit) : undefined,
                page: page ? Number(page) : undefined,
                name: name as string,
            })

            res.status(200).json(places);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de locais' });
        }
    };

    public getPlaceById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { place_id } = req.params;

            if (!place_id) {
                res.status(400).json({ error: 'ID do local é obrigatório!' });
                return;
            }

            const place = await this.placeService.getPlaceById(place_id);

            if (!place) {
                res.status(404).json({ error: 'Local não encontrado' });
                return;
            }

            res.status(200).json(place);
        } catch (error) {
            console.error(error);

            if (error instanceof Error && error.message.includes('Falha ao retornar')) {
                res.status(404).json({ error: 'Local não encontrado' });
            } else {
                res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um local específico' });
            }
        }
    };
};