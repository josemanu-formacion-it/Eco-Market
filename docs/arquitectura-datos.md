# Arquitectura de Datos - Learning Inventory

## Relación entre Categorías y Productos

En este modelo, la columna `category_id` en la tabla `products` actúa como una **Foreign Key** (Clave Foránea). Esto significa que establece una relación de integridad referencial entre los productos y las categorías.

### ¿Qué significa que `category_id` sea una Foreign Key?
Significa que cada valor en esa columna debe corresponder a un `id` existente en la tabla `categories`. Esto garantiza que no existan productos asignados a categorías que no existen, manteniendo la consistencia de los datos en todo momento.

### Comportamiento ante Eliminación (ON DELETE)

Si intentamos ejecutar un `DELETE` sobre una categoría que tiene productos asociados, tenemos dos opciones principales de comportamiento:

1.  **ON DELETE CASCADE**: Elimina automáticamente todos los productos asociados a la categoría que se está borrando.
2.  **ON DELETE RESTRICT**: Impide la eliminación de la categoría mientras existan productos vinculados a ella.

**¿Qué comportamiento es más seguro?**
El comportamiento más seguro es **ON DELETE RESTRICT**. 

**Razón:** En un sistema de inventario, borrar una categoría por error podría resultar en la pérdida accidental de cientos de registros de productos (con sus precios, stock, etc.) si se usa `CASCADE`. Al usar `RESTRICT`, el sistema obliga al administrador a decidir qué hacer con esos productos (reubicarlos en otra categoría o borrarlos manualmente) antes de permitir la eliminación de la categoría madre, actuando como una red de seguridad crítica para la integridad del negocio.
