const BasePage = require('./BasePage');
const Menu = require('./../fragments/TopMenu.fragment');

class IndexPage extends BasePage {
	constructor() {
		super();
		this.menu = new Menu($('.header__content'));
	}

	get getMenu() {
		return this.menu;
	}
}

module.exports = IndexPage;
