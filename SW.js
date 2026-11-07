self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// ฟังคำสั่งส่งแจ้งเตือนแม้แอปจะปิดหรือล็อกหน้าจออยู่
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SCHEDULE_NOTIF') {
        const { title, body, tag } = event.data;
        self.registration.showNotification(title, {
            body: body,
            icon: 'https://cdn-icons-png.flaticon.com/512/3112/3112933.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/3112/3112933.png',
            vibrate: [300, 100, 300],
            tag: tag || 'task-notif',
            renotify: true,
            requireInteraction: true
        });
    }
});
