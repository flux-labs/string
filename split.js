'use strict';

var text = require('flux/text');

/**
 * Split string into substrings
 * @param {List} Original List
 * @param {Splitter} String to split with
 *
 * @return{Sublists} new list of strings
 */
function run(String, Splitter) {
	
	var strings = [];

	// if the splitter is a list
	if(Array.isArray(Splitter)){
		for(var i = 0; i < Splitter.length; i++){
			strings.push(text.Split(String,Splitter[i]));
		}
		return { Output: strings};
	} else {
		return {
			Output: text.Split(String, Splitter)
		};	
	}
}


module.exports = {
    run: run
};
