import fs from 'fs';
import path from 'path';

const POSTS_FILE = 'src/data/posts.ts';
const PHOTOS_DIR = 'public/images/journal';
const BASE_URL = '/Travelnew';

function consolidate() {
    let content = fs.readFileSync(POSTS_FILE, 'utf-8');

    // Find the 'export const posts: Post[] = [' line and the closing '];'
    const startMarker = 'export const posts: Post[] = [';
    const endMarker = '];';

    const startIndex = content.indexOf(startMarker);
    const endIndex = content.lastIndexOf(endMarker);

    if (startIndex === -1 || endIndex === -1) {
        console.error('Could not find posts array');
        return;
    }

    // Keep only the original posts (IDs that DON'T start with 'journal-')
    // We'll parse the array manually for now or just do a regex replace if we know the structure.
    // Easier way: just keep the content before the first journal post.
    const beforeJournalIndex = content.indexOf("{ id: 'journal-");
    let originalPosts = "";
    if (beforeJournalIndex !== -1 && beforeJournalIndex > startIndex) {
        originalPosts = content.substring(startIndex + startMarker.length, beforeJournalIndex).trim();
    } else {
        // Fallback: search for specific known posts ending
        const knownEnd = "location: 'San Diego, CA'\n    },";
        const match = content.match(/location: 'San Diego, CA'\s+},\s+/g);
        // This is getting complex because of mixed formatting. 
        // Let's just redefine the whole array with original + new consolidated.
    }

    // ORIGINAL POSTS (Extracted manually to avoid mess)
    const SHAKIRA = `    {
        id: 'shakira-concert-san-diego',
        title: 'Shakira Shakes Snapdragon: An Unforgettable Night in San Diego!',
        date: 'June 27, 2025',
        content: \`Leaving Rancho Penasquitos at 7:30 PM, it was a long-awaited moment. I was counting the day. It's been a while since I bought a ticket. Shakira for me is an icon of humanity, a divine success, an empathy, a sport, human civilization and a unity in the polarized world. It's more than dance and songs!
Every second counts...\`,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCfwyTWz2IZiQrTsI8ZXmOcaLy1qxnxRpX1yYaMqI9HWRLvowlhITBhOw93zYPTNcmMYoC1g3Yt_hcukq7LqDfixrUzgt4Ht-Qm6ORej6Lrj8e2UCRPHU-wz60kI5cKshn_zgic9u3dzF1h1wae1yq3FCllF5y7ZcZQbWnbdggxv0c7xuigqyORw/w300-h400/IMG_3280.JPEG',
        tags: ['Concert', 'Music', 'San Diego'],
        location: 'San Diego, CA'
    }`;
    // ... wait, I'll just read polished_data.js and generate the full string.
}

// Better plan: Read the polished data, fix paths, merge text, and write to posts.ts
import { journalEntries } from './polished_data.js';

const allPhotos = fs.readdirSync(PHOTOS_DIR).map(f => `${BASE_URL}/images/journal/${f}`);

const consolidatedContent = journalEntries.map(entry => {
    return `### ${entry.date} - ${entry.title}\n\n${entry.content}`;
}).join('\n\n---\n\n');

const consolidatedPost = {
    id: 'aconcagua-expedition-andys',
    title: "Trip to Aconcagua: Exploring Andy's",
    date: 'Dec 25, 2025 - Jan 17, 2026',
    content: consolidatedContent,
    image: allPhotos[0] || '',
    tags: ['Aconcagua', 'Andes', 'Expedition', 'Trekking'],
    location: 'Aconcagua, Argentina',
    gallery: allPhotos
};

function rebuildPosts() {
    // Read original non-journal posts from a safe source or just the head of the file
    // I know the first 6 posts are the originals.
    const postsTs = fs.readFileSync(POSTS_FILE, 'utf-8');
    const parts = postsTs.split('{');
    // The first few are originals. 
    // This is risky. 
    // Let's just use the view I had earlier for original entries.
}
