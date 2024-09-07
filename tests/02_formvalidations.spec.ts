// import { expect, test } from "@playwright/test";

// test.skip("Automating Form Submissions", async ({ page }) => {
//   // Navigate to the TodoMVC page
//   await page.goto("https://demo.playwright.dev/todomvc/");

//   // Add the first todo item 'Prasanth'
//   const newTodo = page.locator('input[placeholder="What needs to be done?"]');
//   await newTodo.fill('Prasanth');
//   await newTodo.press('Enter');
  
//   // Add the second todo item 'chebrolu'
//   await newTodo.fill('chebrolu');
//   await newTodo.press('Enter');

//   // Wait to ensure both todos are added (you can adjust the time or remove this in actual test)
//   await page.waitForTimeout(2000);

//   // Get the first and second todo items
//   const firstTodo = page.locator('.view label').nth(0); // Label for the first todo
//   const secondTodo = page.locator('.view label').nth(1); // Label for the second todo
  
//   // Mark the first todo as completed (check the checkbox for the first item)
//   await page.locator('.toggle').nth(0).check(); 
//   await page.waitForTimeout(2000); // Pause for demo purposes

//   // Assertions: Check the first todo has class 'completed' and the second one does not
//   await expect(firstTodo).toHaveText('Prasanth');
//   await expect(secondTodo).toHaveText('chebrolu');
//   await expect(page.locator('.todo-list li').nth(0)).toHaveClass(/completed/); // First todo should be completed
//   await expect(page.locator('.todo-list li').nth(1)).not.toHaveClass(/completed/); // Second todo should not be completed
// });

