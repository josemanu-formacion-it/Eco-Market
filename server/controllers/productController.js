import {} from 'express';
import productService from '../services/productService.js';
class ProductController {
    async getAll(req, res) {
        try {
            const products = await productService.getAll();
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ message: 'Error al obtener productos' });
        }
    }
    async getById(req, res) {
        try {
            const product = await productService.getById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ message: 'Error al obtener el producto' });
        }
    }
    async create(req, res) {
        try {
            const product = await productService.create(req.body);
            res.status(201).json(product);
        }
        catch (error) {
            res.status(500).json({ message: 'Error al crear producto' });
        }
    }
    async update(req, res) {
        try {
            const product = await productService.update(req.params.id, req.body);
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ message: 'Error al actualizar producto' });
        }
    }
    async delete(req, res) {
        try {
            const success = await productService.delete(req.params.id);
            if (!success) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ message: 'Error al eliminar producto' });
        }
    }
}
export default new ProductController();
//# sourceMappingURL=productController.js.map