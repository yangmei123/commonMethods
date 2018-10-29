/**
 * 
 * @authors lml
 * @date    2018-08-10 14:30:01
 * @version $Id$
 */
// 判空
const doc = document;
var checkStrObj = doc.getElementById('checkStr');
var checkBtnObj = doc.getElementById('checkBtn');
var checkResulutObj = doc.getElementById('checkResult');

checkBtnObj.onclick = function() {
  // console.log(common.objProp(checkResulutObj));
  checkResulutObj.innerHTML = common.strHasValue(checkStrObj.value) ? '非空值' : '空值';
};

// 超出字符个数显示
var baseStrObj = doc.getElementById('baseStr');
var limitNumObj = doc.getElementById('limitNum');
var elipsisStrObj = doc.getElementById('elipsisStr');
var showResultObj = doc.getElementById('showResult');
var limitShowObj = doc.getElementById('limitShow');

limitShowObj.onclick = function() {
  var baseStr = baseStrObj.value;
  var limitNum = parseInt(limitNumObj.value, 10);
  var elipsisStr = elipsisStrObj.value;
  showResultObj.innerHTML = common.strShowLimit(baseStr, limitNum, elipsisStr);
}

// 随机数
var minObj = doc.getElementById('min');
var maxObj = doc.getElementById('max');
var randomObj = doc.getElementById('random');
var randomResultObj = doc.getElementById('randomResult');

randomObj.onclick = function() {
  var min = parseInt(minObj.value, 10);
  var max = parseInt(maxObj.value, 10);
  if (max < min) return randomResultObj.innerHTML = '最小值不能大于最大值';
  randomResultObj.innerHTML = common.randomNum(min, max);
}

// 倒计时
var showTimeObj = doc.getElementById('showTime');
var deadlineObj = doc.getElementById('deadline');
var startObj = doc.getElementById('start');
var stopObj = doc.getElementById('stop');
var timer = null;
var nowDate = new Date();
var systemDate = nowDate.getTime();
var deadline = systemDate + (24 * 3600 * 1000) - 1000;

deadlineObj.innerHTML = nowDate.getFullYear() + '年' + (nowDate.getMonth() + 1) + '月' + nowDate.getDate() + '日' +
  nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds();
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


