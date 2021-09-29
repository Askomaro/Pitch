import {getPitchPageFactory} from "./factories/PitchPageFactory";
import {topNavigationBarMixin} from "./mixins/topNavigationBarMixin";
import {mix} from "../helpers/mix";

export default class BoardsPage {
  createNewBoardButtonLocator = '.createItem_link';
  boardTitleInputLocator = '.createItem_input';
  createItemButtonLocator = '.createItem_submit';
  createItemCloseButtonLocator = '.createItem_close';
  editProjectButtonLocator = '.project_openForm';
  editProjectTitleInputLocator = '.project_input';
  editProjectDescInputLocator = '.project_textarea';
  archiveProjectButtonLocator = '.tt-source';
  saveEditProjectButtonLocator = '.project_form-submit';
  cancelEditProjectButtonLocator = '.project_close-form';

  constructor() {
    mix(this, [topNavigationBarMixin]);
  }

  createNewBoard(title) {
    cy.get(this.createNewBoardButtonLocator)
        .click();

    cy.get(this.boardTitleInputLocator)
        .type(title);

    cy.get(this.createItemButtonLocator)
        .click();

    return getPitchPageFactory().getListsPage();
  }

  editProject(title=null, desc=null, archive=false) {
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

  seeArchivedBoards() {
    cy.contains('See archived boards')
        .click();

    return this;
  }

  seeActiveBoards() {
    cy.contains('See active boards')
        .click();

    return this;
  }
}
