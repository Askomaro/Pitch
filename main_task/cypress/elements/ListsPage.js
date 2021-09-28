export default class ListsPage {
  createNewListInputLocator = '.createItem_title';
  listTitleInputLocator = '.createItem_input';
  createListButtonLocator = '.createItem_submit';
  createListCloseButtonLocator = '.createItem_close';
  editProjectButtonLocator = '.project_openForm';
  editProjectTitleInputLocator = '.project_input';
  editProjectDescInputLocator = '.project_textarea';
  archiveProjectButtonLocator = '.tt-source';
  saveEditProjectButtonLocator = '.project_form-submit';
  cancelEditProjectButtonLocator = '.project_close-form';

  createNewList(title) {
    cy.get(this.createNewListInputLocator)
        .click();

    cy.get(this.listTitleInputLocator)
        .type(title);

    cy.get(this.createListButtonLocator)
        .click();

    return this;
  }

  archiveList(title=null, desc=null, archive=false) {
    cy.get(this.editProjectButtonLocator)
        .click();

    if(title){
      cy.get(this.editProjectTitleInputLocator)
          .type(title);
    }
    if(desc){
      cy.get(this.editProjectDescInputLocator)
          .type(desc);
    }
    if(archive){
      cy.get(this.archiveProjectButtonLocator)
          .click();
    }

    cy.get(this.saveEditProjectButtonLocator)
        .click();

    return this;
  }
}
