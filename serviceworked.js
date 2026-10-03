const CACHE_NAME = "coffee-pwa-v1";

const ARCHIVOS_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./css/style.css",
    "./js/app.js",
    "./detalle.html",
    "./css/detalle.css",
        "./js/detalle.js",  

    "./imagenes/coffe1.png",
    "./imagenes/coffe2.png",
    "./imagenes/coffe3.png",
    "./imagenes/coffe4.png",
    "./imagenes/coffe5.png",
    "./imagenes/coffe6.png",
    "./imagenes/coffe7.png",
    "./imagenes/coffe8.png",
    "./imagenes/coffe9.png",
    "./imagenes/coffe10.png",

    "./imagenes/icons/icon-72x72.png",
    "./imagenes/icons/icon-96x96.png",
    "./imagenes/icons/icon-128x128.png",
    "./imagenes/icons/icon-144x144.png",
    "./imagenes/icons/icon-152x152.png",
    "./imagenes/icons/icon-192x192.png",
    "./imagenes/icons/icon-384x384.png",
    "./imagenes/icons/icon-512x512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ARCHIVOS_CACHE);
            })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((respuesta) => {
                if (respuesta) {
                    return respuesta;
                }
                return fetch(event.request);
            })
    );
});

