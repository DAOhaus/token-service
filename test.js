import test from 'ava';
import { mint } from './index.js';

test('main', t => {
	t.throws(() => {
		mint(123);
	}, {
		instanceOf: TypeError,
		message: "Expected an object to be passed into 'mint', got number",
	});

	t.is(mint({ name: 'testToken' }), '0xtestToken');
});
