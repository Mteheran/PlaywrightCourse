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

test("Login demo by css class, Id, data-test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // by id
  await page.locator("#user-name").fill("standard_user");

  // by attribute id
  await page.locator("id=password").fill("secret_sauce");

  // by data-test
  await page.locator("data-test=login-button").click();

  // by css class
  const productsTitle = await page.locator(".title");
  await expect(productsTitle).toHaveText("Products");
  await expect(productsTitle).toBeVisible();
});
