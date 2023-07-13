# Tickets
A project for OSU CS 361

This is a react/node/mongodb application. It consists of a RESTful API and a react GUI.

To deploy locally, clone the repository. Then start the API and the React App in two separate terminals. For example, in one terminal, enter the following commands:

```
cd tickets_api
npm install
npm start
```
In a separate terminal:
```
cd tickets_ui
npm install
npm start
```

## MongoDB set up

Create a database and cluster on mongodb. 

Create a .env file in the `tickets_api` directory and fill it with the following:
```
PORT=3000
MONGODB_CONNECT_STRING=connection string here!
```
Use MongoDB's connection string, replace `username` and `password` with the username and password of your mongodb user.