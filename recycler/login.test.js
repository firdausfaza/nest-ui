import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as homePage from "@tests/pages/home.page";
import * as assert from "@helpers/asserts";
import { describe } from "mocha";
import * as login from "@tests/data/login.data";

// describe("Login", function() => {
//   beforeEach(() => {
//     route.visit(ROUTES.login);
//   });
//   it("Failed login when no username and password are empty ", () => {
//     element.fillField(loginPage.usernameField, "");
//     element.fillField(loginPage.passwordField, "");
//     element.clickOn(loginPage.loginButton);

//     assert.shouldVisible(loginPage.errorAlert);
//     assert.shouldContainText(
//       loginPage.errorAlert,
//       "Epic sadface: Username and password do not match any user in this service"
//     );
//   });
// });

describe("login test", function () {
  beforeEach(() => {
    route.visit(ROUTES.login);
  });

  it("failed login when no username and password are empty", () => {
    element.fillField(loginPage.test, " ");
    element.fillField(loginPage.passwordField, " ");
    element.click(loginPage.loginButton);
    assert.shouldVisible(loginPage.errorAlert);
    assert.shouldContainText(
      loginPage.errorAlert,
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  it("successful login when username and password are correct", () => {
    element.fillField(loginPage.test, login.VALID_LOGIN.username);
    element.fillField(loginPage.passwordField, login.VALID_LOGIN.password);
    element.click(loginPage.loginButton);
    assert.shouldContainText(homePage.title, "Products");
  });
});
