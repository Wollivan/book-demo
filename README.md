# Book Library

This is a demo of an app that uses MongoDB to persist data with a front end that allows us to CRUD.

## Creating this project from scratch

- Create a root directory (book-demo in this case)

In the root folder:

- Create an empty /server directory
- Run `npx create-react-app client`
- Create a .gitignore file
- Create a README.md file

cd into server and run:
`npm init -y`
which will create a package.json

then run:
`npm i body-parser cors dotenv express mongoose netlify-lambda nodemon serverless-http`
this will install all of the dependancies we need to create an express server that pulls data from a MongoDB cluster and is hosted on Netlify.

Inside the server directory:

- Create a /src directory
- Create a .env file

Inside the server directory:

- Create a /models directory
- Create a file called api.js

Now your folder structure should look something like this:

book-demo

├── client

│ ├── public

│ └── src

| | ├── App.css

| | ├── App.js

| | ├── index.js

├── server

| ├── src

| | ├── models

| | ├── api.js

| ├── package.json

├── .gitignore

└── README.md

## server

Open the root folder in VSCode.

In the package.json in server, replace the "scripts" item with the following:

```js
  "scripts": {
    "start": "./node_modules/.bin/netlify-lambda serve src",
    "build": "./node_modules/.bin/netlify-lambda build src"
  },
```

In /server/.env add the following line:
`DATABASE_URL=YOUR_CONNECTION_STRING`

Start the server on your local:
`npm start`

## client

Delete the following files inside the src folder

App.test.js
Index.css
Logo.svg
Reportwebvitals.js
setupTests.js

Delete everything inside App.css

Inside app.js delete:

```js
import logo from "./logo.svg";

<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    Learn React
  </a>
</header>;
```

Inside index.js delete:

```js
import "./index.css";

import reportWebVitals from "./reportWebVitals";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Inside src create:

- components direcotry
- Create a new folder for each component

### Start the site on your local

`npm start`
