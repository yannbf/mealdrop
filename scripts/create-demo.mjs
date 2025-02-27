#!/usr/bin/env zx

import { readFileSync, writeFile } from 'node:fs'

const content = readFileSync('./src/components/Badge/Badge.tsx', 'utf8')

const updatedContent = content
  .replace('background: ${color.badgeBackground};', 'background: ${color.bannerBackground};')
  .replace('color: ${color.badgeText};', 'color: ${color.bannerText};')

writeFile('./src/components/Badge/Badge.tsx', updatedContent, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Badge.tsx updated')
  }
})
