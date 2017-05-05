'use strict'
let h = require('highland');

let arr = [1, 2, 3, 4];
h(arr).toArray((xs) => {
	console.log(xs);
});
h(arr).each(o => {
	console.log(o);
});
