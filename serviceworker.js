const CACHE_NAME = "coffee-pwa-v2";

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
            .then((cache) => cache.addAll(ARCHIVOS_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) =>
                Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                )
            )
            .then(() => self.clients.claim())
    );
});

// Network First para documentos y archivos de navegación
// Cache First para imágenes, CSS, JavaScript e iconos

self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const url = new URL(request.url);

    if (url.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then((respuesta) => {
                    if (respuesta.ok) {
                        const copia = respuesta.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => cache.put(request, copia));

                    }

                    return respuesta;
                })
                .catch(async () => {
                    const respuestaCache = await caches.match(request);

                    if (respuestaCache) {
                        return respuestaCache;
                    }

                    const paginaInicio = await caches.match("./index.html");

                    if (paginaInicio) {
                        return paginaInicio;
                    }

                    return new Response("No hay conexión y la página no está disponible.", {
                        status: 503,
                        headers: {
                            "Content-Type": "text/plain; charset=utf-8"
                        }
                    });
                })
        );

        return;
    }

    event.respondWith(
        caches.match(request)
            .then((respuestaCache) => {
                if (respuestaCache) {
                    return respuestaCache;
                }

                return fetch(request).then((respuesta) => {
                    if (respuesta.ok) {
                        const copia = respuesta.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => cache.put(request, copia));
                    }

                    return respuesta;
                });
            })
    );
});
//verificar este codigo que primero ten ga un network first y luego un cache first si no lo tiene generar uno nuevo 
