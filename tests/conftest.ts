import { test as base } from '@playwright/test'
const myTest = base

myTest.use({
    storageState: './auth.json'
})

export {myTest}