import {getPitchPageFactory} from "../elements/factories/PitchPageFactory";
import {randomString} from "../helpers/random";

describe('Pitch. Main test suite', () => {
  const pageFactory = getPitchPageFactory();
  const predefinedDataSource = {
    projectTitle: 'Project: Hello World',
    boardTitle: 'Welcome!',
    lists: [
      {
        title: 'Basics',
        tasks: ['This is a task.', 'Click on a task to see what\'s behind it',
        'Try dragging and sorting both lists and tasks.', 'You can use markdown for task descriptions.']
      },
      {
        title: 'Intermediate',
        tasks: ['You can assign a due date to any task.', 'You can assign members to any task by dragging them from the side menu.',
          'You can also assign labels to any task.', 'Try leaving a comment on this task.']
      }
    ]
  }
  let homePage;
  let boardsPage;
  let listsPage;

  beforeEach(() => {
    homePage = pageFactory.getLoginPage()
        .enterAsGuest();
  });

  it('Create a new project', () => {
    const projectTitle = `p_${randomString(5)}`

    boardsPage = homePage.createNewProject(projectTitle);

    boardsPage.getProjectTitle()
        .should('be.eq', projectTitle);

    boardsPage
        .navigateToHomePage()
        .getProjectTitles()
        .should('include', projectTitle);
  });

  it('Create a new board', () => {
    const boardTitle = `b_${randomString(7)}`

    boardsPage = homePage.openProject(predefinedDataSource.projectTitle);
    listsPage = boardsPage.createNewBoard(boardTitle);
    listsPage.getBoardTitle()
        .should('be.eq', boardTitle);

    listsPage
        .backToBoardsPage()
        .getBoardsTitle()
        .should('include', boardTitle);
  });

  it('Create a new list', () => {
    const listTitle = `b_${randomString(4)}`

    listsPage = homePage
        .openProject(predefinedDataSource.projectTitle)
        .openBoard(predefinedDataSource.boardTitle)
        .createNewList(listTitle);

    listsPage.getListsTitle()
        .should('include', listTitle);
  });

  it('Create a new task', () => {
    const taskTitle = `b_${randomString(9)}`

    listsPage = homePage
        .openProject(predefinedDataSource.projectTitle)
        .openBoard(predefinedDataSource.boardTitle)
        .createNewTask(predefinedDataSource.lists[0].title, taskTitle);

    listsPage.getTasksListTitle(predefinedDataSource.lists[0].title)
        .should('include', taskTitle);
  });

  it('Add a comment', () => {
    const comment = randomString(20);

    listsPage = homePage
        .openProject(predefinedDataSource.projectTitle)
        .openBoard(predefinedDataSource.boardTitle)
        .editTask(predefinedDataSource.lists[0].tasks[1])
        .addComment(comment)
        .getTaskComments()
        .should('include', comment);
  });
});
