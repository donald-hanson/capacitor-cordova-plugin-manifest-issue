cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com-darryncampbell-cordova-plugin-intent.IntentShim",
      "file": "plugins/com-darryncampbell-cordova-plugin-intent/www/IntentShim.js",
      "pluginId": "com-darryncampbell-cordova-plugin-intent",
      "clobbers": [
        "intentShim"
      ]
    }
  ];
  module.exports.metadata = {
    "com-darryncampbell-cordova-plugin-intent": "1.3.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});