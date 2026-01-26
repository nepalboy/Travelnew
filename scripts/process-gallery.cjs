const fs = require('fs');
const path = require('path');

const sourceDir = "C:\\Users\\10373132\\Downloads\\Aconcagua-3-001\\Aconcagua";
const destDir = "C:\\Users\\10373132\\source\\repos\\TravelNew\\public\\images\\gallery";

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Itinerary Mapping (Dates in Argentina time approx)
const itinerary = [
    { start: '2025-12-28', end: '2025-12-28', loc: 'Mendoza [Arrive]' },
    { start: '2025-12-29', end: '2025-12-29', loc: 'Los Penitentes' },
    { start: '2025-12-30', end: '2025-12-30', loc: 'Pampa de Leñas' },
    { start: '2025-12-31', end: '2025-12-31', loc: 'Casa de Piedra' },
    { start: '2026-01-01', end: '2026-01-04', loc: 'Plaza Argentina Base Camp' },
    { start: '2026-01-05', end: '2026-01-06', loc: 'Camp 1' },
    { start: '2026-01-07', end: '2026-01-09', loc: 'Camp 2 (Guanacos)' },
    { start: '2026-01-10', end: '2026-01-11', loc: 'Summit Day / Cólera' },
    { start: '2026-01-12', end: '2026-01-12', loc: 'Plaza de Mulas' },
    { start: '2026-01-13', end: '2026-01-16', loc: 'Mendoza [Return]' },
];

function getLocation(dateStr) {
    for (const item of itinerary) {
        if (dateStr >= item.start && dateStr <= item.end) return item.loc;
    }
    return "Aconcagua Expedition";
}

const files = fs.readdirSync(sourceDir);
const gallery = [];

files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    // Skip HEIC for now as browsers don't support it
    if (!['.jpg', '.jpeg', '.png', '.mp4', '.mov'].includes(ext)) return;

    const stats = fs.statSync(path.join(sourceDir, file));
    const date = new Date(stats.mtime);
    const dateStr = date.toISOString().split('T')[0];
    const location = getLocation(dateStr);

    const safeName = `gallery_${file.replace(/[^a-z0-9.]/gi, '_').toLowerCase()}`;
    const destPath = path.join(destDir, safeName);

    fs.copyFileSync(path.join(sourceDir, file), destPath);

    gallery.push({
        url: `/Travelnew/images/gallery/${safeName}`,
        type: ['.mp4', '.mov'].includes(ext) ? 'video' : 'image',
        location: location,
        date: dateStr,
        caption: `${location} - ${date.toLocaleDateString()}`
    });
});

// Sort by date then name
gallery.sort((a, b) => a.date.localeCompare(b.date) || a.url.localeCompare(b.url));

console.log(JSON.stringify(gallery, null, 2));
