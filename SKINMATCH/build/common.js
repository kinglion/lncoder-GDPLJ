!function(t){function n(i){if(e[i])return e[i].exports;var a=e[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n){!function(){var t=$("#nav"),n=t.find(".nav-item"),e=t.find(".nav-sub-item");n.each(function(t,n){$(n).on("mouseover",function(){$(this).addClass("active")}).on("mouseout",function(){$(this).removeClass("active")})}),e.each(function(t,n){$thirdLayout=$(n).find(".child-subject ul"),$(n).find(".subject").each(function(t,e){$(e).on("mouseover",function(t){$(n).find(".subject").each(function(t,n){var e=$(n).find("a").get(0),i=e.innerHTML;/&gt;&gt;/gi.test(i)&&(e.innerHTML=i.replace(" &gt;&gt;","")),$(n).removeClass("active")});var i=$(e).find("a").get(0),a=i.innerHTML;if(i.innerHTML=a+" >>",$(e).addClass("active"),!$(e).data("list"))return void $thirdLayout.html("");var o=JSON.parse($(e).data("list").replace(/\'/g,'"'));$thirdLayout.html(""),o.forEach(function(t){$thirdLayout.append('<li><a href="'+t.link+'">'+t.title+"</a></li>")})})})})}()}]);