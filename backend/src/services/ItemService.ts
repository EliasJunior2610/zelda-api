import { ItemRepository, GetItemsParams, IItemRepository } from "../repositories/ItemRepository";

export class ItemService {
    private itemRepository: IItemRepository;

    constructor(repository: IItemRepository = new ItemRepository()) {
        this.itemRepository = repository;
    };

    public async getAllItems(params: GetItemsParams = {}): Promise<any> {
        return this.itemRepository.findAll(params);
    };

    public async getItemById(id: string): Promise<any> {
        if (!id || typeof id !== 'string') {
            throw new Error('ID inválido!');
        }
        return this.itemRepository.findById(id);
    };
};