/**
 * ECOSISTEMA WEB DUAL: "Enjoy and Learn" & "Salud y Bienestar"
 * Script de interacción, accesibilidad, multilingüe y transiciones de vista
 */

// ==========================================================================
// 1. DICCIONARIO MULTILINGÜE (ES / EN / FR)
// ==========================================================================
const TRANSLATIONS = {
  es: {
    nav_history: "Historia",
    nav_events: "Eventos",
    nav_booking: "Reserva",
    bridge_to_enjoy: "Enjoy and Learn",
    bridge_to_bienestar: "Salud y Bienestar",
    hero_kicker_enjoy: "Salsa · Eventos · Producción Audiovisual",
    hero_kicker_bienestar: "Mindfulness · Yoga · Nutrición Holística",
    hero_title_enjoy: "Ritmo, pasión y <span class='accent'>experiencias</span> que transforman.",
    hero_title_bienestar: "Equilibrio, calma y <span class='accent'>conexión</span> profunda con tu ser.",
    hero_lead_enjoy: "Aprende salsa cubana y ritmos latinos con metodología inmersiva. Eventos exclusivos y producción audiovisual de alto nivel en Luxemburgo y Europa.",
    hero_lead_bienestar: "Espacio dedicado a restaurar tu armonía interior a través del movimiento consciente, la meditación y la alimentación regenerativa.",
    hero_cta_booking: "Reservar Experiencia",
    hero_cta_events: "Ver Galería de Eventos",
    about_kicker: "Quiénes Somos",
    about_title_enjoy: "Un método vibrante donde la técnica se convierte en arte",
    about_title_bienestar: "Un santuario nórdico para reconectar con tu calma natural",
    filter_all: "Todos",
    filter_classes: "Clases",
    filter_events: "Eventos",
    filter_workshops: "Talleres",
    modal_title: "Agenda tu Experiencia",
    modal_subtitle: "Selecciona el servicio y fecha deseada. Responderemos en menos de 24 horas.",
    modal_service_label: "Servicio de interés",
    modal_date_label: "Fecha preferida",
    modal_name_label: "Nombre completo",
    modal_email_label: "Correo electrónico",
    modal_notes_label: "Mensaje o necesidades especiales",
    modal_submit: "Confirmar Solicitud de Reserva",
    modal_success: "¡Gracias! Tu solicitud ha sido registrada. Te contactaremos pronto.",
    footer_rights: "Todos los derechos reservados.",
    footer_privacy: "Política de Privacidad",
    footer_legal: "Aviso Legal",
    footer_cookies: "Cookies"
  },
  en: {
    nav_history: "About Us",
    nav_events: "Events",
    nav_booking: "Book Now",
    bridge_to_enjoy: "Enjoy and Learn",
    bridge_to_bienestar: "Health & Wellness",
    hero_kicker_enjoy: "Salsa · Events · Audiovisual Production",
    hero_kicker_bienestar: "Mindfulness · Yoga · Holistic Nutrition",
    hero_title_enjoy: "Rhythm, passion, and <span class='accent'>experiences</span> that inspire.",
    hero_title_bienestar: "Balance, calm, and <span class='accent'>deep connection</span> with yourself.",
    hero_lead_enjoy: "Learn Cuban salsa and Latin rhythms with an immersive methodology. Exclusive events and premier audiovisual production in Luxembourg and Europe.",
    hero_lead_bienestar: "A mindful sanctuary dedicated to restoring your inner harmony through conscious movement, meditation, and regenerative nutrition.",
    hero_cta_booking: "Book Experience",
    hero_cta_events: "View Events Gallery",
    about_kicker: "About Us",
    about_title_enjoy: "A vibrant method where technique transforms into living art",
    about_title_bienestar: "A Nordic sanctuary designed to reconnect with your natural stillness",
    filter_all: "All",
    filter_classes: "Classes",
    filter_events: "Events",
    filter_workshops: "Workshops",
    modal_title: "Book Your Experience",
    modal_subtitle: "Choose your desired service and preferred date. We will reply within 24 hours.",
    modal_service_label: "Service of interest",
    modal_date_label: "Preferred date",
    modal_name_label: "Full name",
    modal_email_label: "Email address",
    modal_notes_label: "Message or special requests",
    modal_submit: "Confirm Booking Request",
    modal_success: "Thank you! Your request has been recorded. We will contact you shortly.",
    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_legal: "Legal Notice",
    footer_cookies: "Cookies"
  },
  fr: {
    nav_history: "Histoire",
    nav_events: "Événements",
    nav_booking: "Réserver",
    bridge_to_enjoy: "Enjoy and Learn",
    bridge_to_bienestar: "Santé et Bien-être",
    hero_kicker_enjoy: "Salsa · Événements · Production Audiovisuelle",
    hero_kicker_bienestar: "Pleine Conscience · Yoga · Nutrition Holistique",
    hero_title_enjoy: "Rythme, passion et <span class='accent'>expériences</span> transformatrices.",
    hero_title_bienestar: "Équilibre, calme et <span class='accent'>connexion</span> profonde avec soi.",
    hero_lead_enjoy: "Apprenez la salsa cubaine et les rythmes latins grâce à une pédagogie immersive. Événements exclusifs et production audiovisuelle au Luxembourg et en Europe.",
    hero_lead_bienestar: "Un sanctuaire dédié à la restauration de votre harmonie intérieure à travers le mouvement conscient, la méditation et l'alimentation régénératrice.",
    hero_cta_booking: "Réserver une Séance",
    hero_cta_events: "Galerie Événements",
    about_kicker: "À Propos",
    about_title_enjoy: "Une méthode vibrante où la technique devient un art vivant",
    about_title_bienestar: "Un havre nordique pour renouer avec votre sérénité naturelle",
    filter_all: "Tous",
    filter_classes: "Cours",
    filter_events: "Événements",
    filter_workshops: "Ateliers",
    modal_title: "Réservez votre Expérience",
    modal_subtitle: "Sélectionnez le service et la date souhaitée. Nous vous répondrons sous 24h.",
    modal_service_label: "Prestation souhaitée",
    modal_date_label: "Date préférée",
    modal_name_label: "Nom complet",
    modal_email_label: "Adresse e-mail",
    modal_notes_label: "Message ou besoins spécifiques",
    modal_submit: "Confirmer la Réservation",
    modal_success: "Merci ! Votre demande a été enregistrée. Nous vous contacterons très vite.",
    footer_rights: "Tous droits réservés.",
    footer_privacy: "Politique de Confidentialité",
    footer_legal: "Mentions Légales",
    footer_cookies: "Cookies"
  }
};

