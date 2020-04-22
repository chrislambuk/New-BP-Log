cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "id": "cordova-plugin-admobpro.AdMob",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-admobsdk": "7.49.0",
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.49.0",
    "cordova-plugin-wkwebview-engine": "1.2.1"
}
// BOTTOM OF METADATA
});