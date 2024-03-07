export interface Book {
    title: string;
    price: number | string;
    stock_quantity: number | string;
    author?: string;
    category?: string;
    cover_image?: string;
}
