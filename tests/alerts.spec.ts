import { expect, test } from '@playwright/test';

//Simple Alert
test.skip("handling simpleAlert", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept();
    });

    await page.locator("button:has-text('Click Me')").nth(0).click();
});

// Confirm alert
test.only("handling confirmAlert", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    });

    await page.locator("button:has-text('Click Me')").nth(1).click();
    await expect(page.locator("#confirm-demo")).toContainText("Cancel");
});

// //prompt alert

test("handling promptAlert", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept("Prasanth");
    });
    await page.waitForTimeout(5000)
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("Prasanth");
    await page.waitForTimeout(5000)
});

//Modal Alert

test("Modal alert", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
    await page.waitForTimeout(5000);
})




