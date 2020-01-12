var assert = require('assert');
var jorts = require('./jorts.js');

// Shims to switch from qunit to mocha while tests still test
var one = function(a, e) { assert.equal(String(jorts.one(a)), String(e)) };
var many = function(a, e) { assert.equal(String(jorts.many(a)), String(e)) };
var test = function(name, fn) {
	it(name, fn);
}

test('General: Basic scenarios needed to understand jorts', function() {
	one(1184, '1K'); // common use for one number
	one(0, '0'); // 0 is always 0
	many([0, 1000, 2000], ['0', '1K', '2K']); // 0 is always 0, but the others are Ks
	one(17, '17'); // 17 alone isn't worth shortening
	many([17, 500, 1000, 2000], ['0K', '1K', '1K', '2K']); // but mix 17 with K's, and for comparison it's 0K
	one(117, '117'); // 117 alone needn't be shortened
	many([117, 1000, 2000], ['0K', '1K', '2K']); // but mix 117 in with K's, and we shorten it again
	many([117, 1000, 2000, 2200], ['0K', '1K', '2K', '2K']);
	// note the tests above show we're not using decimals at all. We may reconsider adding decimals,
	// which in particular would change the final call expected to ['.1K', '1K', '2K', '2.2K']
});

test('General: Small numbers left alone', function() {
	many([0, 1, 2], ['0', '1', '2']);
	many([5, 1, 0], ['5', '1', '0']);
	many([3, 9], ['3', '9']);
});

test('General: Gamut positive', function() {
	many([0], ['0']);
	many([1e0], ['1']);
	many([1e1], ['10'])
	many([1e2], ['100'])
	many([1e3], ['1K']);
	many([1e4], ['10K']);
	many([1e5], ['100K']);
	many([1e6], ['1M']);
	many([1e7], ['10M']);
	many([1e8], ['100M']);
	many([1e9], ['1B']);
	many([1e10], ['10B']);
	many([1e11], ['100B']);
	many([1e12], ['1T']);
	many([1e13], ['10T']);
	many([1e14], ['100T']);
});

test('General: Gamut negative', function() {
	many([0], ['0']);
	many([-1e0], ['-1']);
	many([-1e1], ['-10']);
	many([-1e2], ['-100']);
	many([-1e3], ['-1K']);
	many([-1e4], ['-10K']);
	many([-1e5], ['-100K']);
	many([-1e6], ['-1M']);
	many([-1e7], ['-10M']);
	many([-1e8], ['-100M']);
	many([-1e9], ['-1B']);
	many([-1e10], ['-10B']);
	many([-1e11], ['-100B']);
	many([-1e12], ['-1T']);
	many([-1e13], ['-10T']);
	many([-1e14], ['-100T']);
});

test('General: Trillion is the largest supported scale', function() {
	many([1000000000000000], ['1000T']);
});

test('General: National debt as mentioned in readme works', function() {
	many([17635936048534], ['18T']);
});

test('Many: Empty yields empty', function() {
	many([], []);
});

test('One: Unexpected values', function() {	
	one(undefined, undefined);
	one("Fragrant Banana", undefined);
});

test("Many: Unexpected values", function() {
	many(undefined, undefined);
	many("Palomino", undefined);
	many({A:1}, undefined);	
});

test('General: Negatives in mixed company', function() {
	many([1000, -1000], ['1K', '-1K']);
	many([1, -1000], ['0K', '-1K']);
	many([-1, 1000], ['0K', '1K']);

	many([-1000, 10000], ['-1K', '10K'])
	many([1000, -10000], ['1K', '-10K'])

	many([0, 1000, -1000], ['0', '1K', '-1K']);
	many([0, 1000000, -1000], ['0', '1M', '0M']);

});