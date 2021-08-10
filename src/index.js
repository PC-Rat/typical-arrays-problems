exports.min = function min(array) {
	return array == 0 ? 0 : Math.min(...array);
};

exports.max = function max(array) {
	return array == 0 ? 0 : Math.max(...array);
};

exports.avg = function avg(array) {
	return array.length == 0 ?
		0 : array.reduce((a, b) => b + a) / array.length;
};
