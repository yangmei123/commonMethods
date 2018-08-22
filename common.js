/**
* 
* @authors lml
* @date    2018-03-06 15:30:16
* @version $Id$
*/

var common = {
	strHasValue(str) {
		// 检验字符传是否有值，
		// string类型，非空，返回true
		// number类型，大于0，返回true
		// boolean类型，直接返回原值
		const re = /^\s*$/;
		if (typeof str == 'string' && !re.test(str) && str !== '' && str != null && str != undefined) {
			return true;
		} else if(typeof str == 'number' && str > 0) {
			return true
		} else if (typeof str == 'boolean') {
			return str;
		}
		return false;
	},
	isArr(arr, checkValue) {
		// 是否为数组
		// checkValue有值时，判断是否为非空数组
		let isArr = arr !== null && typeof arr == 'object' && arr.hasOwnProperty('length');
		return checkValue ? isArr && arr.length > 0 : isArr;
	},
	strShowLimit: function(str, limitNum, text) {
		// 按长度截取字符串，其它的用规定字符表示
		try{
			if (!common.strHasValue(str)) {
				throw '输入正确的被截取的字符串。';
			} 
			if (typeof limitNum !== 'number') {
				throw '截取长度需为number类型。';
			}
			if (str.length > limitNum ) {
				return str.slice(0, limitNum) + text;
			}
			return str;
		}
		catch (e) {
			return e;
		}
	},
	isOject: function (obj) {
		// 是否为对象
		return obj !== null && typeof obj == 'object';
	},
	randomNum: function(min, max) {
		// 获取随机值
		const re = /^[0-9]*$/;
		if( !re.test(min) || !re.test(max) || typeof min !== 'number' || typeof max !== 'number') {
			return '请输入正确的数值~';
		}
		return Math.floor(Math.random() * (max-min)) + min;
	},
	objProp: function(obj){
		// 拷贝对象
    var newObj = {};  
    for(var name in obj){  
      newObj[name] = obj[name];  
    }
    return newObj;
  },
  countdown: function(systemTime, deadline) {
  	// 倒计时
	  const date = deadline - systemTime;
	  //计算出小时数
	  const leave1 = date % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
	  let hours = Math.floor(leave1 / (3600 * 1000));
	  //计算相差分钟数
	  const leave2 = leave1 % (3600 * 1000);       //计算小时数后剩余的毫秒数
	  let minutes = Math.floor(leave2 / (60 * 1000));
	  //计算相差秒数
	  const leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
	  let seconds = Math.round(leave3 / 1000);

	  let remainingTime = ''; 
	  if (hours.toString().length === 1) {
	    hours = `0${hours}`;
	  }
	  if (minutes.toString().length === 1) {
	    minutes = `0${minutes}`;
	  }
	  if (seconds.toString().length === 1) {
	    seconds = `0${seconds}`;
	  }
	  remainingTime = hours < 0 || minutes < 0 || seconds < 0 ? '00 : 00 : 00' : `${hours} : ${minutes} : ${seconds}`;
	  return remainingTime;
   }
};