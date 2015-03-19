var Game = function(){
	var init = function(){
		var wrap = document.body.appendChild(document.createElement("div"));
		wrap.style.width = '100%';
		wrap.style.backgroundColor = '#fff';
		wrap.style.height = window.screen.availHeight + 'px';
	}
	return {
		init:init,
	}
}
var GameStart = function(){
	//初始化玩家信息
	window.mainPlayer = new player();
	mainPlayer.init();

}
window.onload = function(){
	Game.init();
}

var GUI = {
	initRender = function(){
		
	}
}