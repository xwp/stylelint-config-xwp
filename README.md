# stylelint-config-xwp
[![NPM version](http://img.shields.io/npm/v/stylelint-config-xwp.svg)](https://www.npmjs.org/package/stylelint-config-xwp)

> XWP shareable config for stylelint that extends [WordPress CSS Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/).

This project is based on [stylelint-config-wordpress](https://github.com/WordPress-Coding-Standards/stylelint-config-wordpress).

## Table of Contents

-   [Why not just WordPress standards?](#why-not-just-wordpress-standards)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Presets](#presets)
-   [Extending the config](#extending-the-config)
-   [Changelog](#changelog)
-   [License](#license)

## Why not just WordPress standards?

We decided to relax or override some of the rules defined in the `stylelint-config-wordpress` ruleset.
We feel that with the following changes, the CSS code is more consistent and better reflects the WordPress coding standards for PHP and Javascript.

Here are key differences to the official WordPress CSS standards:

* `function-url-quotes` - use quotes in all functions.
* `string-quotes` - use single quotes instead of double quotes.
* `function-parentheses-space-inside` - add whitespace after opening and before closing parentheses.
* `color-hex-length` - relax hex color values formatting. Shortening the hex values whenever possible is a micro-optimization which can be easily automated nowadays by using build tools.

There are also grey areas not defined in the WordPress CSS Coding Standards, but standardized in the `stylelint-config-wordpress`, which are altered in `stylelint-config-xwp`:

* `at-rule-empty-line-before` - allow for grouping of the same name blockless at rules (`blockless-after-same-name-blockless`). Also, ignore not only `@else` but also `@elseif` rule.
* `selector-pseudo-element-colon-notation` - the single colon notation is included in the `stylelint-config-wordpress` in order to maintain the Internet Explorer 8 support. Since IE 8 is no longer supported by WordPress as of version 4.8, we opt for using a valid CSS notation, i.e. double colons.

## Installation

```bash
$ npm install stylelint-config-xwp --save-dev
```

## Usage

If you've installed `stylelint-config-xwp` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-xwp"
}
```

If you've globally installed `stylelint-config-xwp` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-xwp` in your config:

```json
{
  "extends": "/absolute/path/to/stylelint-config-xwp"
}
```

## Presets

In addition to the default preset, there are also specific presets. All presets extend the default one.

### SCSS

```json
{
  "extends": [
    "stylelint-config-xwp/scss"
  ]
}
```

## Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to four spaces and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-xwp",
  "rules": {
    "indentation": 4,
    "number-leading-zero": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
