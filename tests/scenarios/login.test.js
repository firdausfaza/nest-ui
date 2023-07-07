import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as homePage from "@tests/pages/home.page";
import * as assert from "@helpers/asserts";
import { describe } from "mocha";
import * as login from "@tests/data/login.data";
import { accountName } from "../pages/login.page";

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
    route.visit(ROUTES.home);
  });

  it("it ensure user can login properly", () => {
    element.click(homePage.loginButton);
    element.clickOption(loginPage.dropDownName, "Harry Potter");
    assert.shouldVisible(loginPage.loginButton);

    element.click(loginPage.loginButton);

    assert.shouldContainText(accountName, "Harry Potter");
  });
});
