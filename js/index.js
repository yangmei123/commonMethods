/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-10 14:30:01
 * @version $Id$
 */
// 判空
var checkStrObj = document.getElementById('checkStr');
var checkBtnObj = document.getElementById('checkBtn');
var checkResulutObj = document.getElementById('checkResult');

checkBtnObj.onclick = function() {
  // console.log(common.objProp(checkResulutObj));
  checkResulutObj.innerHTML = common.strHasValue(checkStrObj.value) ? '非空值' : '空值';
};

// 超出字符个数显示
var baseStrObj = document.getElementById('baseStr');
var limitNumObj = document.getElementById('limitNum');
var elipsisStrObj = document.getElementById('elipsisStr');
var showResultObj = document.getElementById('showResult');
var limitShowObj = document.getElementById('limitShow');

limitShowObj.onclick = function() {
  var baseStr = baseStrObj.value;
  var limitNum = parseInt(limitNumObj.value, 10);
  var elipsisStr = elipsisStrObj.value;
  showResultObj.innerHTML = common.strShowLimit(baseStr, limitNum, elipsisStr);
}

// 随机数
var minObj = document.getElementById('min');
var maxObj = document.getElementById('max');
var randomObj = document.getElementById('random');
var randomResultObj = document.getElementById('randomResult');

randomObj.onclick = function() {
  var min = parseInt(minObj.value, 10);
  var max = parseInt(maxObj.value, 10);
  if (max < min) return randomResultObj.innerHTML = '最小值不能大于最大值';
  randomResultObj.innerHTML = common.randomNum(min, max);
}

// 倒计时
var showTimeObj = document.getElementById('showTime');
var deadlineObj = document.getElementById('deadline');
var startObj = document.getElementById('start');
var stopObj = document.getElementById('stop');
var timer = null;
var systemDate = (new Date()).getTime();
var deadline = systemDate + (24 * 3600 * 1000) - 1000;

deadlineObj.innerHTML = (new Date()).getFullYear() + '年' + ((new Date()).getMonth() + 1) + '月' + (new Date()).getDate() + '日' +
  (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds();
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

// 下拉框提示
var inputBox = document.getElementById('inputBox');
var seletedList = document.getElementById('seletedList');
var noteList = [
  { id: 1, value: 'abc' },
  { id: 2, value: 'apple' },
  { id: 3, value: 'banner' },
  { id: 4, value: 'cart' },
  { id: 5, value: 'call' },
  { id: 6, value: 'cake' },
  { id: 7, value: 'dotted' },
  { id: 8, value: 'dog' },

];
var index = 0;

function getNoteList(str) {
  var inner = '';
  noteList.forEach((data) => {
    var dataInner = '';
    if (data.value.indexOf(str) !== -1) {
      var arrStr = data.value.split('');
      arrStr.forEach((dstr) => {
        if (dstr === str) {
          dataInner += '<b>' + dstr + '</b>'
        } else {
          dataInner += dstr;
        }
      })
      inner += '<li data-id="' + data.id + '"><span>' + dataInner + '</span></li>';
    }
  });
  seletedList.innerHTML = inner;
  seletedList.style.display = 'block';
};

seletedList.style.width = inputBox.offsetWidth + 'px';
inputBox.oninput = function(e) {
  getNoteList(e.data);
}
var isUp = false;
window.onkeydown = function(e) {
  var liList = document.getElementById('seletedList').children;
  var liListArr = Array.prototype.slice.call(liList, 0);
  if (event.keyCode === 40 && index < liListArr.length) {
    liListArr.forEach((data, id) => {
      if (id === index) {
        liList[id].style.background = '#ccc';
      } else {
        liList[id].style.background = 'none';
      }
    })

    seletedList.scrollTop = index === 0 ? 0 : seletedList.scrollTop + 38;
    index++;
    isUp = true;
  }
  if (event.keyCode === 38 && (index > 0 || index === 0)) {
    index = index === liListArr.length ? index - 1 : index;
    liListArr.forEach((data, id) => {
      if (id === index) {
        liList[id].style.background = '#ccc';
      } else {
        liList[id].style.background = 'none';
      }
    })

    seletedList.scrollTop = index === 0 ? 0 : index * 38;
    index--;
    isUp = false;
  }
  if (event.keyCode === 13 && liListArr.length !== 0) {
    var id = liList[isUp ? index -1 : index + 1].getAttribute('data-id');
    var value = '';
    noteList.forEach((data) => {
      if (data.id === Number(id)) {
        value = data.value;
      }
    });
    inputBox.value = value;
    seletedList.style.display = 'none';
    index = 0;
  }
}

// 模拟alert，confirm，prompt
// alert框
var alertObj = document.getElementById('alert');
var alertBox = document.getElementById('alert-box');
var alertOk = document.getElementById('alert-ok');
var alertMsgObj = document.getElementById('alert-msg');
var alertMsg = '';

function alert(msg) {
  alertBox.children[0].innerHTML = msg;
  alertBox.style.display = 'block';
}
alertObj.onclick = function() {
  alert('alert消息提示');
};
alertOk.onclick = function() {
  alertBox.style.display = 'none';
};

// confirm框
var confirmObj = document.getElementById('confirm');
var confirmBox = document.getElementById('confirm-box');
var confirmOk = document.getElementById('confirm-ok');
var confirmCancle = document.getElementById('confirm-cancle');

function showAlert(e, msg) {
  e.stopPropagation();
  confirmBox.style.display = 'none';
  alert(msg);
}
function comfirm(msg) {
  confirmBox.children[0].innerHTML = msg;
  confirmBox.style.display = 'block';
}
confirmObj.onclick = function() {
  comfirm('我是confirm信息提示~');
};
confirmOk.onclick = function(e) {
  showAlert(e, 'confirm中你选择了确认确认确认确认确认确认确认确认！');
};
confirmCancle.onclick = function(e) {
  showAlert(e, 'confirm中你选择了取消取消取消取消取消取消取消取消！');
};

// prompt框
var promptObj = document.getElementById('prompt');
var promptBox = document.getElementById('prompt-box');
var promptOk = document.getElementById('prompt-ok');
var promptCancle = document.getElementById('prompt-cancle');

function prompt(text, defaultInput) {
  promptBox.children[0].innerHTML = text;
  promptBox.children[1].value = defaultInput;
  promptBox.style.display = 'block';
}
function promptAlert(ev, text) {
  ev.stopPropagation();
  promptBox.style.display = 'none';
  showAlert(text);
}

promptObj.onclick = function() {
  prompt('我是prompt信息提示~', '默认显示的文案就好的');
};
promptOk.onclick = function(e) {
  promptAlert(e, 'prompt中你选择了确认！输入的文案为:' + promptBox.children[1].value);
};
promptCancle.onclick = function(e) {
  promptAlert(e, 'prompt中你选择了取消！');
};

function drag(domObj) {
  domObj.onmousedown = function (e) {
    domObj.onmousemove = function (e) {
      domObj.style.left = e.clientX + 'px';
      domObj.style.top = e.clientY + 'px';
    }
  }
  domObj.onmouseup = function (e) {
    domObj.onmousemove = null;
  }
}
drag(alertBox);
drag(confirmBox);
drag(promptBox);

