# Diagrama Visual - Estructura de la Tienda Agrícola

## Mapa de Carpetas y Archivos

```
proyecto_integrador_frontend/
│
├── 📁 app/(content)/tienda-agricola/
│   │
│   ├── 📁 components/                    ← COMPONENTES VISUALES
│   │   ├── Header.tsx                    [Barra superior con navegación]
│   │   ├── Footer.tsx                    [Pie de página]
│   │   ├── ProductCard.tsx               [Tarjeta de producto]
│   │   ├── ProductModal.tsx              [Ventana de detalles]
│   │   ├── DecayCard.tsx                 [Tarjeta de categoría]
│   │   ├── Breadcrumbs.tsx               [Migas de pan]
│   │   ├── LiquidEther.tsx               [Animación de fondo]
│   │   └── FloatingLines.tsx             [Líneas flotantes]
│   │
│   ├── 📁 data/                          ← CATÁLOGO DE PRODUCTOS
│   │   └── productos.tsx                 [22 productos en 4 categorías]
│   │
│   ├── 📁 [categoria]/                   ← PÁGINAS DINÁMICAS
│   │   ├── page.tsx                      [Muestra productos por categoría]
│   │   └── not-found.tsx                 [Página 404]
│   │
│   ├── 📁 promociones/                   ← PÁGINA DE OFERTAS
│   │   └── page.tsx                      [Productos en promoción]
│   │
│   ├── 📄 layout.tsx                     [Diseño con efectos visuales]
│   ├── 📄 page.tsx                       [Página principal]
│   ├── 📄 tienda.css                     [Estilos personalizados]
│   └── 📄 README.md                      [Documentación interna]
│
├── 📁 services/                          ← COMUNICACIÓN CON BACKEND
│   ├── apiClient.ts                      [Cliente HTTP (GET, POST, PUT, DELETE)]
│   └── tiendaAgricolaService.ts          [9 funciones para productos]
│
└── 📁 types/                             ← DEFINICIONES DE TIPOS
    └── tiendaAgricola.ts                 [Interfaces TypeScript]
```

---

## Flujo de Datos

```
┌─────────────────────────────────────────────────────────────┐
│                      USUARIO                                 │
│                        ⬇️                                    │
│              Visita /tienda-agricola                        │
└─────────────────────────────────────────────────────────────┘
                        ⬇️
┌─────────────────────────────────────────────────────────────┐
│                   layout.tsx                                 │
│          [Aplica efectos visuales LiquidEther]              │
└─────────────────────────────────────────────────────────────┘
                        ⬇️
┌─────────────────────────────────────────────────────────────┐
│                    page.tsx                                  │
│   [Carga productos desde data/productos.tsx]               │
│   [Muestra Header + Categorías + Destacados + Footer]      │
└─────────────────────────────────────────────────────────────┘
                        ⬇️
┌─────────────────────────────────────────────────────────────┐
│              Usuario hace clic en categoría                 │
│                        ⬇️                                    │
│             /tienda-agricola/mascotas                       │
└─────────────────────────────────────────────────────────────┘
                        ⬇️
┌─────────────────────────────────────────────────────────────┐
│              [categoria]/page.tsx                           │
│   [Filtra productos de la categoría seleccionada]          │
│   [Muestra grid con ProductCard por cada producto]         │
└─────────────────────────────────────────────────────────────┘
                        ⬇️
┌─────────────────────────────────────────────────────────────┐
│            Usuario hace clic en producto                    │
│                        ⬇️                                    │
│                 ProductModal.tsx                            │
│   [Muestra detalles completos en ventana emergente]        │
└─────────────────────────────────────────────────────────────┘
```

---

## Relación entre Archivos

### PÁGINAS (Lo que ve el usuario)

```
page.tsx                  → Usa: Header, Footer, DecayCard, ProductCard
    ↓
[categoria]/page.tsx      → Usa: Header, Footer, ProductCard, Breadcrumbs
    ↓
promociones/page.tsx      → Usa: Header, Footer, ProductCard, Breadcrumbs
```

### COMPONENTES (Bloques reutilizables)

```
ProductCard.tsx
    ├── Muestra imagen del producto
    ├── Muestra nombre y descripción
    ├── Muestra precio (con o sin descuento)
    └── Botón "Ver Detalles" → Abre ProductModal

ProductModal.tsx
    ├── Ventana emergente
    ├── Imagen grande
    ├── Descripción completa
    └── Botón "Agregar al Carrito" (próximamente)

DecayCard.tsx
    ├── Tarjeta visual de categoría
    ├── Imagen de fondo
    ├── Nombre de categoría
    └── Link a /tienda-agricola/[categoria]
```

### SERVICIOS (Conexión con Backend)

```
tiendaAgricolaService.ts
    ├── obtenerProductosAgricolas()      [GET /productos-agricolas]
    ├── obtenerProductoAgricolaPorId()   [GET /productos-agricolas/:id]
    ├── crearProductoAgricola()          [POST /productos-agricolas]
    ├── actualizarProductoAgricola()     [PUT /productos-agricolas/:id]
    ├── eliminarProductoAgricola()       [DELETE /productos-agricolas/:id]
    └── obtenerProductosEnPromocion()    [GET con filtro enPromocion=true]

                    ⬇️ Usa

apiClient.ts
    ├── get()     → Peticiones GET
    ├── post()    → Peticiones POST
    ├── put()     → Peticiones PUT
    ├── patch()   → Peticiones PATCH
    └── del()     → Peticiones DELETE
```

