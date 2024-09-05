import {test , expect, Locator } from '@playwright/test';
import { timeStamp } from 'console';


test("idSelector", async({page}) => {
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

//create a locator and then perform action on it
//id selector 
const fName:Locator = page.locator ('id=input-firstname');
const lName:Locator = page.locator ('id=input-lastname');

await fName.fill("Prasanth");
await lName.fill("chebrolu");
await page.waitForTimeout(2000);

//classname

const logo:Locator = page.locator('.img-responsive');
const logoExist = await logo.isEnabled();
console.log (logoExist);




//text selector
const header:Locator = page.locator('text=Register Account');
const headerExist = await header.isEnabled();
console.log(headerExist);
await page.waitForTimeout(5000);

const continuebtn:Locator = page.locator('text=Continue');
const continuebtnExist = await continuebtn.isEnabled();
console.log(continuebtnExist);

//CSS

const email:Locator = page.locator('input#input-email')
const phone:Locator = page.locator('css=input[name="telephone"]')
const privacycheckbox:Locator = page.locator('input[type="checkbox"]')

await email.fill("pchebroluqa@gmail.com");
await phone.fill("7205002139");
await privacycheckbox.click();
await page.waitForTimeout(3000);





//xpath

test("Test Name", async ({ page }) => {
    
});





});