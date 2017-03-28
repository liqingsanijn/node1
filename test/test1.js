'use strict'
let _ = require('lodash');
_.forEachRight([1, 2], value => {
	console.log(value);
});
_.each({a: 1,b: 2}, (v, k, i) => {
	console.log(v, k, i);
});
console.log(_.orderBy([{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}], [e => {
	return e.a;
}, e => {
	return e.b;
}], ['desc', 'desc']));
let all = 16;
for (let i = 1;i <= 10; i++) {
	all += all*0.064;
}
console.log(all);
all = 6;
for (let i = 1;i <= 7; i++) {
	all += all*0.064;
}
console.log(all);
