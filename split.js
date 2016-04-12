'use strict';

var text = require('flux/text');

/**
 * Code block template.
 *
 */
function run(In, Splitter) {
	return {
		Out: text.Split(In, Splitter)
	};
}

module.exports = {
    run: run
};
