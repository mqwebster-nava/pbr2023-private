import fs from 'fs'
import path from 'path'
import fm from 'front-matter'

const reportsDirectory = path.join(process.cwd(), 'public/files/')

export function getPublicBenefitReportByYear(year) {
  // Get file names under /public-benefit-reports
  const fileNames = fs.readdirSync(reportsDirectory)
  const report = fileNames.find(fileName => fileName.includes(year))
  // Remove ".md" from file name to get id
  const id = report.replace(/\.md$/, '')
  // Read markdown file as string
  const fullPath = path.join(reportsDirectory, report)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // Use gray-matter to parse the post metadata section
  const matterResult = fm(fileContents)
  // Combine the data with the id
  return {
    id,
    ...matterResult.attributes
  }
}