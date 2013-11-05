var one = function(a, e) { strictEqual(jorts.one(a), e) };
var many = function(a, e) { deepEqual(jorts.many(a), e) };

test('Basic API', function() {
	one(1184, "1K");
	many([0, 1000, 2000], ['0', '1K', '2K']);
});

test('Small numbers', function() {
	many([0, 1, 2], ['0', '1', '2']);
	many([5, 1, 0], ['5', '1', '0']);
	many([3, 9], ['3', '9']);
});

test('Empty', function() {
	many([], []);
});

test('Unexpected one', function() {	
	one(undefined, undefined);
	one("Fragrant Banana", undefined);
});

test("Unexpected many", function() {
	many(undefined, undefined);
	many("Palomino", undefined);
	many({A:1}, undefined);	
});

test('Singles across the gamut', function() {
	many([0], ['0']);
	many([1], ['1']);
	many([1000], ['1K']);
	many([10000], ['10K']);
	many([100000], ['100K']);
	many([1000000], ['1M']);
	many([10000000], ['10M']);
	many([100000000], ['100M']);
	many([1000000000], ['1B']);
	many([10000000000], ['10B']);
	many([100000000000], ['100B']);

});

test('Jorts for negatives not well defined yet.', function() {
	many([1000, -1000], ['1K', '-1K']);
	many([1, -1000], ['0K', '-1K']);

});