let currentLang = localStorage.getItem("ecosystem_lang") || "es";

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("ecosystem_lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  const langLabel = document.getElementById("currentLangLabel");
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  document.querySelectorAll(".lang-opt").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

// ==========================================================================
// 2. INICIALIZACIÓN GLOBAL CUANDO EL DOM ESTÁ LISTO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar idioma
  applyLanguage(currentLang);

  // Selector multilingüe dropdown
  const langBtn = document.getElementById("langToggleBtn");
  const langDropdown = document.getElementById("langDropdown");

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("open");
    });

    document.querySelectorAll(".lang-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.getAttribute("data-lang"));
        langDropdown.classList.remove("open");
      });
    });

    document.addEventListener("click", () => {
      langDropdown.classList.remove("open");
    });
  }

  // Header Scrolled State
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }
  }, { passive: true });

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById("mobileToggleBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileToggle.innerHTML = isOpen ? "✕" : "☰";
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileToggle.innerHTML = "☰";
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Modal de Reserva
  initBookingModal();

  // Galería Flotante Interactiva (Filtros y Parallax suave)
  initEventsGallery();

  // Transición suave entre páginas hermanas con View Transitions API
  initBridgeTransitions();
});

// ==========================================================================
// 3. CONTROLADOR DEL MODAL DE RESERVA
// ==========================================================================
function initBookingModal() {
  const backdrop = document.getElementById("bookingModalBackdrop");
  const closeBtn = document.getElementById("modalCloseBtn");
  const openButtons = document.querySelectorAll("[data-open-modal='booking']");
  const form = document.getElementById("bookingForm");
  const successMsg = document.getElementById("formSuccessMsg");

  function openModal() {
    if (backdrop) {
      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
      const firstInput = backdrop.querySelector("input, select");
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
    }
  }

  function closeModal() {
    if (backdrop) {
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
      if (form) form.reset();
      if (successMsg) successMsg.style.display = "none";
    }
  }

  openButtons.forEach(btn => btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop && backdrop.classList.contains("active")) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (successMsg) {
        successMsg.style.display = "block";
      }
      setTimeout(() => {
        closeModal();
      }, 2500);
    });
  }
}

// ==========================================================================
// 4. GALERÍA FLOTANTE (FILTROS Y EFECTO PARALLAX SUAVE AL SCROLL)
// ==========================================================================
function initEventsGallery() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const masonryItems = document.querySelectorAll(".masonry-item");

  // Filtrado suave
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      masonryItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.display = "";
          item.style.opacity = "1";
        } else {
          item.style.display = "none";
          item.style.opacity = "0";
        }
      });
    });
  });

  // Parallax suave al scroll para elementos asimétricos
  if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          masonryItems.forEach((item, index) => {
            const speed = (index % 3 + 1) * 0.04;
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const offset = (window.innerHeight - rect.top) * speed;
              const img = item.querySelector(".masonry-media");
              if (img) {
                img.style.transform = `translateY(${offset * 0.3}px) scale(1.04)`;
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}

// ==========================================================================
// 5. BOTÓN CROSS-LINK ("EL PUENTE" CON VIEW TRANSITIONS)
// ==========================================================================
function initBridgeTransitions() {
  const bridgeBtn = document.getElementById("bridgeBtn");
  if (!bridgeBtn) return;

  bridgeBtn.addEventListener("click", (e) => {
    const targetUrl = bridgeBtn.getAttribute("href");
    if (!targetUrl || targetUrl.startsWith("#")) return;

    // Si el navegador soporta View Transitions para navegación cliente
    if (document.startViewTransition) {
      e.preventDefault();
      document.startViewTransition(async () => {
        window.location.href = targetUrl;
      });
    }
    // Si no soporta startViewTransition, la navegación estándar @view-transition o nativa prosigue sin interferencias.
  });
}
