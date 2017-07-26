'use strict';

const fs = require( 'fs' ),
	config = require( '../' ),
	stylelint = require( 'stylelint' ),
	validCss = fs.readFileSync( './__tests__/functions-valid.css', 'utf-8' ),
	invalidCss = fs.readFileSync( './__tests__/functions-invalid.css', 'utf-8' );

describe( 'flags no warnings with valid functions css', () => {
	let result;

	beforeEach( () => {
		result = stylelint.lint({
			code: validCss,
			config,
		});
	});

	it( 'did not error', () => {
		return result.then( data => (
			expect( data.errored ).toBeFalsy()
		) );
	});

	it( 'flags no warnings', () => {
		return result.then( data => (
			expect( data.results[0].warnings.length ).toBe( 0 )
		) );
	});
});

describe( 'flags warnings with invalid functions css', () => {
	let result;

	beforeEach( () => {
		result = stylelint.lint({
			code: invalidCss,
			config,
		});
	});

	it( 'did error', () => {
		return result.then( data => (
			expect( data.errored ).toBeTruthy()
		) );
	});

	it( 'flags three warnings', () => {
		return result.then( data => (
			expect( data.results[0].warnings.length ).toBe( 3 )
		) );
	});

	it( 'correct first warning text', () => {
		return result.then( data => (
			expect( data.results[0].warnings[0].text ).toBe( 'Expected single space after "(" (function-parentheses-space-inside)' )
		) );
	});

	it( 'correct first warning rule flagged', () => {
		return result.then( data => (
			expect( data.results[0].warnings[0].rule ).toBe( 'function-parentheses-space-inside' )
		) );
	});

	it( 'correct first warning severity flagged', () => {
		return result.then( data => (
			expect( data.results[0].warnings[0].severity ).toBe( 'error' )
		) );
	});

	it( 'correct first warning line number', () => {
		return result.then( data => (
			expect( data.results[0].warnings[0].line ).toBe( 4 )
		) );
	});

	it( 'correct first warning column number', () => {
		return result.then( data => (
			expect( data.results[0].warnings[0].column ).toBe( 14 )
		) );
	});

	it( 'correct second warning text', () => {
		return result.then( data => (
			expect( data.results[0].warnings[1].text ).toBe( 'Expected single space before ")" (function-parentheses-space-inside)' )
		) );
	});

	it( 'correct second warning rule flagged', () => {
		return result.then( data => (
			expect( data.results[0].warnings[1].rule ).toBe( 'function-parentheses-space-inside' )
		) );
	});

	it( 'correct second warning severity flagged', () => {
		return result.then( data => (
			expect( data.results[0].warnings[1].severity ).toBe( 'error' )
		) );
	});

	it( 'correct second warning line number', () => {
		return result.then( data => (
			expect( data.results[0].warnings[1].line ).toBe( 4 )
		) );
	});

	it( 'correct second warning column number', () => {
		return result.then( data => (
			expect( data.results[0].warnings[1].column ).toBe( 22 )
		) );
	});

	it( 'correct third warning text', () => {
		return result.then( data => (
			expect( data.results[0].warnings[2].text ).toBe( 'Expected "Calc" to be "calc" (function-name-case)' )
		) );
	});

	it( 'correct third warning rule flagged', () => {
		return result.then( data => (
			expect( data.results[0].warnings[2].rule ).toBe( 'function-name-case' )
		) );
	});

	it( 'correct third warning severity flagged', () => {
		return result.then( data => (
			expect( data.results[0].warnings[2].severity ).toBe( 'error' )
		) );
	});

	it( 'correct third warning line number', () => {
		return result.then( data => (
			expect( data.results[0].warnings[2].line ).toBe( 4 )
		) );
	});

	it( 'correct third warning column number', () => {
		return result.then( data => (
			expect( data.results[0].warnings[2].column ).toBe( 9 )
		) );
	});
});
