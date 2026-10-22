# Ecosistema Web Dual: "Enjoy & Learn" & "Salud & Bienestar"

Ecosistema web dual compuesto por dos sitios hermanos interconectados que comparten una navegación común y componentes globales, pero proyectan identidades visuales y universos sensoriales radicalmente distintos.

---

## 🎨 Identidades Visuales

### 💃 1. Enjoy and Learn (Salsa, Bachata, Rumba & Bailoterapia)
* **Estética:** Luminosa, cálida, acogedora y con elegancia antillana (Paleta "Caribe").
* **Paleta Oficial de Marca:**
  * **Fondo principal:** Blanco Arena (`#F4F1EA`). Un lienzo luminoso y cálido, mucho más acogedor que el blanco puro.
  * **Acción primaria (Botones):** Terracota Vibrante (`#E65100`). Transmite el calor de la música afroantillana manteniendo una línea gráfica sofisticada.
  * **Acentos:** Verde Botánico (`#2E7D32`). Un toque fresco que rompe la calidez y estructura visualmente la página.
  * **Texto:** Gris Antracita (`#2C3E50`). Mantiene un contraste alto y moderno sin la dureza del negro absoluto.
* **Tipografía:** Montserrat (Titulares enérgicos y potentes) + Inter (Lectura cómoda).

### 🌿 2. Salud y Bienestar (Mindfulness, Yoga y Nutrición Holística)
* **Estética:** Inspiración nórdica, texturas orgánicas estilo microcemento, luz y calma.
* **Paleta:**
  * Fondo: Piedra Cálida (`#EAE8E3` con microtextura)
  * Textos: Gris Grafito (`#2A2A2A`)
  * CTA & Acentos: Verde Botánico (`#3E5A44`)
  * Detalles: Madera Suave / Roble Claro (`#D4B895`)
* **Tipografía:** Playfair Display (Serena y elegante) + Lato (Cálida y limpia).

---

## ⚡ Componentes Clave

1. **Header Sticky Compartido:**
   * **Izquierda:** Logotipo adaptado a cada marca.
   * **Centro:** Historia/About, Eventos/Talleres y Reserva (CTA modal).
   * **Derecha:** Selector multilingüe (**ES / EN / FR**) y **El Puente (Cross-Link)** que conecta ambas páginas con un botón destacado y animación sutil de pulso.
   * **Mobile-First:** Menú responsive tipo drawer en pantallas móviles.

2. **Galería Flotante Interactiva:**
   * Cuadrícula asimétrica (masonry) con badges para fotos, talleres y vídeos 4K.
   * Efecto parallax suave al scroll y hover con zoom cinematográfico.
   * Filtros de categorías en tiempo real.

3. **Modal de Reserva:**
   * Formulario limpio y accesible para agendar clases, talleres y servicios.

4. **Transición Fluida entre Sitios ("El Puente"):**
   * Integración con la **View Transitions API** nativa (`@view-transition { navigation: auto; }` y `document.startViewTransition`) para transiciones cinematográficas sin parpadeo de pantalla.

---

## 📁 Estructura del Proyecto

```
proofenjoy/
├── index.html                # Entrada predeterminada (Enjoy & Learn)
├── enjoy-and-learn.html      # Página A: Salsa, Eventos y Audiovisuales
├── salud-y-bienestar.html    # Página B: Mindfulness, Yoga y Nutrición
├── styles-base.css           # Arquitectura común, layout, modales y animaciones
├── theme-enjoy.css           # Variables cromáticas y estilos de Enjoy & Learn
├── theme-bienestar.css       # Variables cromáticas y estilos de Salud & Bienestar
├── ecosystem.js              # Controlador multilingüe, parallax, modal y puente
├── screenshot-enjoy.png      # Captura visual de Enjoy and Learn
├── screenshot-bienestar.png  # Captura visual de Salud y Bienestar
└── README.md
```

---

## 🚀 Despliegue en GitHub Pages

Para publicar este proyecto gratis con GitHub Pages:

1. Ve a tu repositorio en GitHub: `https://github.com/abelruizrodes-pixel/proofenjoy/settings/pages`.
2. En **Build and deployment > Source**, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`, luego haz clic en **Save**.
4. En unos segundos tu web estará en vivo en:
   **`https://abelruizrodes-pixel.github.io/proofenjoy/`**
