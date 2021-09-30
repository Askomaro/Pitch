# Pitch_TC - Test
Technical Challenge done for Pitch

### 1. Warm-up programming task (Python):  
What needs to be prepared:
* Python installed (does not matter the version 2 or 3)  

How to run:
* python warm-up_task/main.py  

All tests should be passed, they are divided in 3 categories: positive, negative and errors checking.  


**_[ideas, improvements]:_**  
* We can install pytest library for making much better test creation/execution
* We can install allure reporting library, for having better visualised tests' reports
___  
___  
### 2. The main task. UI Testing (Cypress):
Application that's under testing https://sample-boxd.web.app/login.
Main e2e UI tests that must be checked before a release (in my opinion):
#### *Functional:*
1. The **Guest** can create a task  
   1.1. Checks the user can log-in as Guest   
   1.2. Create a new project  
   1.3. Create a new board  
   1.4. Create a new list in the recent created board  
   1.5. Create a new task in the recent created list  
   1.6. Edit a newly created task by adding:  
   * Add a member  
   * Add a due date  
   * Add a label
   * Add a description  
   * Add a comment  


2. The *guest* can archive a task  
2.0. Tasks are pre-created  
2.1. Can see archived tasks  
   2.2. Can see active task  
   

3. The *guest* can archive a list  
   3.0. Lists are pre-created  
   3.1. Can see archived lists  
   3.2. Can see active lists  


4. The *guest* can archive a board  
   4.0. Boards are pre-created  
   4.1. Can see archived boards  
   4.2. Can see active boards


5. The *guest* can archive a project  
   5.0. Projects are pre-created  
   5.1. Can see archived projects  
   5.2. Can see active projects  


6. The *guest* can change his settings  
   6.1. Can change Username  
   6.2. Can change Short bio/role  


7. The *guest* can filter the board items  
   6.0. Project, board, lists, tasks are pre-created  
   6.1. Can filter tasks by member  
   6.2. Can filter tasks by label  


8. The *guest* can edit a label   
   6.0. Project, board are pre-created  
   6.1. Can edit a label  


9. The *guest* can change a board background   


10. The *guest* can modify a comment  
    6.0. Project, board, lists, tasks, comments are pre-created  
    6.1. Can edit a comment  
    6.2. Can delete a comment  


11. The *guest* can search tasks by title  


12. The *guest* can logout  


12-24. All the same tests for **User** logged in via Google

_Notes_: of course there is a plenty other test cases which should be checked, but we limited in time

#### *Non-Functional(Optional, [ideas, improvements]):*
    
1. Performance tests are executed if needed  
2. UI/UX are checked if needed  
---
'' _Question: how would you manage logging in if you
couldn't use the Guest login?_ ''  

**_Answers:_**
1. There's second option that I see on Login page is via Google email account    
2. We can use jwt token as request's header for an API call  
3. We can use jwt token and add it as a key in Local Storage  


'' _Question: how would you manage setting up tests data if
you hadn't have access to the already pre-seeded data?_ ''  
**_Answers:_**
1. We can inject it via SQL script before the tests execution
2. We can set up all needed tests data in 'before tests' hook method  
3. Perhaps, there is available REST API resources for managing all this data, and we can create it all before the tests execution **_[ideas, improvements]_**   


What needs to be prepared:
* node.js is installed

_Notes:_
To structure the code it has been chosen 'PageObjects' design patter, but we can stick to Cypress commands(and actions) if needed, 
it's just my preference :). Within PageObjects there were introduced 'PageFactory' pattern just not to create multiple PageObject instances
and 'Mixins' to inject the same navigation functionality across the pages. Routes and request intercepts were using to interact with UI changes gracefully. 

**_[ideas, improvements]:_**
* Add 'id' locators to all web elements that supposed to be using in automation tests  
* Add REST API resource to delete project/board/list/task/comment etc
___  
___  
### 3. Bonus task. Scripting / CI (Python):  


'' _Question: How would you configure a CI job that executes
the script every hour? Please describe in words or
provide a snippet of code._ ''  

**_Answers:_**
1. We can configure manually through the UI (e.g. Jenkins) a Job that is going to run the script by schedule  
2. We can make all the same(1) but using configuration as a code (e.g. Groovy for Jenkins)  
