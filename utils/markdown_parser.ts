/*
! NO LONGER USED

This was a way to parse markdown files for the Public benefit and DE&I reports content.

I've since moved those into contentful so they aren't stored as markdown files.

Temporarily keeping this in case it's useful in the future
*/

import fs from "fs";
import path from "path";
import fm from "front-matter";

export function getMarkdownByFilename(folder, file) {
  const reportsDirectory = path.join(process.cwd(), `content/${folder}/`);
  const fileNames = fs.readdirSync(reportsDirectory);
  const report = fileNames.find((fileName) => fileName.includes(file));
  // Remove ".md" from file name to get id
  const id = report.replace(/\.md$/, "");
  // Read markdown file as string
  const fullPath = path.join(reportsDirectory, report);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // Use gray-matter to parse the post metadata section
  const matterResult = fm(fileContents);
  // Combine the data with the id
  return {
    id,
    ...Object.assign({}, matterResult.attributes),
    body: matterResult.body,
  };
}
