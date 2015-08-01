/**
 * Created by Ozav_Tom on 19/07/2015.
 */

//describe('Protractor Demo App', function () {
//    it('should add one and two', function () {
//        browser.get('http://juliemr.github.io/protractor-demo/');
//        element(by.model('first')).sendKeys(1);
//        element(by.model('second')).sendKeys(2);
//
//        element(by.id('gobutton')).click();
//
//        expect(element(by.binding('latest')).getText()).
//            toEqual('3'); // This is wrong!
//    });
//});



//describe('angularjs homepage todo list', function() {
//    it('should add a todo', function() {
//        browser.get('https://angularjs.org');
//
//        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//        element(by.css('[value="add"]')).click();
//
//        var todoList = element.all(by.repeater('todo in todoList.todos'));
//        expect(todoList.count()).toEqual(3);
//        expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
//        // You wrote your first test, cross it off the list
//        todoList.get(2).element(by.css('input')).click();
//        var completedAmount = element.all(by.css('.done-true'));
//        expect(completedAmount.count()).toEqual(2);
//    });
//});

describe('Home page', function() {
    var page;

    //beforeEach(function() {
    //    browser.get(browser.baseUrl);
    //});

    it('should pass', function() {
        browser.get(browser.baseUrl);
        expect(true).toBe(true);
    });
});


