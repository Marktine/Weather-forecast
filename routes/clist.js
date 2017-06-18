var express = require('express');
var router = express.Router();
var fs = require('fs');
var cityList = "";
console.log('reading files.');

fs.readFile(__dirname + '/../CityList.txt', function(error, data){
	if(error)
	{
		console.log("Error");
		console.log(error.message);
	}
	else
	{
		cityList = data.toString('utf8');
	}
});

console.log("Done reading");

/* GET home page. */
router.get('/', function(req, res, next){
	res.render('clist', {
		title:'List of forecast Cities',
		ct: cityList
	});
});
module.exports = router;
