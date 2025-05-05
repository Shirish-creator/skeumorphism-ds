const fs = require('fs');

// Read the tokens from the input JSON file
const tokensFilePath = './style-dictionary/token-studio/tokens.json'; // Input file
const outputFilePath = './style-dictionary/token-studio/transformed-tokens.json'; // Output file

// Read tokens from the file
const tokens = JSON.parse(fs.readFileSync(tokensFilePath, 'utf8'));

// Function to recursively clean, flatten, and lowercase token structure
function cleanTokens(obj) {
  let cleanedTokens = {};

  Object.keys(obj).forEach(key => {
    let newKey = key.replace(/\/Mode 1$/, '').toLowerCase(); // Convert key to lowercase and remove "/Mode 1"
    let value = obj[key];

    if (typeof value === 'object' && !Array.isArray(value)) {
      // Flatten structure if the child key is the same as the parent
      if (Object.keys(value).length === 1 && Object.keys(value)[0].toLowerCase() === newKey) {
        cleanedTokens[newKey] = cleanTokens(value[Object.keys(value)[0]]);
      } else {
        cleanedTokens[newKey] = cleanTokens(value);
      }
    } else {
      // Assign the value directly if it's not an object
      cleanedTokens[newKey] = value;
    }
  });

  return cleanedTokens;
}

// Apply transformation
const cleanedTokens = cleanTokens(tokens);

// Write the transformed tokens to a new JSON file
fs.writeFileSync(outputFilePath, JSON.stringify(cleanedTokens, null, 2), 'utf8');

console.log('Tokens have been successfully transformed and saved to', outputFilePath);