# assessmentTest by Sharath

The project has test scenario to perform user registration and validate product on payments page 
for a test url: http://automationpractice.com/index.php 

Below is the feature:
  Feature:
·       Register on the website
·       Click SignIn on the landing page
·       Create Account by entering email address
·       Enter details on the Your Personal Information and click Register
·       Validate on the landing screen - correct name and surname is displayed
·       Add a product to the cart
·       Proceed to the checkout page and continue till payments
·       Validate on the payments page if the product details are correct.

Project has been implemented with WebdriverIO, having BDD cucumber framework with allure reporting.
Page Object model has been implemented for screens.

Execution steps are as below:
	1. Execute: from terminal, run npx wdio wdio.conf.js

	2. Report accessing: post run, generate and open allure report using below commands individually
		a. allure generate
		b. allure open
