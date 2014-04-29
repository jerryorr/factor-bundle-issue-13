var robot = require('./robot.js')
  , $ = require('jquery')

// For some reason, $ is the robot module, and robot is jQuery
$('body').append(robot('beep'))