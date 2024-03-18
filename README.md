# Repro for issue 6868

## Versions

firebase-tools: v13.5.1
node: v20.9.0
platform: Windows 10

## Steps to repro

1. Run `npm i` to install dependencies
1. Run `firebase init hosting --project <project_id>`
   - Select all default
1. Run `firebase deploy`
1. Vist "project_id.web.app"
   - Image is not loaded
