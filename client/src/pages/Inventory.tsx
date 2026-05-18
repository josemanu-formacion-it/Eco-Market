import React, { useEffect, useState } from 'react';
import InventoryTable from '../components/InventoryTable';
import ProductForm from '../components/ProductForm';
import apiClient from '../services/apiClient';
import { Product } from '../types';
import { Plus, Search, X } from 'lucide-react';

const Inventory: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get<Product[]>('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreateOrUpdate = async (data: any) => {
    try {
      if (editingProduct) {
        await apiClient.put(`/products/${editingProduct.id}`, data);
      } else {
        await apiClient.post('/products', data);
      }
      setIsModalOpen(false);
      setEditingProduct(undefined);
      fetchProducts();
    } catch (error) {
      console.error('Error saving product', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await apiClient.delete(`/products/${id}`);
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product', error);
      }
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Inventario de Productos</h2>
          <p className="text-gray-500">Gestiona el stock y los precios de tu catálogo.</p>
        </div>
        <button
          onClick={() => {
            setEditingProduct(undefined);
            setIsModalOpen(true);
          }}
          className="flex items-center justify-center bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nuevo Producto
        </button>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nombre o categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-gray-500">Cargando productos...</div>
      ) : (
        <InventoryTable
          products={filteredProducts}
          onEdit={(p) => {
            setEditingProduct(p);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              {editingProduct ? 'Editar Producto' : 'Añadir Nuevo Producto'}
            </h3>
            <ProductForm
              product={editingProduct}
              onSubmit={handleCreateOrUpdate}
              onCancel={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
