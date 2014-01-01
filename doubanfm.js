// ==UserScript==
// @name       Douban.FM Cleaner
// @namespace  lastr2d2
// @version    3.0
// @description  Keep the page simple. (douban.fm)
// @include    http://douban.fm/*
// @author     Wayne Wang(lastr2d2(at)gmail.com) 
// ==/UserScript==

(function(){
var DoubanFMAdRemover = function(){};

// utility method, create style tag in head
DoubanFMAdRemover.prototype.addGlobalCSSRules = function(css){
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if(!head) return;
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
};

// main
DoubanFMAdRemover.prototype.Main = function(){
    var elementsToHide, css;
    
    elementsToHide = [
    // copyright and links
    '#fm-footer',
    // sharing
    '#fm-sharing',
    // user info (logged in)
    '#user_info',
    // app suggestion
    '#fm-section-app-entry',
    // ad
    'iframe','#fm-rotate-ad',
    // all channels except personal channels
    '.chl_section'];
    
    // hide elements
    css = elementsToHide.join() + "{display:none;}";

    // remove register link and upgrade link in anonymous login section
    css += '.fn-user-login {visibility:hidden;} .lnk-login{visibility:visible;}';
    
    this.addGlobalCSSRules(css);
};

var worker = new DoubanFMAdRemover();
worker.Main();
})();
