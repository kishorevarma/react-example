var express = require('express');
var router = express.Router();
var dataObj = require("./data.json");

var RESULT_COUNT = 6;

/**
 * [sliceData splice the articles ]
 * @return {[json]} [this funcion doesn't belongs to here 
 *  but because we have only one util function I kept it here]
 */
function sliceData(pageId) {
	var start = (pageId - 1) * RESULT_COUNT;
	var end = pageId * RESULT_COUNT;

	if(pageId === 'NaN') {
		return [];
	}

	return dataObj.articles.slice(start, end);
}

router.get('/', function(req, res) {
	res.render('index');
});

router.get('/articles/page/:id', function(req,res) {
	 var pageNumber =  parseInt(req.params.id);
	 res.json(sliceData(pageNumber));
});

module.exports = router;