const BaseFragment = require('protractor-element-extend').BaseFragment;

class MenuBlock extends BaseFragment {
	constructor(rootElement) {
		super(rootElement);
		this.menuButton = element(by.className('hamburger-menu__button'));
		this.menuList = element(by.className('top-navigation__row'));
		this.menuSearchBlock = element(by.className('header-search__panel'));
		this.menuSearchButton = element(by.className('header-search__button'));
	}

	findMenuButton() {
		return this.menuButton.click();
	}

	get getMenuItems() {
		return this.menuList;
	}

	clickOnTheSearchButton() {
		return this.menuSearchButton.click();
	}

	get getMenuSearchBlock() {
		return this.menuSearchBlock;
	}
}

module.exports = MenuBlock;
