var player = function(){
	var _money,_remainday;
	var init = function(){
		var data = Array.prototype.shift.apply(arguments);
		_money = data.init.money;
		_remainday = data.init.remainDay;
	}
	var getMoney = function(){
		return _money;
	}
	var setMoney = function(money){
		_money = money;
	}
	var getRemainDay = function(){
		return _remainday;
	}
	var setRemainDay = function(){
		var arg = Array.prototype.shift.apply(arguments);
		if(arg === "-")_remainday --;
		if(arg === "+")_remainday ++;
		if(typeof arg === "number")_remainday = arg;
	}
	return {
		init : init,
		getMoney : getMoney,
		setMoney : setMoney,
		getRemainDay : getRemainDay,
		setRemainDay : setRemainDay,
	}
}