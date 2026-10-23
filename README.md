# 🍽️ La Buena Mesa — Sitio web del restaurante

Sitio web estático para un restaurante ficticio, desarrollado como actividad de clase para practicar **Git Flow simplificado** (ramas de feature, integración en `develop` y release a `main`).

Todo el proyecto está construido con **HTML, CSS y JavaScript nativos**, sin frameworks, sin librerías, sin backend y sin ningún tipo de servidor. Se desarrolló en **Visual Studio Code** y se ejecuta abriendo directamente el archivo `index.html` en el navegador.

---

## 📋 Tabla de contenido

1. [Características](#-características)
2. [Tecnologías y herramientas](#-tecnologías-y-herramientas)
3. [Estructura del proyecto](#-estructura-del-proyecto)
4. [Cómo ejecutarlo](#-cómo-ejecutarlo)
5. [Flujo de trabajo con Git](#-flujo-de-trabajo-con-git)
6. [Historial de versiones](#-historial-de-versiones)
7. [Autor](#-autor)

---

## ✨ Características

### Navbar (barra de navegación)

- Logo del restaurante
- Tres enlaces: **Menú**, **Nosotros**, **Reservas**
- Cambio dinámico entre secciones del `<main>` sin recargar la página
- Modal de "Reservas" con mensaje de mesas agotadas
- Sticky en la parte superior al hacer scroll

### Body (contenido principal)

- **Sección Menú** (visible por defecto):
  - Grilla responsiva con 6 platos típicos peruanos
  - Cada tarjeta abre un modal con imagen, nombre, precio y descripción
  - El modal se cierra con la X, con clic fuera o con la tecla Escape
- **Sección Nosotros**:
  - Historia del restaurante
  - Tres bloques de valores: ingredientes frescos, recetas de familia, atención cercana

### Footer (pie de página)

- Cuatro columnas: nombre, contacto, horario, redes sociales
- Barra inferior con copyright y enlaces legales (aviso de privacidad, términos)
- Diseño responsive: se apila en móvil

### General

- 100% responsive (móvil, tablet, escritorio)
- Modales accesibles (`aria-hidden`, `role="dialog"`, `aria-modal`)
- Sin dependencias externas: funciona abriendo `index.html` directamente en el navegador

---

## 🛠️ Tecnologías y herramientas

| Categoría | Herramienta / Tecnología |
|-----------|---------------------------|
| **Estructura** | HTML5 semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) |
| **Estilos** | CSS3 (variables CSS, Grid, Flexbox, media queries) |
| **Interactividad** | JavaScript ES6+ nativo (manipulación del DOM y eventos) |
| **Editor** | Visual Studio Code |
| **Control de versiones** | Git con flujo de ramas |

**Sin frameworks de CSS** (nada de Bootstrap, Tailwind).  
**Sin frameworks de JS** (nada de React, Vue, jQuery).  
**Sin backend, sin base de datos y sin servidor**: todo el contenido es estático.

---

## 📁 Estructura del proyecto

```text
pagina_web/
├── index.html              # Página única con 2 secciones y 2 modales
├── README.md               # Este documento
├── css/
│   ├── base.css            # Reset, variables CSS y estilos globales
│   ├── modal.css           # Estructura genérica de modales (compartido)
│   ├── navbar.css          # Estilos del navbar (rama: feature/navbar)
│   ├── body.css            # Estilos del main y sus secciones (rama: feature/body)
│   └── footer.css          # Estilos del footer (rama: feature/footer)
├── js/
│   ├── navbar.js           # Navegación entre secciones + modal reservas
│   ├── body.js             # Render de platos + modal plato
│   └── footer.js           # Reservado para futuras mejoras del footer
└── img/
    ├── ceviche.jpg
    ├── lomo.jpg
    ├── aji.jpg
    ├── anticucho.jpg
    ├── causa.jpg
    └── suspiro.jpg
```

**Convención clave:** cada rama de feature toca **solo sus archivos** (`navbar.css`, `body.css`, `footer.css`) para evitar conflictos en los merges. `base.css` y `modal.css` son comunes y no se modifican en las ramas.

---

## 🚀 Cómo ejecutarlo

No requiere servidor, instalación ni dependencias.

### Opción 1 — Desde Visual Studio Code

1. Abrir la carpeta del proyecto en **Visual Studio Code**.
2. Clic derecho sobre `index.html` → **"Open with Live Server"** (si tienes la extensión Live Server instalada).
3. O simplemente clic derecho → **"Reveal in File Explorer"** → doble clic en `index.html`.

### Opción 2 — Abrir directo desde el explorador de archivos

Doble clic en `index.html`. Se abre en el navegador por defecto y funciona completamente, ya que todo es estático (HTML, CSS y JavaScript puro, sin PHP ni base de datos).

---

## 🌿 Flujo de trabajo con Git

El proyecto se desarrolló siguiendo un **Git Flow simplificado**.

### Ramas utilizadas

| Rama | Propósito | Estado |
|------|-----------|--------|
| `main` | Versión final estable (con tag `v1.0`) | ✅ Release |
| `develop` | Integración de todas las features | ✅ Actualizada |
| `feature/navbar` | Barra de navegación + modal reservas | ✅ Fusionada |
| `feature/body` | Lista de platos + modal + sección nosotros | ✅ Fusionada |
| `feature/footer` | Pie de página con contacto, redes y copyright | ✅ Fusionada |
| `docs/readme` | Documentación del proyecto | ✅ Fusionada |

### Reglas del flujo

1. **`main` nunca se toca directamente.** Solo recibe merges de `develop` cuando hay una versión verificada.
2. **`develop` es la rama de integración.** Aquí se fusionan las features una vez terminadas.
3. **Cada feature nace de `develop` actualizado.** No se crean todas las ramas al inicio: cada una se crea justo antes de empezar a trabajarla.
4. **Cada feature vive en sus propios archivos.** `navbar.css`, `body.css` y `footer.css` son independientes. `base.css` y `modal.css` son comunes y no se modifican en las ramas.
5. **Los merges a `develop` usan `--no-ff`** para preservar la historia de cada rama.
6. **Las ramas se borran después de fusionarlas** (higiene). Sus commits se conservan en `develop`.

### Comandos principales usados

```bash
# Crear rama de feature (siempre desde develop actualizado)
git checkout develop
git checkout -b feature/nombre

# Trabajar y commitear
git add .
git commit -m "feat(modulo): descripcion clara del cambio"

# Fusionar a develop (con --no-ff para preservar historia)
git checkout develop
git merge --no-ff feature/nombre -m "merge: modulo en develop"

# Borrar la rama (segura si ya está fusionada)
git branch --merged develop         # verificar
git branch -d feature/nombre        # borrar

# Ver el historial completo
git log --oneline --graph --all
```

### Convención de commits

```text
feat(modulo):    nueva funcionalidad
fix(modulo):     corrección de bug
docs:            documentación
style:           formato (sin cambiar lógica)
refactor:        reescritura sin cambiar comportamiento
chore:           mantenimiento (configs, estructura)
```

### Sincronizar una rama con `develop`

Si `develop` avanzó mientras trabajabas en una rama:

```bash
git checkout feature/mi-rama
git merge develop
```

Trae los cambios nuevos a tu rama sin perder tus commits. **No se borra ni se recrea la rama**: eso solo se hace si la rama está vacía.

### Diagrama del flujo

```text
main    ────●───────────────────────────────────────●──►  (v1.0)
             │                                       │
             │ (base inicial)                        │ (release final)
             │                                       │
develop ────┴───●───●───●───●───────────────────────●──►
                 │   │   │   │
         feature/│   │   │   │
         navbar ─┘   │   │   │
         feature/    │   │   │
         body ───────┘   │   │
         feature/        │   │
         footer ─────────┘   │
         docs/               │
         readme ─────────────┘
```

---

## 📝 Historial de versiones

### v1.0 — Versión inicial completa

- ✅ Navbar con navegación entre secciones y modal de reservas
- ✅ Sección Menú con 6 platos y modal de detalle por plato
- ✅ Sección Nosotros con historia y valores
- ✅ Footer con contacto, horario, redes y copyright
- ✅ Diseño responsive (móvil, tablet, escritorio)
- ✅ Modales accesibles (teclado + clic fuera)
- ✅ Flujo Git completo: 3 ramas de feature + documentación fusionadas en `develop`
- ✅ Documentación del proyecto en este README

---

## 👤 Autor

**Jose Abraham**  
Actividad de clase — **Full Stack Developer**  
Profesor: **Ronald**  
Fecha: **23/10/2026**

---

## 📄 Licencia

Proyecto educativo. Uso libre para fines académicos.

---

## Cambios respecto a la versión anterior

| Antes | Ahora |
|---|---|
| Sección "Servidor local: XAMPP (Apache)" en la tabla de herramientas | ❌ Eliminado |
| "Cómo ejecutarlo" con instrucciones de `htdocs` de XAMPP | ✅ Reemplazado por **abrir `index.html` directamente** (con opción de Live Server en VS Code) |
| Menciones a "Apache + PHP" en la introducción | ❌ Eliminadas |
| Texto "funciona con XAMPP" | ✅ Cambiado a "funciona abriendo `index.html` directamente" |

Todo lo demás (características, estructura, flujo de Git, diagrama e historial) se mantiene igual.

---

## Guardar y commitear

```bash
# Guardar el archivo como README.md en la raíz del proyecto
# Luego:
git checkout develop
git checkout -b docs/readme
git add README.md
git commit -m "docs: agrega README con descripcion, flujo y version 1.0"
git checkout develop
git merge --no-ff docs/readme -m "merge: readme en develop"
git branch -d docs/readme

# Release final
git checkout main
git merge --no-ff develop -m "release: version 1.0 del restaurante La Buena Mesa"
git tag -a v1.0 -m "Primera version completa del sitio"
```
