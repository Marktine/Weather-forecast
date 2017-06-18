var express = require('express');
var request = require('request');
var router = express.Router();
var infomations = "";
var appid = "472d1bf52628a1cbcfbcff1b03ad80dc";
var CityID = "1566083";
var url = "http://api.openweathermap.org/data/2.5/weather?id=" + CityID + "&units=metric&appid=" + appid;

request.get(url, function(error, response, body){
	if(error && response.statusCode !== 200)
	{
		console.log(error);
	}
	else{
		informations = JSON.parse(body)
		console.log(informations);
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  		title: 'Weather forecast',
  		name: 'Mark',
  		info: informations
	});
});

module.exports = router;
