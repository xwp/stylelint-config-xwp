'use strict';

module.exports = {
	extends: [
		'./',
	].map( require.resolve ),

	plugins: [
		'stylelint-scss',
		'stylelint-no-unsupported-browser-features',
	],

	rules: {

		// stylelint-config-xwp css overrides
		'at-rule-no-unknown': null,
		'at-rule-empty-line-before': [ 'always', {
			except: [ 'blockless-after-blockless', 'first-nested' ],
			ignore: ['after-comment'],
			ignoreAtRules: [ 'else', 'elseif' ],
		} ],

		// plugins setup
		'plugin/no-unsupported-browser-features': [
			true,
			{
				severity: 'warning',
			},
		],
	},
};
