// আপনার সমস্ত API Routes (app.get, app.post ইত্যাদি) এর নিচে এটি যোগ করুন...

// =======================================================
// RENDER SETUP: Frontend (index.html) সার্ভ করার জন্য
// =======================================================
const path = require('path');
app.use(express.static(path.join(__dirname, '/')));

// যখন কেউ বেস URL-এ আসবে, তখন index.html দেখাবে
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ভার্সেল এক্সপোর্ট (ভার্সেলে ডিপ্লয় করলে এটি কাজ করবে)
module.exports = app;

// লোকাল বা রেন্ডারে রান করার জন্য
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    const PORT = config.PORT || 5000;
    app.listen(PORT, () => { console.log(`🚀 Server running on http://localhost:${PORT}`); });
}
