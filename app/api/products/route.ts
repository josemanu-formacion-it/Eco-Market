import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    // Consulta con JOIN para obtener productos y sus categorías
    const products = await sql.query(`
      SELECT 
        p.id, 
        p.name, 
        p.price, 
        p.stock, 
        c.name as category_name
      FROM products p
      INNER JOIN categories c ON p.category_id = c.id
      ORDER BY p.created_at DESC
    `);

    return NextResponse.json(products.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Error al obtener los productos' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, stock, category_id } = body;

    // Uso de consulta parametrizada para evitar Inyección SQL
    const result = await sql.query(
      'INSERT INTO products (name, price, stock, category_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, price, stock, category_id]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Error al crear el producto' }, 
      { status: 500 }
    );
  }
}
