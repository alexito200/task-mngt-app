Task Management App

TOC:
- Homepage (Login Page)
- Task Dashboard Page
- Task Form Page
- Task Details Page

  Homepage (Login Page) is the first page that the user will see. The user will have to click on the login button which will take them to the Auth0 login page. Once logged in, it will 
  take them to the Task Dashboard Page.

  The Task Dashboard Page is made up of a bootstrap card that includes two buttons, Add New Task and Logout. The Add New Task button will take the user to the Task Form Page while the    Logout button will log them out and redirect them back to the Homepage. After creating a new task, the user will be able to see their input in the form of a task in a list. This task 
  will have a Mark Complete button next to it for their convenience. When the user clicks on the Mark Complete button, the program will put a strike-through decoration over the task.

  The Task Form Page is a bootstrap card made up of two text boxes and two buttons. The first text box is for the task title and the second is for the task description. The two 
  buttons, Save Task and Back to Dashboard, are self-explanatory. Save Task confirms the addition of a new task and adds it to the Dashboard as an li tag in an unordered list. The Back 
  to Dashboard button is for the user's convenience in case they don't want to continue with the addition of their task.

  The user is directed to the Task Details Page when the actual task is clicked. This page is for the user to visualize what the task is. This page gives them the option to edit the task or delete the task. The Edit Task button has been set up to redirect them to the Task Form Page where they can make their edits and save the edits.

Installation:

Clone the repository:
```
git clone https://github.com/your-username/task-mngt-app.git
cd task-management-app

```
