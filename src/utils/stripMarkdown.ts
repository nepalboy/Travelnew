export const stripMarkdown = (md: string): string =>
    md
        .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
        .replace(/\[([^\]]*)\]\([^)]+\)/g, '$1')
        .replace(/[*_~`#>]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
