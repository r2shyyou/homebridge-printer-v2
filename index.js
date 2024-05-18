/**
 * v1.0
 *
 * @url https://github.com/r2shyyou/homebridge-printer-v2
 * @author r2shyyou <r2shyyou@gmail.com>
 *
 **/

'use strict';

module.exports = function (homebridge) {
  let PrinterPlatform = require('./src/platform.js')(homebridge);
  homebridge.registerPlatform('homebridge-printer', 'PrinterPlatform', PrinterPlatform, true);
};
