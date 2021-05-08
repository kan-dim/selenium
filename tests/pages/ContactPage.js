const BasePage = require('./BasePage');
const ContactFragment = require('./../fragments/ContactForm.fragment');

class ContactFormPage extends BasePage {
	constructor() {
		super();
		this.contactForm = new ContactFragment($('.bg-color-smoke-gray .layout-box__wrapper'));
		this.submitButton = element(by.className('button-ui'));
	}

	get getContact() {
		return this.contactForm;
	}

	fillFirstNameField(name) {
		this.getContact.fillFirstName(name);
		this.submitButton.click();
		return name;
	}

	fillPhoneField(phone) {
		this.getContact.fillPhone(phone);
		return this.submitButton.click();
	}

	clickOnTheSelect() {}
}

module.exports = ContactFormPage;
