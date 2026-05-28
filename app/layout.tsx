import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Inventory - Neon DB',
  description: 'Gestión de inventario con PostgreSQL y Neon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold text-indigo-600">Inventory Manager</h1>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
