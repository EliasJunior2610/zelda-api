import { PlaceRepository, GetPlacesParams, IPlaceRepository } from "../repositories/PlaceRepository";

export class PlaceService {
    private placeRepository: IPlaceRepository;

    constructor(repository: IPlaceRepository = new PlaceRepository()) {
        this.placeRepository = repository;
    };

    public async getAllPlaces(params: GetPlacesParams = {}): Promise<any> {
        return this.placeRepository.findAll(params);
    };

    public async getPlaceById(id: string): Promise<any> {
        if (!id || typeof id !== 'string') {
            throw new Error('ID inválido!');
        }
        return this.placeRepository.findById(id);
    };
};