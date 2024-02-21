const {test, expect} = require('@playwright/test')

test("Login demo", async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();

    await page.screenshot({path: 'saucedemoportal.png', fullPage: true});

    await page.getByText("Swag Labs").screenshot({path: "titlescreenshot.png"});

    await expect(await page.getByText("Products")).toBeVisible();
});

test("Login demo by css class and Id", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
  const productsTitle = await page.locator(".title");
  await expect(productsTitle).toHaveText("Products");
  await expect(productsTitle).toBeVisible();
});
