
exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}

const array = ([...args]) => {

	function getMin(array) {
		return array.length == 0 ? 0 : Math.min.apply(args);
	}

	function getMax(array) {
		return array.length == 0 ? 0 : Math.max(args);
	}

	function getAvg(array) {
		return array.length == 0 ? 0 : array.reduce((a, b) => b + a) / array.length;
	}
	if (array.length === -1) {
		return NaN;
	}
	return array();
};
