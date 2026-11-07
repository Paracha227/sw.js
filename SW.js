self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// รับคำสั่งส่งแจ้งเตือนเข้าศูนย์การแจ้งเตือนมือถือ
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SCHEDULE_NOTIF') {
        const { title, body, delay } = event.data;
        setTimeout(() => {
            self.registration.showNotification(title, {
                body: body,
                icon: 'https://cdn-icons-png.flaticon.com/512/3112/3112933.png',
                vibrate: [200, 100, 200],
                badge: 'https://cdn-icons-png.flaticon.com/512/3112/3112933.png'
            });
        }, delay);
    }
});
