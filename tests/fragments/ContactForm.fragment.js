const BaseFragment = require('protractor-element-extend').BaseFragment;

class ContactFormBlock extends BaseFragment {
	constructor(rootElement) {
		super(rootElement);
		this.firstNameField = element(
			by.id(
				'_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name'
			)
		);
		this.phoneField = element(
			by.id(
				'_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone'
			)
		);
		this.selectedDropdownByClassname = 'select2-results__options';
		this.selectedFieldByClassname = 'select2-selection__rendered';
		this.submitFormButton = element(by.className('button-submit'));

		this.errorFirstNameFieldValidation = element(
			by.id(
				'_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name-error'
			)
		);

		this.errorPhoneFieldValidation = element(
			by.id(
				'_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone-error'
			)
		);
	}

	fillFirstName(name) {
		return this.firstNameField.sendKeys(name);
	}

	fillPhone(phone) {
		return this.phoneField.sendKeys(phone);
	}

	get firstNameFieldErrorBlock() {
		return this.errorFirstNameFieldValidation;
	}

	get phoneFieldErrorBlock() {
		return this.errorPhoneFieldValidation;
	}

	submitForm() {
		return this.submitFormButton.click();
	}

	clickOnTheSelect() {
		return element(by.className(this.selectedFieldByClassname)).click();
	}

	get isSelectDropdownInTheDom() {
		return element(by.className(this.selectedDropdownByClassname)).isPresent();
	}
}

module.exports = ContactFormBlock;
