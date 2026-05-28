# Seguridad de Base de Datos - Learning Inventory

## Inyección SQL: La Amenaza

La inyección SQL es una vulnerabilidad que ocurre cuando permitimos que datos proporcionados por el usuario se inserten directamente en una cadena de consulta SQL sin el tratamiento adecuado.

### Ejemplo de código VULNERABLE:
```javascript
// ATENCIÓN: NUNCA USAR ESTE PATRÓN
const productId = req.query.id; 
const query = `SELECT * FROM products WHERE id = '${productId}'`;
// Si el usuario envía id = "1' OR '1'='1", la query resultante es:
// SELECT * FROM products WHERE id = '1' OR '1'='1' (Devuelve todos los productos)
```

## Nuestra Solución: Consultas Parametrizadas

Para prevenir ataques, utilizamos **consultas parametrizadas** (también conocidas como sentencias preparadas). El driver de base de datos se encarga de separar la lógica de la consulta de los datos proporcionados por el usuario.

### Ejemplo de código SEGURO:
```typescript
import { sql } from '../lib/db';

export async function getProductById(id: string) {
  // El driver escapa automáticamente el valor de $1
  const result = await sql('SELECT * FROM products WHERE id = $1', [id]);
  return result;
}
```

Al usar el driver `@neondatabase/serverless` (o similares como `pg`), los valores pasados en el array de parámetros nunca se ejecutan como código SQL, sino que se tratan estrictamente como datos literales.
