/**
 * Created by Ozav_Tom on 13/07/2015.
 */

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    specs: [
        'test/e2e/*Spec.js'
    ],

    capabilities: {
        'browserName': 'firefox'
    }
};
