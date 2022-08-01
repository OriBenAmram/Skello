
# Skello - pixel perfect, E2E clone of Trello (React + Node.js). 

Kanban-style task management board app inspired by trello.com, [Here is my project link](https://skello.herokuapp.com "Skello link").

For those of you who are already familliar with Trello, we added some intersting and unique features - [features](#application-features).
If you are not familliar with the App, read about it [here](#trello-description).
___

### Table of Contents
- [Trello Description](#trello-description)
- [Application Features](#application-features)
- [Technologies](#technologies)
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
- Create ***Boards*** and manage projects: Using ***D&D***, create, remove, and update lists and tasks.
- Create, edit and archive ***Task*** to the deepest level: Labels, Due date, Members, Cover images, Checklists, Activity log, Copy, Move and Archive.
- ***Side Menu:*** - Change the background of the board with the ***Unsplash Photo API***, ***Filtering*** by members / labels and General ***Activity*** Log!
- Google Login, along with regular authentication which is encrypted and safe.

In addition, we created Blind Color Mode, in which you can recognize the labels and cover colors by signs.
We have added a voice assistant which can accept vocal commands and help manage products with no effort! For example, you can filter, create board and more.
Of course that we included all the small nuances Trello has. You are not supposed to find any differences! 

## Technologies

The technology stack we used was MERN - MongoDB, Express, React, Node.js.
The app uses webSockets to update the board in real-time.
The API calls to the backend are done with the REST API method , and we used middlewares to authenticate and authorize actions.

We have used many thirs side libraries for many goals, such as the voice assistant, google-login, D&D and more.
The layout and pixel-perfect were made with Sass (functions, mixins, variables). 

## Getting started

Head to the repository on top and clone the project or download the files.

```
git clone https://github.com/OriBenAmram/Bitcoin-Vue.git
```

Enter the backend folder and make sure you have node_modules installed. After that we will initiate the server with 'npm start':

```
cd backend
npm i 
npm start
```

You shuold get a console ouput that the server is up and running at port 3030.
Enter the frontend folder and repeat the same process.

```
cd frontend
npm i 
npm start
```

You shuold get a console ouput that the server is up and running at localhost:3000.

That's it! The App should be opened automatically, enjoy!

## Showcase

### Homepage
The landing page in which the user can sign up / login, or press the call to action button to start demo if the are limited with time.

![Homepage image](frontend/src/assets/imgs/readme/homepage.png "Home-page")

### Workspace
All of the user's boards. Here, in addition to create a board with the empty board box and navigate between their's boards, they are able to use the vocal-assistant we created with 3rd side library! Pressing on the button in the middle of the nav bar on top would open an modal with instructions that makes life a bit easier.

![Workspace image](frontend/src/assets/imgs/readme/workspace.png "Workspace-page")

### Board
All the functionality that you have in Trello. D&D, live-updates, editing tasks to the deepest level, side-menu, editing board members and much more - just [check it out...!](https://skello.herokuapp.com "Skello link")

![Main board image](frontend/src/assets/imgs/readme/board-main.png "Board-main-page")

### Signup
We created an e2e authentication flow, including encrypting the users' details, midelwears and ****Google Login***.

![Login image](frontend/src/assets/imgs/readme/login.png "login-page")

### Some mobile!
Just a taste of the mobile experience. I used different **mixins**, **conditional rendering**, and the **"mobile first"** approach. 
You can also see that there is an interactive **side menu** for routing.

<img src="src/assets/imgs/home-mobile.jpg" width="25%" style="float: left"/><img src="src/assets/imgs/contacts-mobile.jpg" width="25%" style="float: left;"/><img src="src/assets/imgs/statistic-mobile.jpg" width="25%" style="float: left;"/><img src="src/assets/imgs/signup-mobile.jpg" width="25%" style="float: left;"/>

### Dashboard
Here I present some of the user bank details, with charts about USD exchange trade value over the years, the Market place and their latest moves.

![Dashboard image](src/assets/imgs/chart-dekstop.jpg "Dashboard")
