const EC = protractor.ExpectedConditions;

class BasePage {
	getPageTitle() {
		return browser.getTitle().then(title => title);
	}

	clickButton(button) {
		return button.click();
	}

	isElementVisible(element) {
		return element.isDisplayed();
	}

	waitUntilVisible(elem) {
		browser.wait(EC.presenceOf(elem), 5000).then(() => browser.wait(EC.visibilityOf(elem), 5000));
		return elem;
	}

	// default page methods
	isVisible(locator) {
		return EC.visibilityOf(locator);
	}

	isNotVisible(locator) {
		return EC.invisibilityOf(locator);
	}

	inDom(locator) {
		return EC.presenceOf(locator);
	}

	notInDom(locator) {
		return EC.stalenessOf(locator);
	}

	isClickable(locator) {
		return EC.elementToBeClickable(locator);
	}

	hasText(locator, text) {
		return EC.textToBePresentInElement(locator, text);
	}

	and(arrayOfFunctions) {
		return EC.and(arrayOfFunctions);
	}

	titleIs(title) {
		return EC.titleIs(title);
	}

	hitEnter() {
		return browser.actions().sendKeys(protractor.Key.ENTER).perform();
	}

	clickTab() {
		return $('body').sendKeys(protractor.Key.TAB);
	}

	refreshPage() {
		return browser.refresh();
	}
}

module.exports = BasePage;
