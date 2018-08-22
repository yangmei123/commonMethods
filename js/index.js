/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-10 14:30:01
 * @version $Id$
 */

var checkStrObj = document.getElementById('checkStr');
var checkBtnObj = document.getElementById('checkBtn');
var checkResulutObj = document.getElementById('checkResult');

var baseStrObj = document.getElementById('baseStr');
var limitNumObj = document.getElementById('limitNum');
var elipsisStrObj = document.getElementById('elipsisStr');
var showResultObj = document.getElementById('showResult');
var limitShowObj = document.getElementById('limitShow');

var minObj = document.getElementById('min');
var maxObj = document.getElementById('max');
var randomObj = document.getElementById('random');
var randomResultObj = document.getElementById('randomResult');

var showTimeObj = document.getElementById('showTime');
var deadlineObj = document.getElementById('deadline');
var startObj = document.getElementById('start');
var stopObj = document.getElementById('stop');
var timer = null;

checkBtnObj.onclick = function() {
    // console.log(common.objProp(checkResulutObj));
    checkResulutObj.innerHTML = common.strHasValue(checkStrObj.value) ? '非空值' : '空值';
};
limitShowObj.onclick = function() {
    var baseStr = baseStrObj.value;
    var limitNum = parseInt(limitNumObj.value, 10);
    var elipsisStr = elipsisStrObj.value;
    showResultObj.innerHTML = common.strShowLimit(baseStr, limitNum, elipsisStr);
}
randomObj.onclick = function() {
    var min = parseInt(minObj.value, 10);
    var max = parseInt(maxObj.value, 10);
    if (max < min) return randomResultObj.innerHTML = '最小值不能大于最大值';
    randomResultObj.innerHTML = common.randomNum(min, max);
}

var systemDate = (new Date()).getTime();
var deadline = systemDate + (24 * 3600 * 1000) - 1000;
deadlineObj.innerHTML = (new Date()).getFullYear() + '年' + ((new Date()).getMonth() + 1) + '月' + (new Date()).getDate() + '日' 
+ (new Date()).getHours() + ':' + (new Date()).getMinutes()  + ':' + (new Date()).getSeconds();
startObj.onclick = function() {
    if (timer) clearInterval(timer);
    timer = setInterval(function() {
        systemDate = (new Date()).getTime();
        common.countdown(systemDate, deadline);
        showTimeObj.innerHTML = common.countdown(systemDate, deadline);
    }, 1000);
}
stopObj.onclick = function() {
    if (timer) clearInterval(timer);
}