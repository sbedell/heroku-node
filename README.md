Heroku-node
=====================

Nodejs server with Angular as a front end.

#### Development Process
1. Install dependences:  `npm install`
2. Run the server: `npm start`

#### Gulp Tasks:
1. __Javascript Linting:__ `gulp jslint`
2. __HTML Linting:__ `gulp htmlhint`
3. __Linting:__ `gulp lint`
    - runs JSlint and HTML Linting/Validation
4. __Testing:__ `gulp test`
    - runs unit tests described by /tests/specs/test.spec.js and set up by karma.conf.js
5. __Default:__ `gulp`
    - runs linting and testing
