## Introduction

What can be better than a vending machine serving delicious fresh fruits?
Drop some squids into it and it will do magic! :) 

Project is deployed and live at: https://adrianhulparu.github.io/vending-machine

## Development

In order to run the app in development mode, go in the project directory and run
`npm install`, followed by `npm run start`. <br><br>Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Description

The app consists of 2 views with the following routes: <br> 
####Vending machine: 
`/` - main screen with 4 main components:<br>
**`Products display`**: grid showcasing available products<br>
**`Money slot`**: controls for adding credits<br>
**`Screen`**: display info around credits, selection and other interactions with the machine<br>
**`Keypad`**: used for inputting user's selection<br>

####Inventory: 
`/inventory` - a view with a react data table component, allowing to edit product quantities on each slot (max 10 products per slot)

This project was developed using React & Redux, making use of the latest features like functional components and hooks.
The initial state of the app is defined in `store.js`. 
Actions are implemented using the `redux-actions` package as I find this approach easier to maintain.
In order to keep store data minimal, computations were done through selectors using `reselect`.
For styling/layout, I used `styled-components` with `rebass` for atomic components. 
I've tried to have fun with it but not going too wild. Hope you'll like it!
