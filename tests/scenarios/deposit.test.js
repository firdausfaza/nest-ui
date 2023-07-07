import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as homePage from "@tests/pages/home.page";
import * as assert from "@helpers/asserts";
import { describe } from "mocha";
import { accountName } from "../pages/login.page";
import * as depositPage from "@tests/pages/deposit-customer.page";
import * as accountPage from "@tests/pages/account-customer.page";
import * as depositData from "@tests/data/deposit.data";

describe("Ensure user can deposit  ", function () {
  beforeEach(() => {
    route.visit(ROUTES.home);
  });
  it("A user must can deposit money in dollar currency  ", () => {
    // login as a customer
    element.click(homePage.loginButton);
    element.clickOption(loginPage.dropDownName, "Harry Potter");
    assert.shouldVisible(loginPage.loginButton);
    element.click(loginPage.loginButton);
    assert.shouldContainText(accountName, "Harry Potter");
    // validation currency
    assert.shouldContainText(accountPage.valueOfCurrency, "Dollar");
    // deposit money
    element.click(accountPage.depositButton);
    element.click(depositPage.amount);
    element.fillField(depositPage.amount, depositData.DEPOSIT_AMOUNT.dollar);
    element.click(depositPage.depositButton);
    // validastion message successfull
    assert.shouldContainText(depositPage.depositMessage, "Deposit Successful");
  });
  it("A user must can deposit money in pound currency  ", () => {
    // login as a customer
    element.click(homePage.loginButton);
    element.clickOption(loginPage.dropDownName, "Harry Potter");
    assert.shouldVisible(loginPage.loginButton);
    element.click(loginPage.loginButton);
    assert.shouldContainText(accountName, "Harry Potter");
    // change currency
    element.clickOption(accountPage.accountSelect, "1005");
    // validation currency
    assert.shouldContainText(accountPage.valueOfCurrency, "Pound");

    // deposit money
    element.click(accountPage.depositButton);
    element.click(depositPage.amount);
    element.fillField(depositPage.amount, depositData.DEPOSIT_AMOUNT.pound);
    element.click(depositPage.depositButton);
    // validastion message successfull
    assert.shouldContainText(depositPage.depositMessage, "Deposit Successful");
  });
  it("A user must can deposit money in rupee currency  ", () => {
    // login as a customer
    element.click(homePage.loginButton);
    element.clickOption(loginPage.dropDownName, "Harry Potter");
    assert.shouldVisible(loginPage.loginButton);
    element.click(loginPage.loginButton);
    assert.shouldContainText(accountName, "Harry Potter");
    // change currency
    element.clickOption(accountPage.accountSelect, "1006");
    // validation currency
    assert.shouldContainText(accountPage.valueOfCurrency, "Rupee");

    // deposit money
    element.click(accountPage.depositButton);

    element.click(depositPage.amount);
    element.fillField(depositPage.amount, depositData.DEPOSIT_AMOUNT.rupee);
    element.click(depositPage.depositButton);
    // validastion message successfull
    assert.shouldContainText(depositPage.depositMessage, "Deposit Successful");
  });
});
