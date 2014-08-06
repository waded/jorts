// jorts.js
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD anonymous module
		define(['exports'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(exports);
	} else {
		// Browser global
		factory((root.jorts = {}));
	}
}(this, function (exports) {

	// Shorten one number in isolation. We recommend you find this number
	// a friend, and use many instead.
	exports.one = function(number) {
		var numbers = exports.many([number]);
		return isArray(numbers) ? numbers[0] : undefined;
	};

	// Returns an ordered list of shortened numbers, given an ordered list
	// of numbers to be shortened.
	exports.many = function(numbers) {
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

	// exports.stretch = function(numbers, additionalDomain) {
	// 	// like many, but with additionalDomain values that are used in the domain but
	// 	// needn't be returned in the shortened list
	// };

	var max = function(list) {
		return Math.max.apply(this, list);
	};
	
	var floorLog10 = function(v) {
		// Add .0001 to dodge Math.log(1000) / Math.LN10 != 2 precision issue
		return Math.floor(Math.log(v + 0.0001) / Math.LN10);
	};
	
	var scaleFn = function(exp) {
		var s = {div:1, suffix:''};
		if (exp >= 9) s = {div:1e9, suffix:'B'}
		else if (exp >= 6) s = {div:1e6, suffix:'M'}
		else if (exp >= 3) s = {div:1e3, suffix:'K'}

		return function(number) {
			return Math.round(number / s.div) + s.suffix;
		};
	};
	
	var isArray = function(maybeArray) {
		return maybeArray instanceof Array;
	};

}));

