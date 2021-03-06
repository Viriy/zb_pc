﻿(function(doc, win) {
        if(doc.documentElement.currentStyle) {
            var user_webset_font=doc.documentElement.currentStyle['fontSize'];
        }
        else {
            var user_webset_font=getComputedStyle(doc.documentElement,false)['fontSize'];
        }
        var xs=parseFloat(user_webset_font)/16;
        var view_jsset_font,result_font;
        var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        clientWidth,
        recalc = function() {
            clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            if(!doc.addEventListener) return;
            if(clientWidth<640){
                view_jsset_font=75 * (clientWidth / 750);
                result_font=view_jsset_font/xs;
                docEl.style.fontSize = result_font + 'px';
                }
            else{
                docEl.style.fontSize = 64 + 'px';
                }
        };
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(function(){
    $("body").css('visibility', 'visible');
})