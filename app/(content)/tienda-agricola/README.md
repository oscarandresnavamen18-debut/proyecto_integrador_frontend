# Tienda Agrícola - La Casa del Ganadero

## Descripción

Tienda en línea profesional para productos agrícolas, ganaderos, de mascotas y ferretería. Desarrollada con Next.js 16, React 19, TypeScript y Tailwind CSS.

## Características

### Páginas Implementadas

1. **Página Principal** (`/tienda-agricola`)
   - Hero section con gradientes y animaciones
   - 4 tarjetas de categorías con efectos hover
   - Sección de productos destacados
   - Estadísticas y características del negocio
   - Botón destacado de promociones

2. **Páginas de Categorías** (`/tienda-agricola/[categoria]`)
   - Mascotas (`/tienda-agricola/mascotas`)
   - Ferretería (`/tienda-agricola/ferreteria`)
   - Ganadería (`/tienda-agricola/ganaderia`)
   - Agrícola (`/tienda-agricola/agricola`)
   - Hero personalizado por categoría con colores únicos
   - Breadcrumbs para navegación
   - Grid responsivo de productos

3. **Página de Promociones** (`/tienda-agricola/promociones`)
   - Filtrado por categoría
   - Estadísticas de descuentos
   - Banner promocional con formulario de suscripción
   - Productos con badges de descuento

### Componentes

- **Header**: Navegación sticky con menú responsive
- **Footer**: Información de contacto, enlaces y redes sociales
- **ProductCard**: Tarjeta de producto con:
  - Imagen con zoom en hover
  - Badge de categoría
  - Badge de promoción (si aplica)
  - Precio con descuento (si aplica)
  - Botón de agregar al carrito
- **CategoryCard**: Tarjeta de categoría con:
  - Imagen de fondo con overlay
  - Contador de productos
  - Efectos de hover avanzados
- **Breadcrumbs**: Navegación jerárquica

### Características Técnicas

#### Animaciones
- Transiciones suaves en hover
- Animaciones de entrada (fade-in, slide-up)
- Pulse animations en badges de promoción
- Scale transforms en botones
- Gradientes animados

#### Responsive Design
- Grid adaptativo (1-4 columnas según viewport)
- Menú hamburguesa en mobile
- Imágenes optimizadas con Next.js Image
- Breakpoints: mobile, tablet, desktop

#### UX/UI
- Esquema de colores por categoría:
  - Mascotas: Azul
  - Ferretería: Gris
  - Ganadería: Verde
  - Agrícola: Esmeralda
- Formato de precios en COP (Pesos Colombianos)
- Estados visuales claros (hover, active, focus)
- Feedback visual en todas las interacciones

## Estructura de Archivos

```
app/(content)/tienda-agricola/
├── page.tsx                          # Página principal
├── [categoria]/
│   ├── page.tsx                      # Página dinámica de categorías
│   └── not-found.tsx                 # 404 personalizado
├── promociones/
│   └── page.tsx                      # Página de promociones
├── components/
│   ├── Header.tsx                    # Navegación principal
│   ├── Footer.tsx                    # Pie de página
│   ├── ProductCard.tsx               # Tarjeta de producto
│   ├── CategoryCard.tsx              # Tarjeta de categoría
│   └── Breadcrumbs.tsx               # Navegación de migas de pan
├── data/
│   └── productos.tsx                 # Base de datos de productos
└── README.md                         # Este archivo
```

## Datos de Productos

Los productos están organizados en el archivo `data/productos.tsx` con:

- **productosPorCategoria**: Record de productos por categoría
- **categoriasInfo**: Información de cada categoría (título, color, descripción, imagen)
- **categorias**: Array de categorías disponibles

### Estructura de Producto

```typescript
interface Producto {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  categoria: 'mascotas' | 'ferreteria' | 'ganaderia' | 'agricola';
  enPromocion?: boolean;
  descuento?: number;
  precioOriginal?: number;
}
```

## Navegación

### URLs Disponibles

- `/tienda-agricola` - Página principal
- `/tienda-agricola/mascotas` - Categoría Mascotas (5 productos)
- `/tienda-agricola/ferreteria` - Categoría Ferretería (7 productos)
- `/tienda-agricola/ganaderia` - Categoría Ganadería (5 productos)
- `/tienda-agricola/agricola` - Categoría Agrícola (5 productos)
- `/tienda-agricola/promociones` - Todas las promociones activas

## Tecnologías Utilizadas

- **Next.js 16** - Framework React con App Router
- **React 19.2** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **Lucide React** - Iconos SVG
- **Framer Motion** - Animaciones (disponible)

## Próximas Mejoras Sugeridas

1. Implementar carrito de compras funcional
2. Agregar página de detalle de producto
3. Sistema de búsqueda y filtros avanzados
4. Integración con pasarela de pagos
5. Sistema de usuarios y autenticación
6. Wishlist / Lista de deseos
7. Sistema de reviews y calificaciones
8. Chat en vivo / WhatsApp
9. Comparador de productos
10. Blog / Contenido educativo

## Instalación y Uso

```bash
# Instalar dependencias (si no están instaladas)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
http://localhost:3000/tienda-agricola
```

## Notas de Desarrollo

- Las imágenes externas están configuradas en `next.config.ts`
- Los estilos globales incluyen animaciones personalizadas en `app/globals.css`
- El sistema es completamente responsive y funciona en todos los dispositivos
- Todos los componentes son client components ('use client') para interactividad
- Los precios se formatean automáticamente en pesos colombianos (COP)

---

Desarrollado con profesionalismo para La Casa del Ganadero 🌾
