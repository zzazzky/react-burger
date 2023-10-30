import { testResponce, baseUrl, ApiUrl } from './cypress-test-data';

const ingredientContainerData = '[data-cy=ingredients]';
const constructorData = '[data-cy=constructor]';
const testBunName = 'Флюоресцентная булка R2-D3';

const modalCloseButtonData = '#react-modals button[aria-label=закрыть]';
const overlayData = '[data-cy=overlay]';
const ingredientModalTitle = 'Детали ингредиента';
const modalId = '#react-modals';

const orderButtonContainerData = '[data-cy=order-button-container]';
const orderButtonText = 'Оформить заказ';

const emailInput = 'input[name="email"]';
const passwordInput = 'input[name="password"]';
const testEmail = 'v555@m.ru';
const testPassword = '1234567890';

function requestIngredients() {
  cy.intercept('GET', `${ApiUrl}/ingredients`, testResponce);
  cy.viewport(1300, 800);
  cy.visit(baseUrl);
}

describe('ingredients dragging works correctly', function () {
  beforeEach(requestIngredients);

  it('should drag bun', function () {
    cy.get(ingredientContainerData).contains(testBunName).trigger('dragstart');
    cy.get(constructorData).trigger('drop');
    cy.get('[data-cy=constructor-bun-1]').contains(testBunName).should('exist');
    cy.get('[data-cy=constructor-bun-2]').contains(testBunName).should('exist');
  });

  it('should drag ingredient', function () {
    cy.get(ingredientContainerData)
      .contains('Соус Spicy-X')
      .trigger('dragstart');
    cy.get(constructorData).trigger('drop');
    cy.get('[data-cy=constructor-ingredients]')
      .filter(':contains(Соус Spicy-X)')
      .should('have.length', 2);
  });
});

describe('ingredient modal work correctly', function () {
  beforeEach(requestIngredients);

  it('should open ingredient modal', function () {
    cy.contains(ingredientModalTitle).should('not.exist');
    cy.get(ingredientContainerData).contains(testBunName).click();
    cy.contains(ingredientModalTitle).should('exist');
    cy.get(modalId).contains(testBunName).should('exist');
  });

  it('should close ingredient modal on button click', function () {
    cy.contains(ingredientModalTitle).should('not.exist');
    cy.get(ingredientContainerData).contains(testBunName).click();
    cy.contains(ingredientModalTitle).should('exist');
    cy.get(modalCloseButtonData).click();
    cy.contains(ingredientModalTitle).should('not.exist');
  });

  it('should close ingredient modal on overlay click', function () {
    cy.contains(ingredientModalTitle).should('not.exist');
    cy.get(ingredientContainerData).contains(testBunName).click();
    cy.contains(ingredientModalTitle).should('exist');
    cy.get(overlayData).click({ force: true });
    cy.contains(ingredientModalTitle).should('not.exist');
  });
});

describe('order modal work correctly', function () {
  beforeEach(requestIngredients);

  it('should open order modal', function () {
    cy.get(modalId).as('modal');
    cy.get('@modal').children().should('not.exist');
    cy.get(orderButtonContainerData).contains(orderButtonText).click();
    cy.get('form').as('form');
    cy.get('@form')
      .get(emailInput)
      .type(testEmail)
      .should('have.value', testEmail);
    cy.get('@form')
      .get(passwordInput)
      .type(testPassword)
      .should('have.value', testPassword);
    cy.get('@form').submit();
    cy.get('@modal').children().should('not.exist');
    cy.get(orderButtonContainerData).contains(orderButtonText).click();
    cy.get('@modal').children().should('exist');
  });

  it('should close order modal on button click', function () {
    cy.get(modalId).as('modal');
    cy.get('@modal').children().should('not.exist');
    cy.get(orderButtonContainerData).contains(orderButtonText).click();
    cy.get('form').as('form');
    cy.get('@form')
      .get(emailInput)
      .type(testEmail)
      .should('have.value', testEmail);
    cy.get('@form')
      .get(passwordInput)
      .type(testPassword)
      .should('have.value', testPassword);
    cy.get('@form').submit();
    cy.get('@modal').children().should('not.exist');
    cy.get(orderButtonContainerData).contains(orderButtonText).click();
    cy.get(modalCloseButtonData).click();
    cy.get('@modal').children().should('not.exist');
  });

  it('should close order modal on overlay click', function () {
    cy.get(modalId).as('modal');
    cy.get('@modal').children().should('not.exist');
    cy.get(orderButtonContainerData).contains(orderButtonText).click();
    cy.get('form').as('form');
    cy.get('@form')
      .get(emailInput)
      .type(testEmail)
      .should('have.value', testEmail);
    cy.get('@form')
      .get(passwordInput)
      .type(testPassword)
      .should('have.value', testPassword);
    cy.get('@form').submit();
    cy.get('@modal').children().should('not.exist');
    cy.get(orderButtonContainerData).contains(orderButtonText).click();
    cy.get(overlayData).click({ force: true });
    cy.get('@modal').children().should('not.exist');
  });
});
