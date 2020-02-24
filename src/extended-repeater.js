module.exports = function repeater(str, options) {
	var all = [];
	var repeat = options['repeatTimes'];
	if(repeat === undefined){
		repeat = 1;
	}
	var separator = '+';
	var addition = options['addition'];
	var additionRepeatTimes = options['additionRepeatTimes'];
	var additiontext = '';

	if(!addition){
		addition = '';
	}

	if(additionRepeatTimes > 1){
		for(var i = 0; i < additionRepeatTimes; i++){
			if(options['additionSeparator']){
				additiontext += (options['additionSeparator'] + addition);
			}else{
				additiontext += addition;
			}
		}
		addition = additiontext;
	}


	if(options['separator']){
		separator = options['separator'];
	}

	for (var i = 0; i < repeat; i++) {
		if(i == repeat - 1){
			all += str + addition;
		}else{
			all += (str + addition + separator);
		}

	}

	return all;
};
