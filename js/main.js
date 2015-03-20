var Game = function(){
	var init = function(){
		// var wrap = document.body.appendChild(document.createElement("div"));
		// wrap.style.width = '100%';
		// wrap.style.backgroundColor = '#fff';
		// wrap.style.height = window.screen.availHeight + 'px';
		GameStart();
	}
	return {
		init:init,
	}
}()
var GameStart = function(){
	window.map = Map.init();
	//初始化玩家信息
	window.mainPlayer = new player();
	mainPlayer.init(Config.player);
	GUI.renderInit();
	GUI.renderWood();
}
window.onload = function(){
	Game.init();
}

var GUI = {
	renderInit : function(){
		 //设置字体样式
	    map.font = "30px Courier New";
	    //设置字体填充颜色
	    map.fillStyle = "red";
	    //从坐标点(50,50)开始绘制文字
	    map.fillText(Config.gameName, 0, 30);
	},
	renderWood : function(){
		var obj = Array.prototype.shift.apply(arguments);
		var data = Config.map;
		map.moveTo(0,data.startGameH);
		map.lineTo(50,data.startGameH);
		map.lineTo(50,data.startGameH+50);
		map.lineTo(0,data.startGameH+50);
		map.lineTo(0,data.startGameH);
		map.font = "14px Courier New";
	    //设置字体填充颜色
	    map.fillStyle = "black";
	    //从坐标点(50,50)开始绘制文字
	    map.fillText("上下九", 3, data.startGameH+30);
		map.stroke();
	}
};