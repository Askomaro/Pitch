import {getPitchPageFactory} from "./factories/PitchPageFactory";
import {mix} from "../helpers/mix";
import {topNavigationBarMixin} from "./mixins/topNavigationBarMixin";
import BasePage from "./BasePage";

export default class ListsPage extends BasePage{
  createNewListInputLocator = '.listsCont_createItem > .createItem_link > .createItem_title';
  listTitleInputLocator = '.createItem_input';
  createItemButtonLocator = '.createItem_submit';
  createListCloseButtonLocator = '.createItem_close';
  archiveListButtonLocator = '.i-archieve';
  createNewTaskButtonLocator = '.list_create-task-cont > .createItem > .createItem_link > .createItem_title';
  createNewTaskTitleInputLocator = '.createItem_textarea';
  archiveBoardButtonLocator = '.board_archieve > .tt-source';
  boardTitleLabelLocator = '.board_title';
  projectBackLinkLocator = '.board_project-link';
  listsTitleLabelLocator = '.list_title';
  tasksTitleLabelLocator = '.taskItem_title';

  constructor() {
    super();

    mix(this, [topNavigationBarMixin]);
  }

  createNewList(title) {
    this.setPostResponseAlias('lists');

    cy.get(this.createNewListInputLocator)
        .click({force: true});

    cy.get(this.listTitleInputLocator)
        .type(title);

    cy.get(this.createItemButtonLocator)
        .click();

    this.waitForPostResponseAlias();

    return this;
  }

  archiveList(title) {
    cy.contains(title)
        .parent()
        .find(this.archiveListButtonLocator);

    return this;
  }

  createNewTask(listTitle, taskTitle) {
    this.setPostResponseAlias('tasks');

    cy.contains(listTitle)
        .parent().parent()
        .find(this.createNewTaskButtonLocator)
        .click();

    cy.get(this.createNewTaskTitleInputLocator)
        .type(taskTitle);

    cy.get(this.createItemButtonLocator)
        .click();

    this.waitForPostResponseAlias();

    return this;
  }

  seeArchivedLists() {
    cy.contains('See archived lists')
        .click();

    return this;
  }

  seeActiveLists() {
    cy.contains('See active lists')
        .click();

    return this;
  }

  seeArchivedTasks() {
    cy.contains('See archived tasks')
        .click();

    return this;
  }

  seeActiveTasks() {
    cy.contains('See active tasks')
        .click();

    return this;
  }

  archiveBoard() {
    cy.get(this.archiveBoardButtonLocator);

    return this;
  }

  editTask(title) {
    cy.contains(title)
        .parent()
        .click();

    return getPitchPageFactory().getTaskPage();
  }

  getBoardTitle(){
    return cy.get(this.boardTitleLabelLocator)
        .invoke('text');
  }

  backToBoardsPage(){
    cy.get(this.projectBackLinkLocator)
        .click();

    return getPitchPageFactory().getBoardsPage()
  }

  getListsTitle(){
    return this._getWEsText(this.listsTitleLabelLocator);
  }

  getTasksListTitle(listTitle){
    const parentWE = cy.contains(listTitle).parent().parent();

    return this._getWEsText(this.tasksTitleLabelLocator, parentWE);
  }
}
