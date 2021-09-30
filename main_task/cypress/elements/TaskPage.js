import {getPitchPageFactory} from "./factories/PitchPageFactory";
import {mix} from "../helpers/mix";
import {topNavigationBarMixin} from "./mixins/topNavigationBarMixin";
import BasePage from "./BasePage";

export default class TaskPage extends BasePage{
  commentAddAreaLocator = '.comments_add-link > textarea';
  commentAddInputLocator = '.comments_form-textarea';
  commentAddButtonLocator = '.comments_form-submit';
  taskCloseButtonLocator = '.task_close';
  commentsContentAreaLocator = '.comment_content';

  constructor() {
    super();

    mix(this, [topNavigationBarMixin]);
  }

  addComment(text) {
    this.setPostResponseAlias('comments');

    cy.get(this.commentAddAreaLocator)
        .click();

    cy.get(this.commentAddInputLocator)
        .type(text);

    cy.get(this.commentAddButtonLocator)
        .click();

    this.waitForPostResponseAlias();

    return this;
  }

  closeTask() {
    cy.get(this.taskCloseButtonLocator)
        .click();

    return getPitchPageFactory().getListsPage();
  }

  getTaskComments(){
    return this._getWEsText(this.commentsContentAreaLocator);
  }

  // other functionalities related to Task pop-up window
}
