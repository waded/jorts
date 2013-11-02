test('Jorts can do the one more useful thing', function() {
	strictEqual(jorts.many([0, 1000, 2000]), ['0', '1K', '2K']);
});