export interface CategoryPayload {
    name: string;
    slug: string;
    parentId: string;
    displayOrder: number;
}

export interface CategoryResponse {
    id: string;
    name: string;
    slug: string;
    parentId: string;
    displayOrder: number;
    createdDate: string;
    updatedDate: string;
}
