/**
 * Created by Ozav_Tom on 13/07/2015.
 */

exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    sauceUser: 'ozave',
    sauceKey: '87d9fafe-f937-4d93-a51b-87102ed8e77a',

    baseUrl: 'http://localhost:3000',


    specs: [
        'test/e2e/*Spec.js'
    ],

    capabilities: {
        'browserName': 'firefox'
    }
};
