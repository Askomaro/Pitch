import {getPitchPageFactory} from "./factories/PitchPageFactory";
import {mix} from "../helpers/mix";
import {topNavigationBarMixin} from "./mixins/topNavigationBarMixin";

export default class TaskPage {
  commentAddAreaLocator = '.comments_add-link > textarea';
  commentAddInputLocator = '.comments_form-textarea';
  commentAddButtonLocator = '.comments_form-submit';
  taskCloseButtonLocator = '.task_close';

  constructor() {
    mix(this, [topNavigationBarMixin]);
  }

  addComment(text) {
    cy.get(this.commentAddAreaLocator)
        .click();

    cy.get(this.commentAddInputLocator)
        .type(title);

    cy.get(this.commentAddButtonLocator)
        .click();

    return this;
  }

  closeTask() {
    cy.get(this.taskCloseButtonLocator)
        .click();

    return getPitchPageFactory().getListsPage();
  }

  // other functionalities related to Task pop-up window
}
