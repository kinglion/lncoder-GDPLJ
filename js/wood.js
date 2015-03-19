var wood = function(){
	var create = fucntion(action,fn){
		var _initialize;
		_initialize = function(args){
			fn.apply(this,args);
		}
		var getCount = function(){
			return action.onCount;
		}
		var getCode = function(){
			return action.onCode;
		}
		var getName = function(){
			return action.name;
		}
		return {
			getCount : getCount,
			getCode : getCode,
			getName : getName,
		}
	}
	return{
		create : create,
	}
}