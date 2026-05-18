import { type Product } from '../types/index.js';

class ProductService {
  private products: Product[] = [
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

  async getAll(): Promise<Product[]> {
    return this.products;
  }

  async getById(id: string): Promise<Product | undefined> {
    return this.products.find(p => p.id === id);
  }

  async create(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const newProduct: Product = {
      ...productData,
      id: Math.random().toString(36).substr(2, 9), // Simple ID for now
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id: string, productData: Partial<Product>): Promise<Product | undefined> {
    const index = this.products.findIndex(p => p.id === id);
    const existingProduct = this.products[index];
    if (index === -1 || !existingProduct) return undefined;

    const updatedProduct: Product = {
      ...existingProduct,
      ...productData,
      updatedAt: new Date(),
    };
    
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  async delete(id: string): Promise<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}

export default new ProductService();
