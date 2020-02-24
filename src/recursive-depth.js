module.exports = class DepthCalculator {
	calculateDepth(arr) {
		function test(arr) {
			return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
				return Math.max(max, test(item));
			}, 0) : -1);
		}
		return test(arr);
	}
};
