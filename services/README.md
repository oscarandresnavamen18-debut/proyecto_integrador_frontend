# Servicios de API - Tienda Agrícola

Este directorio contiene los servicios para realizar peticiones HTTP a la API del proyecto.

## Configuración

### 1. Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con la siguiente variable:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Para producción, cambia la URL a tu dominio de API.

### 2. Estructura de archivos

- `apiClient.ts` - Cliente HTTP base con métodos GET, POST, PUT, PATCH, DELETE
- `tiendaAgricolaService.ts` - Servicio específico para productos agrícolas
- `productService.ts` - Servicio genérico para productos

## Uso del servicio de Tienda Agrícola

### Importar el servicio

```typescript
import {
  obtenerProductosAgricolas,
  obtenerProductoAgricolaPorId,
  crearProductoAgricola,
  actualizarProductoAgricola,
  actualizarParcialProductoAgricola,
  eliminarProductoAgricola,
  obtenerProductosEnPromocion,
  obtenerProductosPorMarca,
  actualizarStockProducto,
} from '@/services/tiendaAgricolaService';
```

### Ejemplos de uso

#### 1. Obtener todos los productos agrícolas

```typescript
'use client';

import { useEffect, useState } from 'react';
import { obtenerProductosAgricolas } from '@/services/tiendaAgricolaService';
import { ProductoAgricola } from '@/types/tiendaAgricola';

export default function ProductosPage() {
  const [productos, setProductos] = useState<ProductoAgricola[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarProductos() {
      try {
        const data = await obtenerProductosAgricolas();
        setProductos(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      } finally {
        setLoading(false);
      }
    }

    cargarProductos();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>{producto.nombre}</div>
      ))}
    </div>
  );
}
```

#### 2. Obtener productos con filtros

```typescript
const productosFiltrados = await obtenerProductosAgricolas({
  nombre: 'fertilizante',
  precioMin: 10,
  precioMax: 100,
  enPromocion: true,
  marca: 'Agroquim',
});
```

#### 3. Obtener un producto por ID

```typescript
const producto = await obtenerProductoAgricolaPorId('producto-123');
if (producto) {
  console.log(producto.nombre);
}
```

#### 4. Crear un nuevo producto

```typescript
const nuevoProducto = await crearProductoAgricola({
  nombre: 'Fertilizante NPK',
  precio: 45000,
  descripcion: 'Fertilizante para cultivos',
  imagen: '/images/fertilizante.jpg',
  stock: 100,
  unidadMedida: 'kg',
  marca: 'Agroquim',
  proveedor: 'Distribuidora ABC',
});
```

#### 5. Actualizar un producto completo

```typescript
const productoActualizado = await actualizarProductoAgricola('producto-123', {
  nombre: 'Fertilizante NPK Premium',
  precio: 50000,
  descripcion: 'Fertilizante mejorado para cultivos',
  imagen: '/images/fertilizante-premium.jpg',
  stock: 80,
  unidadMedida: 'kg',
  marca: 'Agroquim',
  proveedor: 'Distribuidora ABC',
});
```

#### 6. Actualizar parcialmente un producto

```typescript
const productoActualizado = await actualizarParcialProductoAgricola('producto-123', {
  precio: 48000,
  stock: 120,
});
```

#### 7. Actualizar solo el stock

```typescript
const productoActualizado = await actualizarStockProducto('producto-123', 150);
```

#### 8. Eliminar un producto

```typescript
const resultado = await eliminarProductoAgricola('producto-123');
console.log(resultado.message);
```

#### 9. Obtener productos en promoción

```typescript
const promociones = await obtenerProductosEnPromocion();
```

#### 10. Obtener productos por marca

```typescript
const productosMarca = await obtenerProductosPorMarca('Agroquim');
```

## Uso en Server Components (Next.js 13+)

```typescript
import { obtenerProductosAgricolas } from '@/services/tiendaAgricolaService';

export default async function ProductosPage() {
  const productos = await obtenerProductosAgricolas();

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>{producto.nombre}</div>
      ))}
    </div>
  );
}
```

## Manejo de errores

Todos los servicios lanzan errores que puedes capturar:

```typescript
try {
  const productos = await obtenerProductosAgricolas();
  setProductos(productos);
} catch (error) {
  if (error instanceof Error) {
    console.error('Error:', error.message);
    // Mostrar mensaje al usuario
  }
}
```

## Endpoints de la API

Los endpoints esperados en el backend son:

- `GET /api/productos-agricolas` - Listar productos
- `GET /api/productos-agricolas/:id` - Obtener producto por ID
- `POST /api/productos-agricolas` - Crear producto
- `PUT /api/productos-agricolas/:id` - Actualizar producto completo
- `PATCH /api/productos-agricolas/:id` - Actualizar producto parcialmente
- `DELETE /api/productos-agricolas/:id` - Eliminar producto

## Tipos TypeScript

Los tipos están definidos en `types/tiendaAgricola.ts`:

- `ProductoAgricola` - Producto agrícola completo
- `CrearProductoAgricola` - Datos para crear producto
- `ActualizarProductoAgricola` - Datos para actualizar producto
- `FiltrosProductoAgricola` - Filtros de búsqueda
- `ProductosResponse` - Respuesta de la API

## apiClient

El `apiClient.ts` proporciona métodos base que puedes usar para crear tus propios servicios:

```typescript
import { get, post, put, patch, del } from './apiClient';

// GET
const data = await get<MiTipo>('/mi-endpoint');

// POST
const created = await post<MiTipo>('/mi-endpoint', { datos: 'valor' });

// PUT
const updated = await put<MiTipo>('/mi-endpoint/123', { datos: 'nuevo-valor' });

// PATCH
const patched = await patch<MiTipo>('/mi-endpoint/123', { campo: 'valor' });

// DELETE
const deleted = await del<MiTipo>('/mi-endpoint/123');
```

### Características del apiClient

- **Base URL automática**: Lee `NEXT_PUBLIC_API_URL` del .env
- **Construcción de URL inteligente**: Maneja `/api` automáticamente
- **Manejo de errores**: Lanza errores descriptivos
- **TypeScript**: Totalmente tipado con generics
- **Headers personalizables**: Puedes agregar headers adicionales

```typescript
const data = await get<MiTipo>('/mi-endpoint', {
  headers: {
    'Authorization': 'Bearer token',
    'Custom-Header': 'valor',
  },
});
```
