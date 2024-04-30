import fs from 'fs';
import path from 'path';

const srcDirectory = path.join(process.cwd(), 'src');
const testFilePath = path.join(srcDirectory, 'storybook.playwright.tsx');

let imports = '';
let tests = '';

function camelCase(input) {
    return input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

function extractNamedExports(content) {
    const exportRegex = /export (const|function|class|let|var) (\w+)/g;
    const matches = [];
    let match;
    while ((match = exportRegex.exec(content)) !== null) {
        matches.push(match[2]);
    }
    return matches;
}

function prepareImportAndTest(filePath) {
    const relativePath = path.relative(srcDirectory, filePath);
    const fileName = path.basename(filePath, '.portable.ts');
    const importName = camelCase(fileName.replace('.stories', '')) + 'Stories';
    const importStatement = `import ${importName} from './${relativePath.replace(/\\/g, '/').replace(/\.[^/.]+$/, "")}';\n`;

    const componentFilePath = filePath.replace('.portable.ts', '.tsx');
    const componentContent = fs.readFileSync(componentFilePath, 'utf-8');
    const namedExports = extractNamedExports(componentContent);

    const componentName = fileName.replace('.stories', '');
    let testCase = `test.describe('renders ${componentName} stories', async () => {\n`;
    namedExports.forEach(exp => {
        testCase += `  test('${exp}', async ({ mount }) => {\n` +
                    `    await mount(<${importName}.${exp} />)\n` +
                    `  })\n`;
    });
    testCase += `})\n\n`;

    imports += importStatement;
    tests += testCase;
}

function traverseDirectories(directory) {
    fs.readdirSync(directory, { withFileTypes: true }).forEach(dirent => {
        const fullPath = path.join(directory, dirent.name);
        if (dirent.isDirectory()) {
            traverseDirectories(fullPath);
        } else if (dirent.isFile() && dirent.name.endsWith('.stories.portable.ts')) {
            prepareImportAndTest(fullPath);
        }
    });
}

function generateTests() {
    fs.writeFileSync(testFilePath, `// @ts-expect-error missing types\nimport { createTest } from '@storybook/react/experimental-playwright';\nimport { test as base } from '@playwright/experimental-ct-react17';\n\n` + imports + `\n\nconst test = createTest(base);\n\n` + tests, 'utf-8');
}

traverseDirectories(srcDirectory);
generateTests();
