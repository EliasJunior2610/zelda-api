export interface GetParams {
    limit?: number | undefined;
    page?: number | undefined;
    name?: string | undefined;
}

export interface IService {
    findAll(params?: GetParams): Promise<any>;
    findById(id?: string): Promise<any>;
}