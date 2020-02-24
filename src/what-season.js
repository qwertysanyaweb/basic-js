module.exports = function getSeason(month) {
	if(typeof(month) == 'object'){
		if(month[0] || month > ['John']){
			throw Error();
		}
	}
	if(month === undefined){
		return 'Unable to determine the time of year!';
	}
	if(typeof(month) == 'array' || typeof(month) == 'number' || typeof(month) == 'function' || month == 'foo'){
		throw Error();
	}
	if(typeof(month) == 'string'){
		return 'Unable to determine the time of year!';
	}
	var month = month.getMonth();
	if(month == 11 || month == 0 || month == 1){
		return 'winter';
	}
	if(month == 2 || month == 3 || month == 4){
		return 'spring';
	}
	if(month == 5 || month == 6 || month == 7){
		return 'summer';
	}
	if(month == 8 || month == 9 || month == 10){
		return 'autumn';
	}
};
