import React, { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import { Package, AlertCircle, DollarSign, TrendingUp } from 'lucide-react';
import apiClient from '../services/apiClient';
import { Product } from '../types';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

    fetchProducts();
  }, []);

  const totalProducts = products.length;
  const lowStockProducts = products.filter(p => p.stock <= 10).length;
  const totalValue = products.reduce((acc, p) => acc + (p.price * p.stock), 0);
  const totalStock = products.reduce((acc, p) => acc + p.stock, 0);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Panel de Control</h2>
        <p className="text-gray-500">Resumen general de tu inventario hoy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Productos"
          value={totalProducts}
          icon={Package}
          color="bg-blue-500"
        />
        <StatCard
          title="Stock Bajo"
          value={lowStockProducts}
          icon={AlertCircle}
          color="bg-red-500"
        />
        <StatCard
          title="Valor Total"
          value={`$${totalValue.toLocaleString()}`}
          icon={DollarSign}
          color="bg-green-500"
        />
        <StatCard
          title="Unidades Totales"
          value={totalStock}
          icon={TrendingUp}
          color="bg-purple-500"
        />
      </div>

      {/* Aquí podrías añadir un gráfico o lista de actividades recientes */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Productos con poco stock</h3>
          <div className="space-y-4">
            {products.filter(p => p.stock <= 10).map(p => (
              <div key={p.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-700">{p.name}</p>
                  <p className="text-sm text-gray-500">{p.category}</p>
                </div>
                <span className="text-red-600 font-bold">{p.stock} unidades</span>
              </div>
            ))}
            {lowStockProducts === 0 && <p className="text-gray-500 text-sm">Todo el stock está en niveles óptimos.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
