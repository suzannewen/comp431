// Inclass Fetch Exercise
// ======================
//
// Navigate to https://webdev-dummy.herokuapp.com/sample
//
// This endpoint returns a list of articles.  Your assignment is to
// write a function countWords that uses fetch() to query the endpoint,
// and return a map from the article id to the number of words in the
// article's text.
//
// Also write two "helper" functions that call this initial function.
//
// If there are any exceptions then fetch() will throw an error.
// Provide a "safe" version of the countWords function that always
// returns a map, which will be empty in the case of errors.
//
// Finally, write a function that returns the article id with the
// most number of words.
//
// Below I have provided you a template, you just need to fill in
// the implementation.
//
// Navigate to mocha-inclass-fetch.html to see if your implementation
// provides the expected results.
//
(function(exports) {

    'use strict'

    function countWords(url) {
        return fetch(url)
            .then( r => r.json() )
            .then( r => r.articles)
            .then( getMap )
    }

    function countWordsSafe(url) {
        return fetch(url)
            .then( countWords(url) )
            .catch ( {} ) // return empty object if error in fetch
    }

    function getMap(articleArray) {
        var numArray = [];
        var map = {};
        var index = 1;

        articleArray.forEach(function(article) {
            var text = article.text;
            var id = article._id;
            var words = text.split(" ");
            var length = (words.length);
            // numArray.push(length);
            map[id] = length;
            index++;
        })
        return map;
    }

    function getLargest(url) {
        var idMap;
        return fetch(url)
            .then( r => r.json() )
            .then( r => idMap = getMap(r.articles))
            .then( console.log(idMap) )
    }

    exports.inclass = {
        author: undefined,
        countWords, countWordsSafe, getLargest
    }

})(this);