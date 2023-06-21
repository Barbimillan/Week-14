
import loginPage from "../pageobjects/loginPage.js";
import userHomePage from "../pageobjects/homePageuser.js"

describe ('go to login user', () =>{
    beforeAll('open browser',()=>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('succes process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("standard_user", "secret_sauce");
        await loginPage.loginButtonClick();
    });

    it ('navbar user', async () =>{
        await expect (userHomePage.productsText).toBeDisplayed();
        await expect (userHomePage.buttonBurguer).toBeDisplayed();
        await userHomePage.logOutButtonClick();
    });
});
