import {getPitchPageFactory} from "./factories/PitchPageFactory";
import {mix} from "../helpers/mix";
import {topNavigationBarMixin} from "./mixins/topNavigationBarMixin";

export default class ListsPage {
  createNewListInputLocator = '.listsCont_createItem > .createItem_link > .createItem_title';
  listTitleInputLocator = '.createItem_input';
  createItemButtonLocator = '.createItem_submit';
  createListCloseButtonLocator = '.createItem_close';
  archiveListButtonLocator = '.i-archieve';
  createNewTaskButtonLocator = '.list_create-task-cont > .createItem > .createItem_link > .createItem_title';
  createNewTaskTitleInputLocator = '.createItem_textarea';
  archiveBoardButtonLocator = '.board_archieve > .tt-source';

  constructor() {
    mix(this, [topNavigationBarMixin]);
  }

  createNewList(title) {
    cy.get(this.createNewListInputLocator)
        .click();

    cy.get(this.listTitleInputLocator)
        .type(title);

    cy.get(this.createItemButtonLocator)
        .click();

    return this;
  }

  archiveList(title) {
    cy.contains(title)
        .parent()
        .find(this.archiveListButtonLocator);

    return this;
  }

  createNewTask(title) {
    cy.get(this.createNewTaskButtonLocator)
        .click();

    cy.get(this.createNewTaskTitleInputLocator)
        .type(title);

    cy.get(this.createItemButtonLocator)
        .click();

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
        .click();

    return getPitchPageFactory().getTaskPage();
  }
}
