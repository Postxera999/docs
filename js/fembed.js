const fs = require('fs');
const path = './docs/yourfile.md';
let content = fs.readFileSync(path, 'utf-8');

content = content.replace(
  /(https:\/\/www\.figma\.com\/design\/[^\s]+)/g,
  (_, url) => `<iframe allowfullscreen allow="autoplay; fullscreen; clipboard-write" width="700" height="500" src="https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}"></iframe>`
);

fs.writeFileSync(path, content, 'utf-8');
