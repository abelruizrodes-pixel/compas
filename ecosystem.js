/**
 * ECOSISTEMA WEB DUAL & ACADEMIA: "Enjoy and Learn" & "Tienda Oficial"
 * Controladores de interactividad, multilingüe, carrito de compra,
 * filtros de instructores/catálogo y transiciones suaves.
 */

// ==========================================================================
// 1. DICCIONARIO MULTILINGÜE (ES / EN / FR)
// ==========================================================================
const TRANSLATIONS = {
  es: {
    nav_instructors: "Instructores",
    nav_classes: "Clases & Estilos",
    nav_events: "Eventos",
    nav_booking: "Reserva tu Clase",
    nav_shop: "Tienda Oficial 🛍️",
    bridge_to_dance: "Clases de Baile 💃",
    hero_kicker_dance: "Salsa Cubana · Bachata · Rumba · Bailoterapia",
    hero_title_dance: "Dos instructores individuales, <span class='accent'>dos metodologías únicas</span> para tu aprendizaje.",
    hero_lead_dance: "Clases 100% individuales en Luxemburgo con metodologías especializadas e independientes: aprende técnica cubana, ritmo y conducción con <strong>Yomiuri Ruiz</strong> (Salsa Cubana tradicional, Bachata y Rumba afrocubana) o bien estilo femenino, fluidez corporal y <strong>Bailoterapia enfocada a Salud y Bienestar</strong> con <strong>Ludivine Gomez</strong>. Cada instructor imparte sus propias clases.",
    hero_cta_instructors: "Conoce a los Instructores",
    instructors_kicker: "Equipo Pedagógico",
    instructors_title: "Elige tu instructor ideal",
    filter_all: "Todos",
    filter_classes: "Clases",
    filter_events: "Eventos",
    filter_workshops: "Talleres",
    modal_title: "Agenda tu Clase o Experiencia",
    modal_subtitle: "Selecciona tu instructor, modalidad y fecha. Te responderemos en menos de 24h.",
    modal_submit: "Confirmar Solicitud de Reserva",
    modal_success: "¡Gracias! Tu solicitud ha sido registrada. Te contactaremos muy pronto para confirmar.",
    footer_rights: "Todos los derechos reservados.",
    footer_privacy: "Política de Privacidad",
    footer_legal: "Aviso Legal"
  },
  en: {
    nav_instructors: "Instructors",
    nav_classes: "Classes & Styles",
    nav_events: "Events",
    nav_booking: "Book a Class",
    nav_shop: "Official Store 🛍️",
    bridge_to_dance: "Dance Classes 💃",
    hero_kicker_dance: "Cuban Salsa · Bachata · Rumba · Dance Therapy",
    hero_title_dance: "Two individual instructors, <span class='accent'>two unique methodologies</span> for your learning.",
    hero_lead_dance: "100% individual classes in Luxembourg with specialized, independent methodologies: learn Cuban technique, rhythm, and lead with <strong>Yomiuri Ruiz</strong> (traditional Cuban Salsa, Bachata & Afro-Cuban Rumba) or feminine styling, bodily flow, and <strong>Dance Therapy focused on Health & Wellness</strong> with <strong>Ludivine Gomez</strong>. Each instructor leads their own classes.",
    hero_cta_instructors: "Meet the Instructors",
    instructors_kicker: "Teaching Team",
    instructors_title: "Choose your ideal instructor",
    filter_all: "All",
    filter_classes: "Classes",
    filter_events: "Events",
    filter_workshops: "Workshops",
    modal_title: "Book Your Class or Session",
    modal_subtitle: "Select your preferred instructor, style and date. We will reply within 24 hours.",
    modal_submit: "Confirm Booking Request",
    modal_success: "Thank you! Your request has been recorded. We will contact you shortly to confirm.",
    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_legal: "Legal Notice"
  },
  fr: {
    nav_instructors: "Professeurs",
    nav_classes: "Cours & Styles",
    nav_events: "Événements",
    nav_booking: "Réserver un Cours",
    nav_shop: "Boutique Officielle 🛍️",
    bridge_to_dance: "Cours de Danse 💃",
    hero_kicker_dance: "Salsa Cubaine · Bachata · Rumba · Danse-Thérapie",
    hero_title_dance: "Deux professeurs individuels, <span class='accent'>deux méthodes uniques</span> pour votre progression.",
    hero_lead_dance: "Des cours 100% individuels au Luxembourg avec des méthodologies spécialisées et indépendantes : apprenez la technique cubaine, le rythme et le guidage avec <strong>Yomiuri Ruiz</strong> (Salsa Cubaine traditionnelle, Bachata et Rumba afro-cubaine) ou le style féminin, la fluidité corporelle et la <strong>Danse-thérapie axée sur la Santé et le Bien-être</strong> avec <strong>Ludivine Gomez</strong>. Chaque professeur dispense ses propres cours.",
    hero_cta_instructors: "Découvrir les Professeurs",
    instructors_kicker: "Équipe Pédagogique",
    instructors_title: "Choisissez votre professeur idéal",
    filter_all: "Tous",
    filter_classes: "Cours",
    filter_events: "Événements",
    filter_workshops: "Ateliers",
    modal_title: "Réservez votre Cours ou Atelier",
    modal_subtitle: "Sélectionnez votre professeur, discipline et date. Réponse sous 24h.",
    modal_submit: "Confirmer la Réservation",
    modal_success: "Merci ! Votre demande a été enregistrée. Nous vous contacterons très vite pour confirmer.",
    footer_rights: "Tous droits réservés.",
    footer_privacy: "Politique de Confidentialité",
    footer_legal: "Mentions Légales"
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
// 2. INICIALIZACIÓN GLOBAL
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Idioma
  applyLanguage(currentLang);

  // Dropdown selector de idioma
  initLanguageDropdown();

  // Header sticky scroll effect
  initHeaderScroll();

  // Menú hamburguesa móvil
  initMobileDrawer();

  // Modal de reserva con preselección de instructor y estilo
  initBookingModal();

  // Galería de eventos (filtros + parallax suave)
  initEventsGallery();

  // Filtro de instructores (Él / Ella / Ambos)
  initInstructorFilter();

  // Tienda Online: Carrito & Filtros de Catálogo
  initShop();

  // Transiciones fluidas entre páginas
  initBridgeTransitions();
});

