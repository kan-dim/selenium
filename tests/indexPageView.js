const IndexPage = require('./pages/IndexPage');

describe('EPAM', () => {
	const indexPageObject = new IndexPage();
	beforeEach(async () => await browser.get('https://www.epam.com/'));

	it('Page should have a title', async () => {
		await expect(indexPageObject.getPageTitle()).toEqual('EPAM | Enterprise Software Development, Design & Consulting');
	});

	it('App should have visible menu list', async () => {
		await expect(indexPageObject.getMenu.getMenuItems.isDisplayed()).toBe(true);
	});

	it('MenuSearchBlock should not be on the index page by default', async () => {
		await expect(indexPageObject.getMenu.getMenuSearchBlock.isDisplayed()).toBe(false);
	});

	it('Menu search button should be clicked', async () => {
		indexPageObject.getMenu.clickOnTheSearchButton();
	});

	it('After click on the search Icon MenuSearchBlock should appear', async () => {
		indexPageObject.getMenu.clickOnTheSearchButton();
		await expect(indexPageObject.getMenu.getMenuSearchBlock.isDisplayed()).toBe(true);
	});
});
