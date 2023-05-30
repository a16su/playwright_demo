import {defineConfig} from '@playwright/test'


export default defineConfig({
    use: {
        headless: false,
    },
    projects: [
        {
            name: "debug",
            testDir: "tests"
        }
    ]
})