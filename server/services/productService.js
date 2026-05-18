import {} from '../types/index.js';
class ProductService {
    products = [
        {
            id: '1',
            name: 'Manzanas Orgánicas',
            category: 'Frutas',
            price: 2.5,
            stock: 50,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            name: 'Leche Entera 1L',
            category: 'Lácteos',
            price: 1.2,
            stock: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ];
    async getAll() {
        return this.products;
    }
    async getById(id) {
        return this.products.find(p => p.id === id);
    }
    async create(productData) {
        const newProduct = {
            ...productData,
            id: Math.random().toString(36).substr(2, 9), // Simple ID for now
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.products.push(newProduct);
        return newProduct;
    }
    async update(id, productData) {
        const index = this.products.findIndex(p => p.id === id);
        const existingProduct = this.products[index];
        if (index === -1 || !existingProduct)
            return undefined;
        const updatedProduct = {
            ...existingProduct,
            ...productData,
            updatedAt: new Date(),
        };
        this.products[index] = updatedProduct;
        return updatedProduct;
    }
    async delete(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1)
            return false;
        this.products.splice(index, 1);
        return true;
    }
}
export default new ProductService();
//# sourceMappingURL=productService.js.map