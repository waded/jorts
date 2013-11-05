// jorts 0.0.2 (the version that does one thing)

(function() {

	var god = this;

	god.jorts = function() {};

	// Shorten one number in isolation. We recommend you find this number
	// a friend, and use jorts.many instead.
	var one = jorts.one = function(number) {
		var numbers = many([number]);
		return isArray(numbers) ? numbers[0] : undefined;
	};

	// Returns an ordered list of shortened numbers, given an ordered list
	// of numbers to be shortened.
	var many = jorts.many = function(numbers) {
		if (!isArray(numbers)) return undefined;
	
		var scale = scaleFn(floorLog10(max(numbers)));
		
		var result = [];
		for (var i = 0; i<numbers.length; i++)
		{		
			var n = numbers[i];
			if (isNaN(n)) return undefined;
			result.push(n === 0 ? "0" : scale(n));
		}
		return result;
	};

	// jorts.stretch: jorts.many with additional values to be used as the
	// domain, but not actually shortened.
	
	var max = function(list) {
		return Math.max.apply(this, list);
	}
	
	var floorLog10 = function(v) {
		// Add .0001 to dodge Math.log(1000) / Math.LN10 != 2 precision issue
		return Math.floor(Math.log(v + 0.0001) / Math.LN10);
	};
	
	var scaleFn = function(exp) {
		var s = {div:1, suffix:''};
		if (exp >= 9) s = {div:1000000000, suffix:'B'}
		else if (exp >= 6) s = {div:1000000, suffix:'M'}
		else if (exp >= 3) s = {div:1000, suffix:'K'}

		return function(number) {
			return Math.round(number / s.div) + s.suffix;
		};
	};
	
	var isArray = function(maybeArray) {
		return maybeArray instanceof Array;
	};

}.call(this));