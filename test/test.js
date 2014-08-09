var one = function(a, e) { strictEqual(jorts.one(a), e) };
var many = function(a, e) { deepEqual(jorts.many(a), e) };

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

test('General: Gamut', function() {
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
	many([1000000000000], ['1T']);
	many([10000000000000], ['10T']);
	many([100000000000000], ['100T']);			
});

test('General: Trillion is the largest supported scale', function() {
	many([1000000000000000], ['1000T']);
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

test('Negatives: Not well defined yet so allowing this to fail', function() {
	many([1000, -1000], ['1K', '-1K']);
	many([1, -1000], ['0K', '-1K']);
});