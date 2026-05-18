import { type Product } from '../types/index.js';
declare class ProductService {
    private products;
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product | undefined>;
    create(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
    update(id: string, productData: Partial<Product>): Promise<Product | undefined>;
    delete(id: string): Promise<boolean>;
}
declare const _default: ProductService;
export default _default;
//# sourceMappingURL=productService.d.ts.map