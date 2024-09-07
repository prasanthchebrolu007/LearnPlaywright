import { test } from "@playwright/test";

test.only("handling dropdown", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    
    // Select by label
    await page.selectOption("#select-demo", { label: "Tuesday" });
    await page.waitForTimeout(2000)

    // OR Select by value
    await page.selectOption("#select-demo", { value: "Friday" });
    await page.waitForTimeout(2000)

    // OR Select by index
    await page.selectOption("#select-demo", { index: 5 });
    await page.waitForTimeout(2000)

    // Multiselect dropdown
    await page.selectOption("#multi-select", [
        {
            label: "Texas"
        }, {
            index: 2
        }, {
            value: "Washington"
            
        }
        
    ])
    await page.waitForTimeout(2000)
})



