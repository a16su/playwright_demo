import { expect } from "@playwright/test";
import { myTest } from "./conftest";


myTest('test A',async ({page}) => {
    const resp = await page.goto('https://httpbin.org/cookies')
    const cookies = await resp?.json()
    // expect { cookies: { age: '18' } }
    expect(cookies.cookies.age).toEqual('18')
})
