# Ping Pong Unit Testing Exercise

This is a ping-pong style of pair programming. The first student will create a unit test, and the second student will make it pass. Then, the second student will create a unit test, and the first student will make it pass.

The tests and can as simple or complicated as you'd like, just remember that your peer might retaliate in similar form!

All unit tests and solutions involve an CRUD Api for tracking Ping Pong Matches.

## Setup

1. Setup project
```sh
$ npm install
$ sequelize db:migrate
```
2. Open up **three** separate tabs in your terminal.
3. **Two** of the tabs should be in this project's directory.
4. `psql` in the third tab to enter into the Postgres command line.
5. Create **two** local databases inside the `PSQL` command line by running `CREATE DATABASE pingpong_dev;` and `CREATE DATABASE pingpong_test;`
6. In one of the **two** remaining tabs, run `nodemon server.js` to start the APP.
7. In the **final** tab, run `mocha -R min -w` to have your tests running without the need to refresh the app or rerun the `mocha` command.
8. Your app should now be running on [localhost:3000](http://localhost:3000/).
