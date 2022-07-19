
# Skello - pixel perfect and E2E clone of Trello. 
[Here is my project link](https://skello.herokuapp.com "Skello link")

___

### Table of Contents
- [Description](#description)
- [Technologies](#אechnologies)
- [Getting started](#getting-started)
- [Showcase](#showcase)

## Description
I decided to learn a new framework, because I want to keep expanding my knowladge and try new chalanges. That was **my motivation.** 

And a bit about the project - a small App that was built in a few days, which provides the user a list of contacts that they can transfer money to, a basic CRUDL and some information about the value of theirs fake bank currency in Bitcoin.

You are more than welcome to ***check it out*** (just enter your name and see it yourself - [right here](https://oribenamram.github.io/Bitcoin-Vue "Github pages link"))



## Technologies

- React.js(17)
- 

## Features
Please feel free to take a look of the different components of the website - [Showcase](#showcase)

- Simple authentication - store and session storage.
- HTTP request for Market price, BITcoin value and more.
- Presenting data in a dashboard using charts & 3rd side library.
- CRUDL of contacts, along with User messages for different actions.
- Responsive and well designed.


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
