!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){i(1),i(2),i(3)},function(t,e){!function(){function t(t){0==t?s.hide():s.show(),t==n.length-1?r.hide():r.show(),n.each(function(e,i){t==e?$(i).show():$(i).hide()})}var e=0,i=$(".u-star-product"),n=i.find(".i-star-list"),s=i.find(".arrow-left"),r=i.find(".arrow-right");t(e),s.on("click",function(){e--,e=e<=0?0:e,t(e)}),r.on("click",function(){e++,e=e>=n.length-1?n.length-1:e,t(e)})}()},function(t,e){+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),s=n.data("bs.carousel"),r=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e),a="string"==typeof e?e:r.slide;s||n.data("bs.carousel",s=new i(this,r)),"number"==typeof e?s.to(e):a?s[a]():r.interval&&s.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),n="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(n&&!this.options.wrap)return e;var s="prev"==t?-1:1,r=(i+s)%this.$items.length;return this.$items.eq(r)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){if(!this.sliding)return this.slide("next")},i.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},i.prototype.slide=function(e,n){var s=this.$element.find(".item.active"),r=n||this.getItemForDirection(e,s),a=this.interval,o="next"==e?"left":"right",l=this;if(r.hasClass("active"))return this.sliding=!1;var c=r[0],h=t.Event("slide.bs.carousel",{relatedTarget:c,direction:o});if(this.$element.trigger(h),!h.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var u=t(this.$indicators.children()[this.getItemIndex(r)]);u&&u.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:c,direction:o});return t.support.transition&&this.$element.hasClass("slide")?(r.addClass(e),r[0].offsetWidth,s.addClass(o),r.addClass(o),s.one("bsTransitionEnd",function(){r.removeClass([e,o].join(" ")).addClass("active"),s.removeClass(["active",o].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(s.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(d)),a&&this.cycle(),this}};var n=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this};var s=function(i){var n,s=t(this),r=t(s.attr("data-target")||(n=s.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));if(r.hasClass("carousel")){var a=t.extend({},r.data(),s.data()),o=s.attr("data-slide-to");o&&(a.interval=!1),e.call(r,a),o&&r.data("bs.carousel").to(o),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",s).on("click.bs.carousel.data-api","[data-slide-to]",s),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery)},function(t,e){!function(){var t=$(".u-lc-gallery");if(!(t.length<=0)){var e=t.find(".pic img"),i=t.find("li");i.each(function(t,i){$(i).on("mouseover",function(){var t=$(this).data("img");e.attr("src",t)})})}}()}]);