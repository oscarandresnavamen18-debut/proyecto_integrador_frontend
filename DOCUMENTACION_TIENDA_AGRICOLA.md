# Documentación - Tienda Agrícola "La Casa del Ganadero"

## Introducción

La Tienda Agrícola es un módulo completo de comercio electrónico desarrollado para **"La Casa del Ganadero"**, una empresa que vende productos para el campo, mascotas, ganadería y agricultura. Este módulo permite a los usuarios explorar productos organizados por categorías, ver promociones y obtener detalles de cada producto.

---

## Estructura del Proyecto

### Carpetas Principales Utilizadas

```
proyecto_integrador_frontend/
│
├── app/(content)/tienda-agricola/          # Módulo principal de la tienda
│   ├── components/                          # Componentes visuales reutilizables
│   ├── data/                                # Datos de productos (catálogo)
│   ├── [categoria]/                         # Página dinámica por categoría
│   ├── promociones/                         # Página de promociones
│   ├── layout.tsx                           # Diseño general con animaciones
│   ├── page.tsx                             # Página principal de la tienda
│   └── tienda.css                           # Estilos específicos
│
├── services/                                # Servicios para conectar con el backend
│   ├── apiClient.ts                         # Cliente HTTP (GET, POST, PUT, DELETE)
│   └── tiendaAgricolaService.ts             # Funciones específicas para productos agrícolas
│
└── types/                                   # Definiciones de tipos TypeScript
    └── tiendaAgricola.ts                    # Tipos de datos para productos agrícolas
```

---

## Explicación de Cada Carpeta

### 1. **app/(content)/tienda-agricola/**
Esta es la carpeta principal donde vive toda la funcionalidad de la tienda.

#### **¿Qué hace?**
- Contiene todas las páginas y componentes visuales de la tienda
- Organiza el código de manera que cada categoría tenga su propia página
- Incluye efectos visuales y animaciones para mejorar la experiencia del usuario

---

### 2. **app/(content)/tienda-agricola/components/**
Aquí están los "bloques de construcción" visuales de la tienda.

#### **Componentes principales:**

| Componente | Qué hace | Archivo |
|------------|----------|---------|
| **Header** | Barra superior con logo y navegación | Header.tsx |
| **Footer** | Pie de página con información de contacto | Footer.tsx |
| **ProductCard** | Tarjeta que muestra un producto (imagen, precio, botón) | ProductCard.tsx |
| **ProductModal** | Ventana emergente con detalles completos del producto | ProductModal.tsx |
| **DecayCard** | Tarjeta para mostrar categorías con efectos visuales | DecayCard.tsx |
| **Breadcrumbs** | Migas de pan (Inicio > Categoría > Producto) | Breadcrumbs.tsx |
| **LiquidEther** | Efecto de fondo animado con líquido | LiquidEther.tsx |

**Referencia:** `app/(content)/tienda-agricola/components/`

---

### 3. **app/(content)/tienda-agricola/data/**
Esta carpeta contiene el catálogo completo de productos.

#### **¿Qué contiene?**
- **productos.tsx**: Base de datos local con todos los productos organizados por categorías
  - 5 productos de **Mascotas** (medicamentos, champú, antiparasitarios)
  - 7 productos de **Ferretería** (herramientas, botas, fumigadoras)
  - 5 productos de **Ganadería** (medicamentos para ganado, monturas)
  - 5 productos de **Agrícola** (fertilizantes, semillas, pesticidas)

**Información de cada producto:**
- ID único
- Nombre
- Precio actual
- Precio original (si está en promoción)
- Descripción
- Imagen (URL)
- Categoría
- Estado de promoción
- Porcentaje de descuento

**Referencia:** `app/(content)/tienda-agricola/data/productos.tsx:5-235`

---

### 4. **app/(content)/tienda-agricola/[categoria]/**
Carpeta especial que crea páginas dinámicas según la categoría.

#### **¿Cómo funciona?**
Cuando un usuario visita `/tienda-agricola/mascotas`, Next.js automáticamente:
1. Lee el parámetro `mascotas`
2. Busca los productos de esa categoría
3. Muestra una página con todos los productos filtrados

**Características:**
- Muestra banner con color específico por categoría
- Contador de productos totales
- Contador de productos en promoción
- Grid de productos con tarjetas

**Referencia:** `app/(content)/tienda-agricola/[categoria]/page.tsx:1-145`

---

### 5. **app/(content)/tienda-agricola/promociones/**
Página especial que muestra solo productos en oferta.

#### **¿Qué hace?**
- Filtra automáticamente productos con `enPromocion: true`
- Permite filtrar por categoría
- Muestra estadísticas:
  - Total de productos en oferta
  - Descuento máximo disponible
  - Ahorro total si compras todos

**Referencia:** `app/(content)/tienda-agricola/promociones/page.tsx:1-235`

---

### 6. **services/tiendaAgricolaService.ts**
Este archivo contiene las funciones para comunicarse con el backend.

#### **Funciones principales:**

| Función | Qué hace |
|---------|----------|
| `obtenerProductosAgricolas()` | Obtiene lista de productos (con filtros opcionales) |
| `obtenerProductoAgricolaPorId(id)` | Obtiene un producto específico por su ID |
| `crearProductoAgricola()` | Crea un nuevo producto (admin) |
| `actualizarProductoAgricola()` | Actualiza un producto completo |
| `actualizarParcialProductoAgricola()` | Actualiza solo algunos campos |
| `eliminarProductoAgricola()` | Elimina un producto |
| `obtenerProductosEnPromocion()` | Obtiene solo productos en oferta |
| `obtenerProductosPorMarca()` | Filtra productos por marca |
| `actualizarStockProducto()` | Actualiza inventario de un producto |

