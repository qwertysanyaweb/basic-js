module.exports = function createDreamTeam(arr) {
	if(!Array.isArray(arr) || !arr || arr == null || arr == undefined){
		return false;
	}
	let word = [];
	for (var i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) != 'undefined' && typeof(arr[i]) != 'object' && typeof(arr[i]) != 'number' && arr[i] !== null && typeof(arr[i]) != 'boolean') {
			if(!arr[i].replace( /\D/g, '')){
				word.push(arr[i].trim().substr(0,1).toUpperCase());
			}
		}
	}
	let newword = word.sort();
	let name = '';
	for (var i = 0; i < newword.length; i++) {
		name += word[i];
	}
	return name;
};
