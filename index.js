import fs from 'fs/promises';
import { minifyHTMLLiterals } from 'minify-html-literals';

const input = await fs.readFile(new URL('./render.js', import.meta.url), 'utf8');

console.log('INPUT\n\n', input, '\n\n');

try {
  const result = minifyHTMLLiterals(input, { fileName: 'render.js' });
  console.log('OUTPUT\n\n', result.code);
} catch(error) {
  console.log('ERROR: ', error.message);
  console.error(error);
}



