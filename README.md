Heroku-node
=====================

Nodejs server with Angular as a front end.

#### Development Process
1. Install dependences:  `npm install`
2. Run the server: `npm start`

#### Gulp Tasks:
1. __Compile Sass to CSS:__ `gulp sass`
2. __Monitor Sass files for changes:__ `gulp sass:watch`
    - Ctrl+c to quit/kill this task
3. __Javascript Linting:__ `gulp jslint`
4. __HTML Linting:__ `gulp htmlhint`
5. __Linting:__ `gulp lint`
    - runs JSlint and HTML Validation/Linting
6. __Running Nodemon with scripts:__ `gulp nodemon`
7. __Default:__ `gulp`
    - runs all the linting tasks plus nodemon