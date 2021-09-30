import {getPitchPageFactory} from "./factories/PitchPageFactory";
import {topNavigationBarMixin} from "./mixins/topNavigationBarMixin";
import {mix} from "../helpers/mix";
import BasePage from "./BasePage";

export default class BoardsPage extends BasePage{
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
  projectTitleLabelLocator = '.project_title';
  boardsTitleLabelLocator = '.boards_title';

  route = 'boards';

  constructor() {
    super();

    mix(this, [topNavigationBarMixin]);
  }

  createNewBoard(title) {
    this.setPostResponseAlias(this.route);

    cy.get(this.createNewBoardButtonLocator)
        .click();

    cy.get(this.boardTitleInputLocator)
        .type(title);

    cy.get(this.createItemButtonLocator)
        .click();

    this.waitForPostResponseAlias();

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

  getProjectTitle(){
    return cy.get(this.projectTitleLabelLocator)
        .invoke('text');
  }

  getBoardsTitle(){
    return this._getWEsText(this.boardsTitleLabelLocator);
  }

  openBoard(title) {
    cy.contains(title)
        .click();

    return getPitchPageFactory().getListsPage();
  }
}
