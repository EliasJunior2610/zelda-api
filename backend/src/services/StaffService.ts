import { StaffRepository, GetStaffParams, IStaffRepository } from "../repositories/StaffRepository";

export class StaffService {
    private staffRepository: IStaffRepository;

    constructor(repository: IStaffRepository = new StaffRepository()) {
        this.staffRepository = repository;
    };

    public async getAllStaff(params: GetStaffParams = {}): Promise<any> {
        return this.staffRepository.findAll(params);
    };

    public async getStaffById(id: string): Promise<any> {
        if (!id || typeof id !== 'string') {
            throw new Error('ID inválido!');
        }
        return this.staffRepository.findById(id);
    };
};