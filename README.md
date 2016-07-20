Node-dev
=====================

Nodejs server stuff with Angular.

#### Development Process
1. Install dependences:  `npm install`
2. Run the server: `npm start`

#### Gulp Tasks:
1. __Compile Sass to CSS:__ `gulp sass`
2. __Monitor Sass files for changes:__ `gulp sass:watch`
    - Ctrl+c to quit/kill this task
3. __Sass Linting:__ `gulp sass:lint`
4. __CSS Linting:__ `gulp csslint`
5. __Javascript Linting:__ `gulp jslint`
6. __HTML Linting:__ `gulp htmlhint`
7. __Running Nodemon with scripts:__ `gulp nodemon`
8. __Linting:__ `gulp lint`
    - runs JSlint, HTML Validation, Sass linting, and CSS linting
9. __Default:__ `gulp`
    - runs all the linting tasks plus nodemon