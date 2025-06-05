export interface ProductInput {
    name: string;
    description?: string;
    price: number;
    inStock: number;
}

export interface ProductResponse {
    id: number;
    name: string;
    description: string | null;
    price: number;
    inStock: number;
}

