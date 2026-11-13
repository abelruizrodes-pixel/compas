/* ConCompás — service worker: caché de la app para instalación y uso sin conexión */
const CACHE = "concompas-v35";

/* ===== Push (FCM): avisos con la app cerrada ===== */
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyD4RcM0pW-cpa1zYpe15KcQtn3ZFTzCWHI",
  authDomain: "concompas-be3a8.firebaseapp.com",
  projectId: "concompas-be3a8",
  storageBucket: "concompas-be3a8.firebasestorage.app",
  messagingSenderId: "532704288714",
  appId: "1:532704288714:web:9099e12cb012a93bc43933"
});
const _fcm = firebase.messaging();
_fcm.onBackgroundMessage((payload) => {
  const n = (payload && payload.notification) || {};
  const d = (payload && payload.data) || {};
  const options = {
    body: n.body || "",
    icon: "icon-192.png",
    badge: "icon-192.png",
    tag: d.tag || "concompas",
    renotify: true,
    data: { pair: d.pair || "" }
  };
  return self.registration.showNotification(n.title || "ConCompás", options);
});


const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.png",
  "./favicon.ico",
  "./icon-192.png",
  "./icon-512.png",
  "./maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    // Recursos propios: primero la caché, y se refresca en segundo plano
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const network = fetch(event.request).then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return response;
        }).catch(() => cached);
        return cached || network;
      })
    );
  } else {
    // Recursos externos (p. ej. la fuente Manrope): red primero, caché si no hay conexión
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response && (response.ok || response.type === "opaque")) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
  }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const pair = (event.notification.data && event.notification.data.pair) || "";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ("focus" in c) {
          if (pair) { try { c.postMessage({ type: "open-chat", pair: pair }); } catch (e) {} }
          return c.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow("./");
    })
  );
});
