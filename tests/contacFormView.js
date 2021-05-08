const ContactFormPage = require('./pages/ContactPage');

describe('Contact Form: ', () => {
	const contactPageObject = new ContactFormPage();
	beforeEach(async () => await browser.get('https://www.epam.com/about/who-we-are/contact'));

	it('Contact Page should have a title', async () => {
		await expect(contactPageObject.getPageTitle()).toEqual('Learn more about EPAM and Contact Us | EPAM');
	});

	it('Fill name field', async () => {
		contactPageObject.fillFirstNameField('name');
	});

	it('SelectBlock should not be on the page before click on select field', async () => {
		await expect(contactPageObject.getContact.isSelectDropdownInTheDom).toBe(false);
	});

	it('Select dropdown should be clicked', async () => {
		await contactPageObject.getContact.clickOnTheSelect();
	});

	it('After click on the select field SelectDropDown should appear', async () => {
		contactPageObject.getContact.clickOnTheSelect();
		await expect(contactPageObject.getContact.isSelectDropdownInTheDom).toBe(true);
	});

	it('ErrorFirstNameFieldValidationBlock should not be on the before start typing', async () => {
		await expect(contactPageObject.getContact.firstNameFieldErrorBlock.isDisplayed()).toBe(false);
	});

	it('Fill first name field by empty string', async () => {
		await contactPageObject.fillFirstNameField('');
	});
});
