
# Skello - pixel perfect, E2E clone of Trello (React + Node.js). 

Kanban-style task management board app inspired by trello.com, [Here is my project link](https://skello.herokuapp.com "Skello link").

For those of you who are already familliar with Trello, we added some intersting and unique features, just keep reading or take a look!
If you are not familliar with the App, read about it [here](#trello-description).
___

### Table of Contents
- [Trello Description](#trello-description)
- [Application Features](#application-features)
- [Technologies](#אechnologies)
- [Getting started](#getting-started)
- [Showcase](#showcase)

## Trello Description
Trello is an app in which you can manage projects and tasks using a kanban board. A board contains lists and tasks. Usually each project is a board, and the lists and cards are the tasks and subjects to do in the project. Users can modify the board and change list and card locations using Drag and Drop.
Users can work together and watch live changes. 
There are many other features in Trello, such as labels, due date for tasks, members and more. 
Every thing Trello has, we also had. We even added color-blind mode and speaker assistant! 
More about it in the [features section](#application-features).

You are more than welcome to ***check it out*** (just enter your name and see it yourself - [right here](https://oribenamram.github.io/Bitcoin-Vue "Github pages link"))

## Application Features
- Create Boards and manage projects.
- Create, remove, and update lists and tasks.
- Drag and Drop lists and task cards in the board
- Create, remove, edit tasks
- Manage members, lables, due date, attachments, activity and comments in each task
- Get notifications when actions are done on your tasks
- Search and filter cards based on lables, members and free text
- Archive tasks and view the archived tasks
- Change the background of your board with the Unsplash Photo API
- View project analytics in the dashboard

## Technologies

- React.js(17) - Hooks & Classes
- Redux
- 

## Getting started
Clone the project or dowload the files on top.
```
git clone https://github.com/OriBenAmram/Bitcoin-Vue.git
```
Open the terminal and enter the following line to run it locally on your computer:
```
npm run dev 
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Showcase

### Sign-up page

![Signup page image](src/assets/imgs/signup-desktop.jpg "Sign-up page")

### Your contacts
You can view your different contacts, filter them by number or name. 
In addition, you can transform money, randomly, to one of your contacts by pressing on the "I'm flexible" button. You would get a message about the details right after, of course.

![Contacts page image](src/assets/imgs/contact-desktop-regular.jpg "Contacts page")

### Add a new contact
In the same page, you can click on the button "Add a new contact", and the right fields would appear.

![Add a contact mode - image](src/assets/imgs/contact-dekstop-add.jpg "Add a contact mode")

### Some mobile!
Just a taste of the mobile experience. I used different **mixins**, **conditional rendering**, and the **"mobile first"** approach. 
You can also see that there is an interactive **side menu** for routing.

<img src="src/assets/imgs/home-mobile.jpg" width="25%" style="float: left"/><img src="src/assets/imgs/contacts-mobile.jpg" width="25%" style="float: left;"/><img src="src/assets/imgs/statistic-mobile.jpg" width="25%" style="float: left;"/><img src="src/assets/imgs/signup-mobile.jpg" width="25%" style="float: left;"/>

### Dashboard
Here I present some of the user bank details, with charts about USD exchange trade value over the years, the Market place and their latest moves.

![Dashboard image](src/assets/imgs/chart-dekstop.jpg "Dashboard")
