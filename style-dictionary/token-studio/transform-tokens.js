const fs = require('fs');
const path = require('path');

const sourcePath = './style-dictionary/token-studio/tokens.json';
const outputDir = './style-dictionary/token-studio';

const tokenGroups = {
  Light: [
    'colors/Light',
    'tailwind/Light',
    'typography/XL',
    'typography/LG',
    'typography/MD',
    'typography/SM',
    'heading/paragraph/HeadingsMontserrat',
    'heading/paragraph/ParagraphsRoboto',
    'dimensions/XL'
  ],
  Dark: [
    'colors/Dark',
    'tailwind/Dark',
    'typography/XL',
    'typography/LG',
    'typography/MD',
    'typography/SM',
    'heading/paragraph/HeadingsMontserrat',
    'heading/paragraph/ParagraphsRoboto',
    'dimensions/XL'
  ]
};

function cleanTokens(obj, removeParentKey) {
  if (typeof obj !== 'object') return obj;
  const cleaned = {};

  for (const key in obj) {
    const value = obj[key];

    if (
      removeParentKey &&
      (key.toLowerCase() === 'colors' || key.toLowerCase() === 'typography' || key.toLowerCase() === 'dimensions') &&
      typeof value === 'object'
    ) {
      Object.assign(cleaned, cleanTokens(value, false));
    } else if (typeof value === 'object' && value.value !== undefined) {
      cleaned[key.toLowerCase()] = value;
    } else if (typeof value === 'object') {
      cleaned[key.toLowerCase()] = cleanTokens(value, removeParentKey);
    } else {
      cleaned[key.toLowerCase()] = value;
    }
  }

  return cleaned;
}

function processTokens(theme, keys, tokens) {
  const output = {};

  keys.forEach((key) => {
    const tokenValue = tokens[key];
    if (!tokenValue) return;

    if (key === 'dimensions/XL') {
      const cleaned = cleanTokens(tokenValue, true);
      output.dimensions = {};
      for (const subKey in cleaned) {
        output.dimensions[subKey] = cleaned[subKey];
      }
      return;
    }

    const cleanKey = key
      .replace(`colors/${theme}`, 'colors')
      .replace(`tailwind/${theme}`, 'tailwind')
      .replace(/^typography\//, 'typography.')
      .replace(/^heading\/paragraph\//, 'typography.');

    const parts = cleanKey.split(/[./]/);
    let current = output;

    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i].toLowerCase();
      if (!current[part]) current[part] = {};
      current = current[part];
    }

    current[parts[parts.length - 1].toLowerCase()] = cleanTokens(tokenValue, true);
  });

  return output;
}

const tokens = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
fs.mkdirSync(outputDir, { recursive: true });

Object.entries(tokenGroups).forEach(([theme, keys]) => {
  const processedTokens = processTokens(theme, keys, tokens);
  const filename = `${theme}-transformed-tokens.json`;
  const outputPath = path.join(outputDir, filename);
  fs.writeFileSync(outputPath, JSON.stringify(processedTokens, null, 2), 'utf8');
  console.log(`✅ ${theme} tokens transformed and saved to: ${outputPath}`);
});
