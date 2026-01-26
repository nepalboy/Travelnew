import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// CONFIGURATION
const JOURNAL_FILE = 'C:\\Users\\10373132\\Downloads\\temp_dayone_analysis\\Journal.txt';
const PHOTOS_DIR = 'C:\\Users\\10373132\\Downloads\\temp_dayone_analysis\\photos';
const OUTPUT_DIR = 'C:\\Users\\10373132\\source\\repos\\TravelNew\\public\\images\\journal';
const TEMP_JSON = 'C:\\Users\\10373132\\source\\repos\\TravelNew\\scripts\\temp_entries.json';

// Ensure output directory exists (recursive)
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Ensure script directory exists
const scriptDir = path.dirname(TEMP_JSON);
if (!fs.existsSync(scriptDir)) {
    fs.mkdirSync(scriptDir, { recursive: true });
}

function parseJournal(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Split by "Date:" keyword, keeping the delimiter
    // The provided file has entries starting with tab+Date:
    const rawEntries = content.split(/^\s*Date:\s*/m).filter(Boolean);

    const parsedEntries = [];

    // Photo files cache: Name -> Date
    const photoFiles = fs.readdirSync(PHOTOS_DIR).map(name => {
        const fullPath = path.join(PHOTOS_DIR, name);
        const stats = fs.statSync(fullPath);
        return {
            name: name,
            birthtime: stats.birthtime, // Creation time
            mtime: stats.mtime // Last modified time (sometimes more reliable for exports)
        };
    });

    console.log(`Found ${photoFiles.length} photos.`);

    for (const raw of rawEntries) {
        const lines = raw.split('\n');
        
        let dateStr = '';
        let location = '';
        let weather = '';
        let author = '';
        let bodyLines = [];
        let parsingHeader = true;

        // Header parsing logic
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            if (i === 0) {
                // First line is the date because we split by "Date:"
                // format: "December 25, 2025 at 4:28:25 PM CST"
                // The split consumes "Date:", so line is just the value
                dateStr = line;
                continue;
            }

            if (parsingHeader) {
                if (line.startsWith('Weather:\t')) {
                    weather = line.substring('Weather:\t'.length).trim();
                } else if (line.startsWith('Location:\t')) {
                    location = line.substring('Location:\t'.length).trim();
                } else if (line.startsWith('Author:\t')) {
                    author = line.substring('Author:\t'.length).trim();
                } else if (line === '') {
                    // Empty line usually separates header from body
                    // But typically there is a block of empty lines
                    // We switch to body mode on first non-header line?
                    // Let's assume body starts after first blank line block?
                    // Actually, Day One text export usually has headers then a blank line then body.
                } else {
                    parsingHeader = false;
                    bodyLines.push(line);
                }
            } else {
                bodyLines.push(line);
            }
        }

        // Clean up body (remove leading/trailing empty lines)
        const content = bodyLines.join('\n').trim();

        if (!dateStr || !content) continue;

        // Parse Date Object
        // Date format: "December 25, 2025 at 4:28:25 PM CST"
        // JS Date constructor parses this well usually, removing timezone might be safer if custom
        const cleanDateStr = dateStr.replace(/ at /i, ' ').replace(/\s[A-Z]{3,5}$/, ''); // Strip timezone abbr if needed
        const entryDate = new Date(cleanDateStr);

        if (isNaN(entryDate.getTime())) {
            console.error(`Invalid date: ${dateStr}`);
            continue;
        }

        // MATCH PHOTOS
        // Match photos created on the same day (naive matching) or within window?
        // Let's try matching same day first.
        const matchedPhotos = photoFiles.filter(photo => {
             // Check if same day, month, year
             // Using local time might be tricky if timezones differ, but let's compare simple date parts
             const pDate = photo.mtime; // Use mtime as it proved reliable in agent investigation
             return pDate.getFullYear() === entryDate.getFullYear() &&
                    pDate.getMonth() === entryDate.getMonth() &&
                    pDate.getDate() === entryDate.getDate();
        });

        const gallery = [];
        
        // Copy matched photos
        matchedPhotos.forEach(p => {
             const src = path.join(PHOTOS_DIR, p.name);
             const destName = `journal_${p.name}`; // Prefix to avoid collisions
             const dest = path.join(OUTPUT_DIR, destName);
             
             if (!fs.existsSync(dest)) {
                 fs.copyFileSync(src, dest);
             }
             gallery.push(`/images/journal/${destName}`);
        });

        // Determine main image (first of gallery)
        const image = gallery.length > 0 ? gallery[0] : '';

        // Generate ID
        const id = `journal-${entryDate.toISOString().split('T')[0]}-${location.split(',')[0].replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;

        // Generate Title (First sentence or location)
        const title = `Journal: ${location || 'Entry'}`;

        parsedEntries.push({
            id,
            title,
            date: dateStr, // Keep original string for display
            content,
            image,
            location,
            tags: ['Journal', 'Day One'],
            gallery
        });
    }

    return parsedEntries;
}

const entries = parseJournal(JOURNAL_FILE);
console.log(`Parsed ${entries.length} entries.`);
fs.writeFileSync(TEMP_JSON, JSON.stringify(entries, null, 2));
console.log(`Saved to ${TEMP_JSON}`);