---

## Datos - Estructura de Productos

### Ejemplo de un Producto

```javascript
{
  id: "a2",
  nombre: "HIDROKOSECHA 4-14-20 GEL LITRO",
  precio: 52000,
  precioOriginal: 65000,
  descripcion: "Fertilizante de alta solubilidad...",
  imagen: "https://lacasadelganadero.com.co/...",
  categoria: "agricola",
  enPromocion: true,
  descuento: 20
}
```

### Categorías con Productos

```
📦 MASCOTAS (5 productos)
    ├── SPECTRA-DOL (En promoción -20%)
    ├── JABÓN PIOJIDERMA (En promoción -60%)
    ├── NOVACAN T
    ├── DESCENSOR 200 MG (En promoción -20%)
    └── EDO CHAMPU LITRO

🔧 FERRETERÍA (7 productos)
    ├── DESCOLMILLADORA
    ├── Botas
    ├── ESTUCHE CIRUGÍA (En promoción -15%)
    ├── FUMIGADORA ROYAL CÓNDOR (En promoción -15%)
    ├── TIJERA CORTA RAMAS 21
    ├── AISLADOR MANGO BROCHE
    └── CUCHILLA DOBLE TIRO

🐄 GANADERÍA (5 productos)
    ├── ANAPLAST COMBO 250 ML
    ├── EFFIPRO BOVIS LITRO (En promoción -20%)
    ├── EMICINA 100 x 250 ML (En promoción -20%)
    ├── PROMOCALIER 43 KILO
    └── SILLA CIENAGUERA VAQUERIA

🌾 AGRÍCOLA (5 productos)
    ├── MAQUINA SEMBRADORA AUTO SEEDER
    ├── HIDROKOSECHA 4-14-20 (En promoción -20%)
    ├── SOLUTEC DESARROLLO (En promoción -15%)
    ├── ARPON 60 ml
    └── CONTROLER BLACK SUMITOMO

TOTAL: 22 productos | 10 en promoción
```

---

## Rutas y Navegación

```
🏠 Página Principal
    /tienda-agricola
        ├── Muestra 4 categorías en tarjetas
        ├── Muestra 4 productos destacados
        └── Link a promociones

📂 Por Categoría
    /tienda-agricola/mascotas
    /tienda-agricola/ferreteria
    /tienda-agricola/ganaderia
    /tienda-agricola/agricola
        └── Grid con todos los productos de la categoría

🔥 Promociones
    /tienda-agricola/promociones
        ├── Solo productos con enPromocion: true
        ├── Filtros por categoría
        └── Estadísticas de ahorro
```

---

## Tipos TypeScript Usados

### ProductoAgricola
```typescript
interface ProductoAgricola {
  id: string
  nombre: string
  precio: number
  precioOriginal?: number
  descripcion: string
  imagen: string
  categoria: 'agricola'
  enPromocion?: boolean
  descuento?: number
  stock?: number
  unidadMedida?: 'kg' | 'unidad' | 'litro' | 'bulto' | 'paquete'
  marca?: string
  proveedor?: string
}
```

### FiltrosProductoAgricola
```typescript
interface FiltrosProductoAgricola {
  nombre?: string
  precioMin?: number
  precioMax?: number
  enPromocion?: boolean
  enStock?: boolean
  marca?: string
}
```

---

## Extensiones Recomendadas para VS Code

Para navegar mejor el proyecto, instala estas extensiones:

1. **Project Manager** (alefragnani.project-manager)
   - Gestiona carpetas y proyectos fácilmente

2. **Breadcrumbs** (ya incluido en VS Code)
   - Activa con: `View > Show Breadcrumbs`
   - Muestra la ruta actual en la parte superior

3. **Path Intellisense** (christian-kohler.path-intellisense)
   - Autocompletado de rutas al escribir imports

4. **Better Comments** (aaron-bond.better-comments)
   - Colorea comentarios por tipo (TODO, FIXME, etc.)

5. **Folder Path Color** (wayou.vscode-file-path-color)
   - Colorea pestañas según la carpeta

### Configuración Recomendada

Agrega a tu `settings.json` (Ctrl+Shift+P → "Preferences: Open Settings JSON"):

```json
{
  "explorer.compactFolders": false,
  "breadcrumbs.enabled": true,
  "explorer.sortOrder": "type",
  "workbench.tree.indent": 20
}
```

---

## Atajos Útiles de VS Code

- `Ctrl+P` → Búsqueda rápida de archivos
- `Ctrl+Shift+E` → Enfocarse en el explorador de archivos
- `Ctrl+Shift+F` → Búsqueda global en todo el proyecto
- `Ctrl+Click` → Ir a definición (navegar entre archivos)

---

## Resumen Rápido para Exposición

**"La Tienda Agrícola está organizada en 3 partes principales:"**

### 1. INTERFAZ VISUAL (app/tienda-agricola)
- Páginas para cada categoría
- Componentes reutilizables
- Efectos y animaciones

### 2. LÓGICA DE NEGOCIO (services)
- Funciones para conectar con el backend
- Manejo de productos (crear, leer, actualizar, eliminar)

### 3. ESTRUCTURA DE DATOS (types)
- Definiciones claras de cómo son los productos
- Previene errores con TypeScript

**"Todo funciona en conjunto para ofrecer una experiencia de compra fluida y profesional."**
