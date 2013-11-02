// jorts 0.0.1 (the version that does almost nothing)

(function() {

	var god = this;

	god.jorts = function() {
	};

	// Shorten one number in isolation. We recommend you find this number
	// a friend, and use jorts.many instead.
	var one = jorts.one = function(number) {
		// change the type, but otherwise fail intentionally
		return number + '';
	};

	// Returns an ordered list of shortened numbers, given an ordered list
	// of numbers to be shortened.
	var many = jorts.many = function(numbers) {
		var result = [];
		for (var i = 0; i<numbers.length; i++)
		{
			result.push(one(numbers[i]));
		}
		return result;
	};

	// jorts.stretch: jorts.many with additional values to be used as the
	// domain, but not actually shortened.

}.call(this));