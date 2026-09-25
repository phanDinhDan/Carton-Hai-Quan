import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, 'src', 'data')
const imagesDir = path.join(__dirname, 'public', 'images')

// Get all files in public/images
const availableImages = new Set(fs.readdirSync(imagesDir))

// Function to replace URLs in a file
function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  
  // Regex to match WordPress URLs
  const regex = /'https:\/\/baobihaiquan\.com\/wp-content\/uploads\/\d{4}\/\d{2}\/([^']+)'/g
  
  content = content.replace(regex, (match, filename) => {
    // URL decode filename just in case
    filename = decodeURIComponent(filename)
    if (availableImages.has(filename)) {
      return `'/images/${filename}'`
    } else {
      console.log(`Missing image: ${filename} in ${path.basename(filePath)}`)
      return `''` // Replace with empty string if missing
    }
  })
  
  fs.writeFileSync(filePath, content, 'utf8')
}

// Recursively process all .ts files
function walkDir(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath)
    } else if (fullPath.endsWith('.ts')) {
      replaceInFile(fullPath)
    }
  }
}

walkDir(dataDir)
console.log('Finished replacing images!')
