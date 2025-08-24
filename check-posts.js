import fs from 'fs';
import path from 'path';

// 读取博客内容目录
const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');

function readDirectory(dir, prefix = '') {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      readDirectory(fullPath, path.join(prefix, item));
    } else if (stat.isFile() && item.endsWith('.md')) {
      const slug = path.join(prefix, item.replace('.md', ''));
      console.log(slug);
    }
  }
}

console.log('All blog post slugs:');
readDirectory(blogDir);
