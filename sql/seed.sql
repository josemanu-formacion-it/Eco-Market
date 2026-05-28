-- Semillas para categorías
INSERT INTO categories (name, description) VALUES 
('Electrónica', 'Dispositivos tecnológicos, gadgets y accesorios.'),
('Hogar', 'Muebles, decoración y artículos para el hogar.'),
('Papelería', 'Material de oficina, libretas y escritura.');

-- Semillas para productos
-- Nota: En un entorno real usaríamos los UUIDs generados, aquí simulamos con subconsultas para el ejemplo
INSERT INTO products (name, price, stock, category_id) VALUES 
('Smartphone X', 799.99, 50, (SELECT id FROM categories WHERE name = 'Electrónica')),
('Laptop Pro', 1200.00, 15, (SELECT id FROM categories WHERE name = 'Electrónica')),
('Sofá Nórdico', 450.50, 5, (SELECT id FROM categories WHERE name = 'Hogar')),
('Lámpara LED', 25.00, 100, (SELECT id FROM categories WHERE name = 'Hogar')),
('Set de Plumas', 12.99, 200, (SELECT id FROM categories WHERE name = 'Papelería'));
