'use strict'
let date = new Date();
let year = process.argv[2] || date.getFullYear();
let month = process.argv[3] || (date.getMonth() + 1);
let day = process.argv[4] || date.getDate();
let monthFirstDayFrom1900 = 0;

//计算某一年离1900年的天数
for (let y = 1900; y < year; y++) {
	let oneYearDays = 365;
	if (y % 400 === 0 || ((y % 100 !== 0) && (y % 4 === 0))) {
		oneYearDays = 366;
	}
	monthFirstDayFrom1900 += oneYearDays;
}

//计算某个月之前的天数
for (let m = 1; m < month; m ++) {
	monthFirstDayFrom1900 += monthDayNum(year, m);
}

//获取星期几
function getWeekDay (allDays, d) {
  switch ((allDays + d) % 7) {
  	case 0: 
  	return '日';
  	case 1: 
  	return '一';
  	case 2: 
  	return '二';
  	case 3: 
  	return '三';
  	case 4: 
  	return '四';
  	case 5: 
  	return '五';
  	case 6: 
  	return '六';
  	default:
  	throw "weekday 不合法";
  }
}

console.log(`${year}年\t${month}月\t${day}日\t星期${getWeekDay(monthFirstDayFrom1900, day)}`);

console.log('一\t二\t三\t四\t五\t六\t日');

let dayStr = "";
let thisMonthDay = monthDayNum(year, +month);

//拼接日期
for (let eachDay = 1; eachDay <= thisMonthDay; eachDay++) {
		let weekDay = (monthFirstDayFrom1900 + eachDay) % 7;
		if (eachDay === 1) {
			let dayNum = weekDay - 1;
			if (dayNum < 0) {
				dayNum = 6;
			}
			dayStr += addTab2Str(eachDay, dayNum);
		} else if (weekDay === 1) {
			dayStr += eachDay;
		} else if (weekDay === 0){
			dayStr += '\t' + eachDay + '\n';
		} else {
			dayStr += '\t' + eachDay;
		}
}

console.log(dayStr);

function addTab2Str (str, num) {
	for (let i = 0; i < num; i++) {
		str = '\t' + str;
	}
	return str;
}

//传入年份和月份，返回这个月的天数
function monthDayNum(y, m) {
	switch (m) {
		case 1: 
		return 31;
		case 2: 
		if (y % 400 === 0 || ((y % 100 !== 0) && (y % 4 === 0))) {
			return 29;
		} else {
			return 28;
		}
		case 3: 
		return 31;
		case 4: 
		return 30;
		case 5: 
		return 31;
		case 6: 
		return 30;
		case 7: 
		return 31;
		case 8: 
		return 31;
		case 9: 
		return 30;
		case 10: 
		return 31;
		case 11: 
		return 30;
		case 12: 
		return 31;
		default: 
		throw "month 不合法";
	}	
}