**Referencia:** `services/tiendaAgricolaService.ts:12-109`

---

### 7. **services/apiClient.ts**
Cliente HTTP genérico que se usa para hacer peticiones al backend.

#### **¿Qué hace?**
Proporciona funciones simples para comunicarse con la API:
- `get()` - Obtener datos
- `post()` - Crear datos
- `put()` - Actualizar datos completos
- `patch()` - Actualizar datos parciales
- `del()` - Eliminar datos

**Ventajas:**
- Maneja errores automáticamente
- Agrega encabezados necesarios
- Construye URLs correctamente

**Referencia:** `services/apiClient.ts:34-112`

---

### 8. **types/tiendaAgricola.ts**
Define la estructura de datos que se usa en toda la aplicación.

#### **Tipos principales:**

**ProductoAgricola:**
```typescript
{
  categoria: 'agricola'
  stock?: number
  unidadMedida?: 'kg' | 'unidad' | 'litro' | 'bulto' | 'paquete'
  marca?: string
  proveedor?: string
}
```

**FiltrosProductoAgricola:**
```typescript
{
  nombre?: string
  precioMin?: number
  precioMax?: number
  enPromocion?: boolean
  enStock?: boolean
  marca?: string
}
```

**Referencia:** `types/tiendaAgricola.ts:4-46`

---

## Flujo de Funcionamiento

### Cuando un usuario visita la tienda:

1. **Página Principal** (`page.tsx`)
   - Se carga el layout con efectos visuales
   - Muestra 4 tarjetas de categorías
   - Muestra 4 productos destacados
   - Muestra contador de promociones activas

2. **Usuario hace clic en una categoría**
   - Navega a `/tienda-agricola/[categoria]`
   - Se filtran productos de esa categoría
   - Se muestran en un grid de tarjetas

3. **Usuario hace clic en un producto**
   - Se abre un modal (ProductModal)
   - Muestra imagen grande, descripción completa, precio
   - Botón para agregar al carrito (futura implementación)

4. **Usuario visita Promociones**
   - Se filtran productos con `enPromocion: true`
   - Se pueden filtrar por categoría
   - Muestra estadísticas de ahorro

---

## Tecnologías Utilizadas

| Tecnología | Para qué se usa |
|------------|-----------------|
| **Next.js 14** | Framework de React para aplicaciones web |
| **TypeScript** | Tipado estático para evitar errores |
| **Tailwind CSS** | Estilos rápidos y responsivos |
| **Lucide React** | Iconos modernos |
| **API REST** | Comunicación con backend |

---

## Características Visuales

### Efectos y Animaciones:
- **LiquidEther**: Fondo animado con efecto de líquido en movimiento
- **Hover Effects**: Los productos crecen al pasar el mouse
- **Badges**: Etiquetas de descuento animadas
- **Gradientes**: Colores degradados por categoría
- **Waves**: Divisores ondulados entre secciones
- **Blur Effects**: Fondos difuminados para modernidad

---

## Rutas de Navegación

| Ruta | Qué muestra |
|------|-------------|
| `/tienda-agricola` | Página principal con todas las categorías |
| `/tienda-agricola/mascotas` | Productos de mascotas |
| `/tienda-agricola/ferreteria` | Productos de ferretería |
| `/tienda-agricola/ganaderia` | Productos de ganadería |
| `/tienda-agricola/agricola` | Productos agrícolas |
| `/tienda-agricola/promociones` | Productos en oferta |

---

## Datos de Ejemplo

### Categorías disponibles:

1. **Mascotas** (Color: Azul)
   - Medicamentos veterinarios
   - Champús y cuidado
   - Antiparasitarios

2. **Ferretería** (Color: Gris)
   - Herramientas
   - Equipos de protección
   - Instrumentos especializados

3. **Ganadería** (Color: Verde)
   - Medicamentos para ganado
   - Suplementos vitamínicos
   - Equipos para vaquería

4. **Agrícola** (Color: Esmeralda)
   - Fertilizantes
   - Herbicidas
   - Herramientas de cultivo

---

## Próximas Funcionalidades (No Implementadas)

- Carrito de compras
- Pasarela de pago
- Sistema de usuarios y autenticación
- Historial de pedidos
- Búsqueda avanzada
- Filtros por precio
- Comparador de productos

---

## Resumen para Exposición

**"Implementamos un módulo de tienda online para La Casa del Ganadero que permite:"**

1. Ver productos organizados en 4 categorías
2. Explorar 22 productos reales con imágenes y precios
3. Filtrar promociones activas
4. Navegar de forma intuitiva con breadcrumbs
5. Ver detalles completos en modales
6. Disfrutar de una interfaz moderna con animaciones

**"Usamos una arquitectura organizada en:"**
- **Componentes reutilizables** para mantener el código limpio
- **Servicios centralizados** para comunicación con backend
- **Tipos TypeScript** para prevenir errores
- **Rutas dinámicas** para escalabilidad

**"El código está preparado para conectar con una API real y escalar con nuevas funcionalidades como carrito de compras y pagos."**

---

## Referencias Rápidas

- Página principal: `app/(content)/tienda-agricola/page.tsx`
- Servicios: `services/tiendaAgricolaService.ts:12-109`
- Tipos: `types/tiendaAgricola.ts:4-46`
- Componentes: `app/(content)/tienda-agricola/components/`
- Datos: `app/(content)/tienda-agricola/data/productos.tsx:5-265`

---

**Documento creado para facilitar la exposición del proyecto "Tienda Agrícola"**
