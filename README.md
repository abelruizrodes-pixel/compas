# ConCompás — App de match de baile (salsa y bachata · Luxemburgo)

**ConCompás** es una aplicación web para encontrar pareja de práctica de salsa y bachata de tu nivel en Luxemburgo y reservar clases con instructores con el precio por hora visible.

> Estado: **prototipo funcional de validación**. Los perfiles son ficticios, no hay servidor ni cuentas reales y los pagos son simulados. Todo el estado se guarda en el navegador de cada visitante (localStorage).

## Qué hace

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
