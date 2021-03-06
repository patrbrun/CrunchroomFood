// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/**
 * jQuery simple Ticker plugin
 *
 * Copyright (c) 2012 miraoto
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
!function(e){e.simpleTicker=function(t,i){var s={speed:1e3,delay:3e3,easing:"swing",effectType:"slide"},n={ul:"",li:"",initList:"",ulWidth:"",liHeight:"",tickerHook:"tickerHook",effect:{}},c=this;c.settings={};e(t),t=t;c.init=function(){switch(c.settings=e.extend({},s,i),n.ul=t.children("ul"),n.li=t.find("li"),n.initList=t.find("li:first"),n.ulWidth=n.ul.width(),n.liHeight=n.li.height(),t.css({height:n.liHeight}),n.li.css({top:"0",left:"0",position:"absolute"}),c.settings.effectType){case"fade":c.effect.fade();break;case"roll":c.effect.roll();break;case"slide":c.effect.slide()}c.effect.exec()},c.effect={},c.effect.exec=function(){n.initList.css(n.effect.init.css).animate(n.effect.init.animate,c.settings.speed,c.settings.easing).addClass(n.tickerHook),t.find(n.li).length>1&&setInterval(function(){t.find("."+n.tickerHook).animate(n.effect.start.animate,c.settings.speed,c.settings.easing).next().css(n.effect.next.css).animate(n.effect.next.animate,c.settings.speed,c.settings.easing).addClass(n.tickerHook).end().appendTo(n.ul).css(n.effect.end.css).removeClass(n.tickerHook)},c.settings.delay)},c.effect.fade=function(){n.effect={init:{css:{display:"block",opacity:"0"},animate:{opacity:"1",zIndex:"98"}},start:{animate:{opacity:"0"}},next:{css:{display:"block",opacity:"0",zIndex:"99"},animate:{opacity:"1"}},end:{css:{display:"none",zIndex:"98"}}}},c.effect.roll=function(){n.effect={init:{css:{top:"3em",display:"block",opacity:"0"},animate:{top:"0",opacity:"1",zIndex:"98"}},start:{animate:{top:"-3em",opacity:"0"}},next:{css:{top:"3em",display:"block",opacity:"0",zIndex:"99"},animate:{top:"0",opacity:"1"}},end:{css:{zIndex:"98"}}}},c.effect.slide=function(){n.effect={init:{css:{left:200,display:"block",opacity:"0"},animate:{left:"0",opacity:"1",zIndex:"98"}},start:{animate:{left:-200,opacity:"0"}},next:{css:{left:n.ulWidth,display:"block",opacity:"0",zIndex:"99"},animate:{left:"0",opacity:"1"}},end:{css:{zIndex:"98"}}}},c.init()},e.fn.simpleTicker=function(t){return this.each(function(){if(void 0==e(this).data("simpleTicker")){var i=new e.simpleTiecker(this,t);e(this).data("simpleTicker",i)}})}}(jQuery);


// [End Include All Plugins]