# react-games-frontend

[View Demo here: https://r-games.onrender.com](https://r-games.onrender.com)

An game application built with React JS for the frontend and Express JS and Mongoose for the backend.I made this application in order to practice my useContext and useReducer knowledge. I created a [REST API](https://github.com/Tanju67/react-games-backend.git) for the backend of this application.

> ⚠️ I’m not expecting the use case for smaller screens, such as mobile devices, so please use this app on your laptop or tablet.

<img src='./src/assets/scrnli_5_13_2024_3-20-13%20PM.png'/>

1. UserCredential:
   - email:test@mail.com
   - password:secret123

## Features

### Sign In & Sign Out

The user must log in to play game.

### Select Game

Users can select from games page pig game or guess game.
<img src='./src/assets/scrnli_5_13_2024_3-21-20%20PM.png'/>

### Pig Game

Jonas Schmedtmann made a pig game in his javascript course on Udemy. Instead of rewriting the codes by making the same game, I made my own version by changing the game rules and the number of players. The user can choose the number of players between 2 and 6. The game for two players has the same rules as the classic pig game, but I wrote the codes so that the game rules for 3 or more players are slightly different. You can find the game rules in the game. Enjoy.🎉
<img src='./src/assets/scrnli_2_2_2024_5-43-36%20PM.png'/>

### Guess Game

It is a classic guess game. The player tries to guess the secret number between 1 and 20. If you guess correctly at the earliest, your score will be higher. The player's highest score is saved in the database. I added animation to make the game a little more fun. Have fun with the game.😃😊
<img src='./src/assets/scrnli_2_5_2024_12-46-25%20AM.png'/>

## Built With

- React JS
- React Router
- CSS Modules

## Getting Started

### Prerequisites

Install npm.

- npm
  ```
  npm install npm@latest -g
  ```
- You must clone [the backend repo](https://github.com/Tanju67/react-games-backend.git) of this application.
  ```
  git clone https://github.com/Tanju67/react-games-backend.git
  ```

### Installation

1. Clone the repo.
   ```
   git clone https://github.com/Tanju67/react-games-frontend.git
   ```
2. Install NPM packages.
   ```
   npm install
   ```
3. Create the backend url in a .env file.
   ```
   REACT_APP_URL=(your backend url)
   ```
4. Start the frontend server (Firstly you must start backend server).
   ```
   npm run dev
   ```