// ==========================================================================
// 3. SELECTOR DE IDIOMA
// ==========================================================================
function initLanguageDropdown() {
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
}

// ==========================================================================
// 4. HEADER Y MENÚ MÓVIL
// ==========================================================================
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }
  }, { passive: true });
}

function initMobileDrawer() {
  const mobileToggle = document.getElementById("mobileToggleBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileToggle.innerHTML = isOpen ? "✕" : "☰";
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    mobileDrawer.querySelectorAll("a, button").forEach(elem => {
      elem.addEventListener("click", () => {
        // Si no es el botón del carrito móvil que abre el drawer del carrito
        if (elem.id !== "mobileOpenCartBtn") {
          mobileDrawer.classList.remove("open");
          mobileToggle.innerHTML = "☰";
          mobileToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
}

// ==========================================================================
// 5. FILTROS DE INSTRUCTORES (ÉL / ELLA / AMBOS)
// ==========================================================================
function initInstructorFilter() {
  const filterTabs = document.querySelectorAll("[data-instructor-filter]");
  const instructorCards = document.querySelectorAll(".instructor-card");

  if (!filterTabs.length || !instructorCards.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-instructor-filter");
      instructorCards.forEach(card => {
        const role = card.getAttribute("data-instructor");
        if (filter === "all" || role === filter) {
          card.style.display = "";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });
    });
  });
}

// ==========================================================================
// 6. MODAL DE RESERVA (CON PRESELECCIÓN DINÁMICA)
// ==========================================================================
function initBookingModal() {
  const backdrop = document.getElementById("bookingModalBackdrop");
  const closeBtn = document.getElementById("modalCloseBtn");
  const openButtons = document.querySelectorAll("[data-open-modal='booking']");
  const form = document.getElementById("bookingForm");
  const successMsg = document.getElementById("formSuccessMsg");
  const instructorSelect = document.getElementById("bookInstructor");
  const serviceSelect = document.getElementById("bookService");

  function openModal(preselectInstructor, preselectService) {
    if (backdrop) {
      if (preselectInstructor && instructorSelect) {
        instructorSelect.value = preselectInstructor;
      }
      if (preselectService && serviceSelect) {
        serviceSelect.value = preselectService;
      }

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
    const preInstructor = btn.getAttribute("data-preselect-instructor");
    const preService = btn.getAttribute("data-preselect-service");
    openModal(preInstructor, preService);
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
// 7. GALERÍA FLOTANTE (EVENTOS)
// ==========================================================================
function initEventsGallery() {
  const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
  const masonryItems = document.querySelectorAll(".masonry-item");

  if (!filterButtons.length || !masonryItems.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      masonryItems.forEach(item => {
        const categories = (item.getAttribute("data-category") || "").split(" ");
        if (filter === "all" || categories.includes(filter)) {
          item.style.display = "";
          item.style.opacity = "1";
        } else {
          item.style.display = "none";
          item.style.opacity = "0";
        }
      });
    });
  });

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
// 8. TIENDA ONLINE: CARRITO SLIDE-OVER & FILTROS DE CATÁLOGO
// ==========================================================================
function initShop() {
  // --- A. Filtros de catálogo en tienda.html ---
  const shopFilters = document.querySelectorAll("[data-shop-filter]");
  const productCards = document.querySelectorAll(".product-card[data-shop-category]");

  shopFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      shopFilters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-shop-filter");
      productCards.forEach(card => {
        const category = card.getAttribute("data-shop-category");
        if (filter === "all" || category === filter) {
          card.style.display = "";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });
    });
  });

  // Enlaces de navegación rápida de categorías
  document.querySelectorAll("[data-filter-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetCategory = link.getAttribute("data-filter-link");
      const matchingFilterBtn = document.querySelector(`[data-shop-filter="${targetCategory}"]`);
      if (matchingFilterBtn) {
        matchingFilterBtn.click();
      }
    });
  });

  // --- B. Gestión del Carrito (State en LocalStorage) ---
  const CART_KEY = "enjoy_shop_cart";
  let cart = [];
  try {
    const saved = localStorage.getItem(CART_KEY);
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  const drawerBackdrop = document.getElementById("cartDrawerBackdrop");
  const openCartBtn = document.getElementById("openCartBtn");
  const mobileOpenCartBtn = document.getElementById("mobileOpenCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotalPrice = document.getElementById("cartTotalPrice");
  const cartCountBadges = document.querySelectorAll("#cartCount, #mobileOpenCartBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
  }

  function openCartDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeCartDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  function renderCart() {
    // Calcular cantidad total de artículos y subtotal
    const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

    // Actualizar badges
    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = totalItems;

    if (mobileOpenCartBtn) {
      mobileOpenCartBtn.textContent = `Ver mi Carrito (${totalItems})`;
    }

    if (cartTotalPrice) {
      cartTotalPrice.textContent = `${totalPrice.toFixed(2)} €`;
    }

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); margin: 3rem auto;">
          <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛍️</p>
          <p style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">Tu carrito está vacío</p>
          <p style="font-size: 0.85rem;">Explora nuestra ropa de baile, accesorios de bailoterapia o bonos de clases.</p>
        </div>
      `;
      return;
    }

    cartItemsList.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.img || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80'}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span>${item.price.toFixed(2)} € × ${item.qty || 1} = ${(item.price * (item.qty || 1)).toFixed(2)} €</span>
        </div>
        <button class="cart-item-remove" data-remove-index="${idx}" aria-label="Eliminar producto">✕</button>
      </div>
    `).join("");

    // Asignar eventos de eliminación
    cartItemsList.querySelectorAll("[data-remove-index]").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.getAttribute("data-remove-index"), 10);
        if (!isNaN(index) && index >= 0 && index < cart.length) {
          cart.splice(index, 1);
          saveCart();
        }
      });
    });
  }

  // Event Listeners de apertura/cierre de carrito
  if (openCartBtn) openCartBtn.addEventListener("click", openCartDrawer);
  if (mobileOpenCartBtn) {
    mobileOpenCartBtn.addEventListener("click", () => {
      const mobileDrawer = document.getElementById("mobileDrawer");
      if (mobileDrawer) mobileDrawer.classList.remove("open");
      openCartDrawer();
    });
  }
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", (e) => {
      if (e.target === drawerBackdrop) closeCartDrawer();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawerBackdrop && drawerBackdrop.classList.contains("active")) {
      closeCartDrawer();
    }
  });

  // Botones "+ Añadir" en catálogo
  document.querySelectorAll("[data-add-to-cart]").forEach(btn => {
    btn.addEventListener("click", () => {
      try {
        const productData = JSON.parse(btn.getAttribute("data-add-to-cart"));
        const existingItem = cart.find(item => item.id === productData.id);
        if (existingItem) {
          existingItem.qty = (existingItem.qty || 1) + 1;
        } else {
          cart.push({ ...productData, qty: 1 });
        }
        saveCart();
        openCartDrawer();
      } catch (err) {
        console.error("Error al añadir producto al carrito:", err);
      }
    });
  });

  // Botón Checkout vía WhatsApp / Stripe
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Tu carrito está vacío. Añade algún producto antes de finalizar el pedido.");
        return;
      }

      const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
      const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

      const itemsText = cart
        .map(i => `• ${i.name} (x${i.qty || 1}) - ${(i.price * (i.qty || 1)).toFixed(2)}€`)
        .join("\n");

      const message = `¡Hola Enjoy & Learn! 👋 Quisiera realizar el siguiente pedido desde la web:\n\n${itemsText}\n\n*Total a pagar: ${totalPrice.toFixed(2)} € (TVA incl.)*\n\n¿Cómo podemos coordinar el pago y la entrega/activación?`;

      const whatsappUrl = `https://wa.me/352661000000?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  // Render inicial del carrito
  renderCart();
}

// ==========================================================================
// 9. CROSS-LINK "EL PUENTE" CON VIEW TRANSITIONS
// ==========================================================================
function initBridgeTransitions() {
  const bridgeBtns = document.querySelectorAll(".bridge-button");
  bridgeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const targetUrl = btn.getAttribute("href");
      if (!targetUrl || targetUrl.startsWith("#")) return;

      if (document.startViewTransition) {
        e.preventDefault();
        document.startViewTransition(async () => {
          window.location.href = targetUrl;
        });
      }
    });
  });
}
