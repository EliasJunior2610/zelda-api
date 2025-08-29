import { Request, Response } from "express";
import { StaffService } from "../services/StaffService";

export class StaffController {
    private staffService: StaffService;

    constructor() {
        this.staffService = new StaffService;
    };

    public getAllStaff = async (req: Request, res: Response): Promise<void> => {
        try {
            const { limit, page, name } = req.query;
            const staff = await this.staffService.getAllStaff({
                limit: limit ? Number(limit) : undefined,
                page: page ? Number(page) : undefined,
                name: name as string,
            })

            res.status(200).json(staff);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro durante a requisição da lista de funcionários' });
        }
    };

    public getStaffById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { staff_id } = req.params;

            if (!staff_id) {
                res.status(400).json({ error: 'ID do funcionário é obrigatório!' });
                return;
            }

            const staff = await this.staffService.getStaffById(staff_id);

            if (!staff) {
                res.status(404).json({ error: 'Funcionário não encontrado' });
                return;
            }

            res.status(200).json(staff);
        } catch (error) {
            console.error(error);

            if (error instanceof Error && error.message.includes('Falha ao retornar')) {
                res.status(404).json({ error: 'Funcionário não encontrado' });
            } else {
                res.status(500).json({ error: 'Ocorreu um erro durante a requisição de um funcionário específico' });
            }
        }
    };
};