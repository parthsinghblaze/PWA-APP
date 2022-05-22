let cacheData = "appV1"

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/index.html",
                "/ws",
                "/favicon.ico",
                "/user"
            ])
        })
    )
})

this.addEventListener("fetch", (e) => {
    if (!navigator.onLine) {
        e.respondWith(
            caches.match(e.request).then(res => {
                if (res) {
                    return res
                }
                let requestUrl = e.request.clone()
                return fetch(requestUrl)
            })
        )
    }
})

