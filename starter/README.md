## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies

## Description
- run tests: `protractor conf.js`

## Explanation
Even if for a single flow it may look a bit overkill, I chose a POM approach for this exercise as it can be easily scaled and the test files are lightweight, containing only the actual steps and assertions.  

I also created a few helper methods to help me write the test. I believe they allow us to read the actual steps better and anyone can see what we are trying to test and how.  

In each of the PO files, I added the CSS selectors and the methods relevant to each page. For instance, in my first commit, I defined the element selectors as I needed them and the test was quite hard to read and understand. For the methods, I chose to group multiple lines and create easy to understand methods. For instance, doLogin() method is inserting the username and password, clicks on the submit button, and waits for the URL to contain 'home'. I left the assertions in the test file so that everyone can know what we are expecting to happen after each function is run.  

I did not add any other packages, nor did I change the conf.js file. This test will run by just following the commands found in the Prerequisites and Description sections. 

