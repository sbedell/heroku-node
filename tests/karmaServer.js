const testServer = require('karma').Server;

var server = new testServer({
  configFile: "../karma.conf.js",
  singleRun: true
}).start();