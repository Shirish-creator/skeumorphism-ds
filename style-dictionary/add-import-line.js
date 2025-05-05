// style-dictionary/add-import-line.js
const fs = require('fs');
const path = './src/style-dictionary-dist/styles.css';

const importLine = "@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');";

if (fs.existsSync(path)) {
  const original = fs.readFileSync(path, 'utf8');
  if (!original.includes(importLine)) {
    const updated = `${importLine}\n\n${original}`;
    fs.writeFileSync(path, updated, 'utf8');
    console.log('✅ Import line added to styles.css');
  } else {
    console.log('ℹ️ Import line already exists in styles.css');
  }
} else {
  console.error('❌ styles.css not found. Run the style dictionary build first.');
}
