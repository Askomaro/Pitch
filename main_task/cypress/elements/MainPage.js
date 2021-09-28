export default class MainPage {
  createNewProjectButtonLocator = '.projects_controls > .createItem > .createItem_link > .createItem_title';
  projectTitleInputLocator = '.createItem_input';
  createItemButtonLocator = '.createItem_submit';
  createItemCloseButtonLocator = '.createItem_close';

  createNewProject(title) {
    cy.get(this.createNewProjectButtonLocator)
        .click();

    cy.get(this.projectTitleInputLocator)
        .type(title);

    cy.get(this.createItemButtonLocator)
        .click();

    return this;
  }
}
