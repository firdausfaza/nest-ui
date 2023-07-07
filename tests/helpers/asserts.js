export function shouldVisible(selector) {
  return cy.get(selector).should("be.visible");
}

export function shouldContainText(selector, ...args) {
  return cy.get(selector).should("contain.text", ...args);
}

export function shouldContain(selector, ...args) {
  return cy.get(selector).should("contain", ...args);
}
