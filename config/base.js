const fs = require('fs');
const del = require('del');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const path = require('path');

exports.config = {
	framework: 'jasmine2',
	baseUrl: 'https://www.epam.com/',
	specs: ['../tests/indexPageView.js', '../tests/contacFormView.js'],
	suites: {
		view: ['../tests/*'],
	},

	// framework: 'custom',
	seleniumArgs: ['-browserTimeout=60'],
	ignoreProtectedModeSettings: true,
	allScriptsTimeout: 60000,
	getPageTimeout: 60000,
	//to remove if selenoid config is used
	seleniumAddress: 'http://localhost:4444/wd/hub',
	jasmineNodeOpts: {
		defaultTimeoutInterval: 100000,
		print: function () {},
	},
	onPrepare,
	onComplete,
};

function onPrepare() {
	browser.waitForAngularEnabled(false);
	browser.driver.manage().window().setSize(1200, 800);
	browser.manage().timeouts().implicitlyWait(3000);

	require('../utils/matchers');

	// allure reporter

	// add jasmine spec reporter
	jasmine.getEnv().addReporter(
		new SpecReporter({
			spec: {
				displaySuccessful: true,
				displayFailed: true,
				displayErrorMessages: true,
				displayStacktrace: true,
				displayNumber: true,
				displayDuration: true,
			},
			summary: {
				displaySuccessful: true,
				displayFailed: true,
				displayErrorMessages: true,
				displayStacktrace: true,
				displayNumber: true,
				displayDuration: true,
			},
			colors: {
				success: 'green',
				failure: 'red',
				pending: 'yellow',
			},
			prefixes: {
				success: '✓ ',
				failure: '✗ ',
				pending: '* ',
			},
			customProcessors: [],
		})
	);
}

function onComplete() {
	browser.close();
}
