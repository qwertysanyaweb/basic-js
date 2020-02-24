module.exports = function countCats(cat) {
	var all = [];
	var kol = cat.length;
	if(kol < 1){return 0;}
	for (var i = 0; i < kol; i++) {
		for (var k = 0; k < cat[i].length; k++) {
			all.push(cat[i][k])
		}
	}
	var counts = {};
	for(var i=0;i< all.length;i++)
	{
		var key = all[i];
		counts[key] = (counts[key])? counts[key] + 1 : 1 ;
	}
	if(!counts['^^']){return 0;}
	return counts['^^'];
};
