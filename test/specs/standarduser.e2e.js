import loginPage from "../pageobjects/loginPage.js";
import userHomePage from "../pageobjects/homePageuser.js";
import addToCart from "../pageobjects/addToCart.js";

describe('go to login user', () => {
    beforeAll(() => {
        browser.setWindowSize(1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it('success process', async () => {
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginForm("standard_user", "secret_sauce");
        await loginPage.loginButtonClick();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory.html');
    });

    it('Buy', async () => {
        await expect(addToCart.addButton).toBeDisplayed();
        await addToCart.addButtonClick();
        await expect(addToCart.toCart).toBeDisplayed();
        await addToCart.toCartClick();
        await expect(addToCart.checkout).toBeDisplayed();
        await addToCart.checkoutClick();
        await addToCart.checkoutForm("Barbara", "Millan", "2000");
        await expect(addToCart.continue).toBeDisplayed();
        await addToCart.continueClick();
        await expect(addToCart.finish).toBeDisplayed();
        await addToCart.finish.click();
    });

    it('navbar user', async () => {
        await expect(userHomePage.productsText).toBeDisplayed();
        await expect(userHomePage.buttonBurguer).toBeDisplayed();
        await userHomePage.buttonBurguerClick();
        await expect(userHomePage.logOutButton).toBeDisplayed();
        await userHomePage.logOutButtonClick();
    });
});
