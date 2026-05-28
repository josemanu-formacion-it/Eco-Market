# Análisis SQL - Learning Inventory

## Diferencia entre INNER JOIN y LEFT JOIN

### 1. INNER JOIN
Devuelve únicamente las filas donde existe una coincidencia exacta en ambas tablas relacionadas. Si un registro de la tabla A no tiene un correspondiente en la tabla B, ese registro queda fuera del resultado.

**Escenario del mundo real:** 
Generar una factura de venta. Solo queremos mostrar los productos que efectivamente tienen una categoría asignada (suponiendo que la categoría fuera opcional, que no es nuestro caso actual) para asegurar que el desglose de impuestos por categoría sea correcto. Si un producto no tiene categoría, no debería aparecer en este reporte contable específico.

### 2. LEFT JOIN
Devuelve todas las filas de la tabla de la izquierda (la primera que mencionamos), incluso si no tienen coincidencia en la tabla de la derecha. Para los registros sin coincidencia, las columnas de la tabla derecha aparecerán como `NULL`.

**Escenario del mundo real:** 
Listado maestro de categorías con conteo de productos. Queremos ver **todas** nuestras categorías (Electrónica, Hogar, Mascotas, etc.), incluso aquellas que acabamos de crear y todavía no tienen ningún producto asignado. Un `INNER JOIN` ocultaría las categorías vacías, mientras que un `LEFT JOIN` nos permitiría ver que la categoría "Mascotas" tiene 0 productos.
