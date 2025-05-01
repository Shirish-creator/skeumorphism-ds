const fs = require('fs');

// Function to clean up the CSS content by removing comments and existing :root selectors
const cleanVariables = (css) => {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '')  // Remove comments
        .replace(/:root\s*\{/, '')  // Remove the starting :root { part
        .replace(/\}/, '')  // Remove the closing } of the :root block
        .replace(/\n\s*\n/g, '\n')  // Remove empty lines
        .trim();
}

// Load the dark and light CSS files
const darkVariables = fs.readFileSync('./src/style-dictionary-dist/dark-variables.css', 'utf-8');
const lightVariables = fs.readFileSync('./src/style-dictionary-dist/light-variables.css', 'utf-8');

// Clean the dark and light variables content (remove the :root selectors)
const cleanedDarkVariables = cleanVariables(darkVariables);
const cleanedLightVariables = cleanVariables(lightVariables);

// Merge both into one file, keeping :root for light and :root.dark for dark mode
const mergedVariables = `
:root {
    ${cleanedLightVariables}
}

:root.dark {
    ${cleanedDarkVariables}
}
`;

// Output the merged content into a new file
fs.writeFileSync('./src/style-dictionary-dist/merged-variables.css', mergedVariables, 'utf-8');

console.log('Merged CSS file created as merged-variables.css');
