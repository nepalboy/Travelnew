import fs from 'fs';
import { journalEntries } from './polished_data.js';

const POSTS_FILE = 'src/data/posts.ts';

function mergePosts() {
    let content = fs.readFileSync(POSTS_FILE, 'utf-8');

    // Find the 'export const posts: Post[] = [' line and the closing '];'
    const startMarker = 'export const posts: Post[] = [';
    const endMarker = '];';

    const startIndex = content.indexOf(startMarker);
    const endIndex = content.lastIndexOf(endMarker);

    if (startIndex === -1 || endIndex === -1) {
        console.error('Could not find posts array in posts.ts');
        return;
    }

    // Extract existing posts content
    const existingPostsContent = content.substring(startIndex + startMarker.length, endIndex).trim();

    // Convert our new entries to TS objects
    const newPostsFormatted = journalEntries.map(entry => {
        return `    {
        id: '${entry.id}',
        title: '${entry.title.replace(/'/g, "\\'")}',
        date: '${entry.date}',
        content: \`${entry.content.replace(/`/g, "\\`")}\`,
        image: '${entry.image}',
        tags: ${JSON.stringify(entry.tags)},
        location: '${entry.location.replace(/'/g, "\\'")}',
        gallery: ${JSON.stringify(entry.gallery)}
    }`;
    }).join(',\n');

    const updatedContent = `${content.substring(0, startIndex + startMarker.length)}
${existingPostsContent ? existingPostsContent + ',' : ''}
${newPostsFormatted}
${content.substring(endIndex)}`;

    fs.writeFileSync(POSTS_FILE, updatedContent);
    console.log('Successfully merged journal entries into posts.ts');
}

mergePosts();
