const fs = require('fs');
const glob = ['index.html'];

glob.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('href="#"') || line.includes("href='#'")) {
      console.log(`${file}:${idx + 1}: ${line.trim()}`);
    }
  });
});
