import HomePage from "../HomePage";
import BoardsPage from "../BoardsPage";
import ListsPage from "../ListsPage";
import LoginPage from "../LoginPage";
import TaskPage from "../TaskPage";


export default class PitchPageFactory {
  getHomePage() {
    return new HomePage();
  }

  getBoardsPage() {
    return new BoardsPage();
  }

  getListsPage() {
    return new ListsPage();
  }

  getLoginPage() {
    return new LoginPage();
  }

  getTaskPage() {
    return new TaskPage();
  }
}

let pageFactoryInstance;

export function getPitchPageFactory() {
  if (!pageFactoryInstance) {
    pageFactoryInstance = new PitchPageFactory();
  }

  return pageFactoryInstance;
}
