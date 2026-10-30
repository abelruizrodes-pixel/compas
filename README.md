# ConCompás — App de match de baile (salsa y bachata · Luxemburgo)

**ConCompás** es una aplicación web para encontrar pareja de práctica de salsa y bachata de tu nivel en Luxemburgo y reservar clases con instructores con el precio por hora visible.

> Estado: **prototipo funcional de validación**. Los perfiles son ficticios, no hay servidor ni cuentas reales y los pagos son simulados. Todo el estado se guarda en el navegador de cada visitante (localStorage).

## Qué hace

- **Idiomas**: interfaz en español, francés e inglés (selector en la bienvenida y en «Mi perfil», se guarda la elección) y campo «Idiomas que hablas» en el perfil (español, francés, inglés, alemán, portugués, italiano, luxemburgués, catalán), visible en las cartas como 🌐 para saber si podéis comunicaros.
- **Preparación para tiendas (App Store / Google Play)**: páginas públicas enlazadas desde «Mi perfil → Legal y soporte» — `privacidad.html` (política de privacidad), `terminos.html` (términos/EULA) y `eliminar-cuenta.html` (borrado sin la app, además del borrado total dentro de la app) —, botones «Reportar» y «Bloquear» en cada chat (revisión de reportes en <24 h), icono de tienda `icon-1024.png` (1024×1024 sin alfa) y gráfico destacado `feature-graphic.png` (1024×500). Sin rastreo ni permisos innecesarios: solo la foto, cuando el usuario la elige.
- **Sincronización con el calendario**: cada reserva activa lleva botones «Añadir al calendario» en «Mis reservas» — enlace directo a **Google Calendar** (evento prerrellenado con instructor, estilos, duración, total y zona) y descarga **`.ics`** para Apple Calendar / Outlook. La reserva guarda su fecha real (ISO) al crearse; las reservas antiguas sin fecha ISO la reconstruyen desde el día mostrado. Sin backend ni permisos de calendario: el evento lo crea el usuario en su propio calendario. Al cancelar, la app avisa de borrar también el evento del calendario.
- **Foto de perfil y normas de la comunidad**: el formulario permite subir una foto (vista previa, redimensionado a 512 px en el propio dispositivo y guardado con el perfil; sin foto se usan las iniciales), visible en «Mi perfil» y editable/quitable al editar. Para crear el perfil es obligatorio aceptar las **normas de la comunidad** (casilla en el formulario; las 8 normas —foto real con la cara visible, respeto, encuentros en lugares públicos, contenido apropiado, solo +18, sin spam, puntualidad con suspensión tras dos plantones y reporte— se leen en un modal enlazado desde el formulario y desde «Mi perfil»).
- **Iconografía propia**: cero emojis de sistema; set de iconos SVG de línea dibujados para la marca (nota para salsa, guitarra para bachata, pin, pareja de baile, medalla de instructor verificado, globo de idiomas, calendario, chat, brújula en «Descubrir» y el metrónomo como icono de los estados vacíos y del match).
- **Diseño**: el del prototipo — tipografía Manrope y logo de metrónomo — con la paleta «Atardecer caribeño»: degradado ámbar → coral → rosa (#FFB75E → #FF7E5F → #F43F5E) sobre fondo azul noche (#0A0F16) y acentos turquesa (#2EC4B6) en la compatibilidad; pastilla de compatibilidad por carta («N días en común · estilo en común»), saludo con el nombre en la cabecera, insignia de filtro activo con «Quitar los filtros» y pista de gesto en la primera carta.
- **App instalable (PWA)**: manifiesto web + service worker con caché; se instala desde cualquier navegador moderno (Chrome/Edge/Android: «Instalar app»; iPhone/Safari: Compartir → «Añadir a pantalla de inicio»), queda como icono de metrónomo en la pantalla de inicio, se abre a pantalla completa y funciona sin conexión tras la primera visita. Botón «Instalar la app» en la bienvenida.
- **Inscripción en dos roles**
  - *Bailador/a*: rol (leader/follower), nivel, estilos, disponibilidad y qué busca.
  - *Instructor/a*: estilos, tipo de música, niveles que enseña, disponibilidad y **precio por hora** visible en su carta.
- **Descubrir con match o descarte**: mazo deslizable (también con botones), filtros por tipo y estilo, botón de deshacer y límite de 20 likes al día.
- **Compatibilidad real**: la app marca «Compatible contigo» cuando coinciden estilo, disponibilidad, rol complementario y nivel (±1).
- **Match con propósito**: al coincidir, se propone práctica con día, hora y lugar público; el chat incluye respuestas simuladas y aviso de propuesta.
- **Reserva de clases con instructores**: día, hora y duración, con desglose transparente (total, comisión de ConCompás del 12 % y lo que recibe el instructor). Pago simulado.
- **Mis reservas**: confirmar, marcar como realizada, valorar al instructor y cancelar con confirmación.
- **Valoraciones** tras prácticas y clases, visibles en las cartas.
- **Mi perfil**: ver y editar el perfil, o borrar todos los datos locales y empezar de cero.

## Tecnología

- Un único `index.html` (HTML + CSS + JavaScript, sin dependencias ni build).
- Datos de demostración y estado en el propio navegador.
- Se publica con GitHub Pages mediante el workflow de `.github/workflows/deploy.yml` (push a `main`).

## Uso

Abre `index.html` en cualquier navegador moderno, o visita la versión publicada en GitHub Pages de este repositorio.

## Hoja de ruta (validación)

1. Validar en Luxemburgo: 10 instructores comprometidos y 100 bailadores en lista de espera.
2. Si valida: backend con cuentas reales, verificación de instructores, pagos reales y notificaciones.
