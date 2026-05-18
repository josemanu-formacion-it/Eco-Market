import { type Request, type Response } from 'express';
import productService from '../services/productService.js';

class ProductController {
  async getAll(req: Request, res: Response) {
    try {
      const products = await productService.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener productos' });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const product = await productService.getById(req.params.id as string);
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el producto' });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const product = await productService.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear producto' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const product = await productService.update(req.params.id as string, req.body);
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar producto' });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const success = await productService.delete(req.params.id as string);
      if (!success) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar producto' });
    }
  }
}

export default new ProductController();
