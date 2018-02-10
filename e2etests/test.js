/* global it, expect */
/* global describe, it, browser */
const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('BoomTech Todo List');
  });
//Feature Test
//Create todo 
  it('Should allow me to create a Todo', () => {
    const todoText = 'Get better at testing'; // Create string constant text
    browser.url('http://localhost:3000/'); // Navigate to Page
    browser.element('.todo-input').setValue(todoText); // Find input element and enter input text
    browser.click('.todo-submit');  //Click submit element
    const actual = browser.element('.todo-text').getText(); // Find text element and assign its text value to const
 
    expect(actual).to.equal(todoText); // Asset actual is equal to todoText
  });
//delete todo
  it('Should allow me to delete a Todo', () => {
    const todoText = 'Get better at testing';
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');
  });

});