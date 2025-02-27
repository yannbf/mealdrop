#!/usr/bin/env zx

import { readFileSync, writeFile } from 'node:fs'
import { Octokit } from 'octokit'

const content = readFileSync('./src/components/Badge/Badge.tsx', 'utf8')

content.replace('background: ${color.badgeBackground};', 'background: ${color.badgeText};')

const updatedContent = content
  .replace('background: ${color.badgeBackground};', 'background: ${color.badgeText};')
  .replace('color: ${color.badgeText};', 'color: ${color.badgeBackground};')

writeFile('./src/components/Badge/Badge.tsx', updatedContent, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Badge.tsx updated')
  }
})
