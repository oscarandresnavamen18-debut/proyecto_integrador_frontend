# 🎨 Sistema de Colores del Proyecto

Este documento explica la organización visual por colores de las diferentes secciones del proyecto.

## 📋 Esquema de Colores

### 🔴 ROJO - Tienda Agrícola
Todas las carpetas, archivos y componentes relacionados con la tienda agrícola:
- `app/(content)/tienda-agricola/`
- `app/tienda-agricola/`
- Componentes en `app/(content)/tienda-agricola/components/`
- Servicios en `services/tiendaAgricolaService.ts`
- Tipos en `types/tiendaAgricola.ts`

### 🔵 AZUL - Vacunas y Enfermedades
Todas las carpetas, archivos y componentes relacionados con vacunas:
- `app/vacunas-enfermedades/`
- Componentes relacionados con salud animal
- Servicios de vacunación

### 🟡 AMARILLO - Conocimiento Ganadero
Todas las carpetas, archivos y componentes relacionados con conocimiento:
- `app/conocimiento-ganadero/`
- Componentes educativos
- Recursos de aprendizaje

---

## 🔧 Cómo Ver los Colores en VS Code

### ✅ Opción 1: Material Icon Theme + Iconos Personalizados (Más Fácil)

**Esta opción usa ICONOS diferentes (no colores) para cada sección:**

1. **Instalar la extensión:**
   - Abre VS Code
   - Presiona `Ctrl+Shift+X` (o `Cmd+Shift+X` en Mac)
   - Busca **"Material Icon Theme"**
   - Instala la extensión de **Philipp Kief**

2. **Activar el tema:**
   - Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
   - Escribe "Material Icons: Activate Icon Theme"
   - Selecciona "Material Icon Theme"

3. **Resultado:**
   - `tienda-agricola` → Icono de carrito 🛒
   - `vacunas-enfermedades` → Icono de salud ⚕️
   - `conocimiento-ganadero` → Icono de biblioteca 📚

### 🎨 Opción 2: Peacock (Colorear Toda la Ventana)

**Esta opción cambia el color de TODA la ventana de VS Code según la sección:**

1. **Instalar Peacock:**
   - Busca **"Peacock"** en extensiones
   - Instala la extensión de **John Papa**

2. **Configurar colores favoritos:**
   - Presiona `Ctrl+Shift+P`
   - Escribe "Peacock: Enter a Color"
   - Para Tienda Agrícola: `#ef4444` (rojo)
   - Para Vacunas: `#3b82f6` (azul)
   - Para Conocimiento: `#eab308` (amarillo)

3. **Usar:**
   - Cambia el color cada vez que trabajes en una sección diferente
   - El color afecta la barra de título, barra de estado, etc.

### 🔥 Opción 3: Custom CSS (Avanzado - Colorear Carpetas Específicas)

**Esta opción requiere más configuración pero colorea las carpetas exactamente como quieres:**

1. **Instalar "Custom CSS and JS Loader":**
   - Busca en extensiones
   - Requiere habilitar modificaciones del editor

2. **Crear archivo CSS personalizado** con reglas para colorear carpetas específicas

⚠️ **Nota:** Esta opción es más compleja y puede requerir reiniciar VS Code con permisos

### 📝 Opción 4: Manual (Más Simple)

Si las extensiones no funcionan, simplemente **busca los emojis en los comentarios**:
- Los archivos ya tienen comentarios con 🔴 🔵 🟡 para identificación rápida

---

## 📝 Referencia Rápida

| Sección | Color | Carpetas Principales |
|---------|-------|---------------------|
| 🔴 Tienda Agrícola | Rojo | `tienda-agricola/`, `tiendaAgricolaService.ts` |
| 🔵 Vacunas | Azul | `vacunas-enfermedades/` |
| 🟡 Conocimiento | Amarillo | `conocimiento-ganadero/` |

---

## 💡 Notas

- El archivo `.vscode/settings.json` ya contiene la configuración necesaria
- Los comentarios en el código también usan emojis para identificación rápida
- Este sistema ayuda a mantener organizado el proyecto y facilita la navegación
