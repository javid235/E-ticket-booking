import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const componentName = process.argv[2]

if (!componentName) {
  console.error('Please provide a component name.')
  process.exit(1)
}

const componentDir = path.join(__dirname, 'src/Pages', componentName)
const jsxFile = path.join(componentDir, `${componentName}.jsx`)
const cssFile = path.join(componentDir, `${componentName}.css`)

const jsxContent = `import React from 'react';\nimport './${componentName}.css';\n\nconst ${componentName} = () => {\n  return <div className="${componentName}">Hello ${componentName}</div>;\n};\n\nexport default ${componentName};`

const cssContent = `.${componentName} {\n  /* Add styles here */\n}`

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true })
}

fs.writeFileSync(jsxFile, jsxContent)
fs.writeFileSync(cssFile, cssContent)

console.log(`Component ${componentName} created successfully!`)
