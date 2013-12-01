// ==UserScript==
// @name       Douban.FM Cleaner
// @namespace  lastr2d2
// @version    2.0
// @description  Keep the page simple. (douban.fm)
// @include    http://douban.fm/*
// @author     Wayne Wang(lastr2d2(at)gmail.com) 
// ==/UserScript==

var DoubanFMAdRemover = function(){
    this.elementsToHide = ['fm-clients','fm-footer','fm-sharing','user_info','fm-app','fm-rotate-ad'];
    this.elementsToRemove = [];
};

DoubanFMAdRemover.prototype.hideElement = function(elementId){
    var element = document.getElementById(elementId);
    if(element === undefined || element === null){
        return;
    }
    element.style.display = 'none';
};

DoubanFMAdRemover.prototype.removeElement = function(elementId){
    var element = document.getElementById(elementId);
    if(element === undefined || element === null){
        return;
    }
    element.parentNode.removeChild(element);
};

DoubanFMAdRemover.prototype.Main = function(){
    var i;
    for( i =0; i<this.elementsToHide.length; i ++){
        this.hideElement(this.elementsToHide[i]);
    }
    
    for(i = 0; i<this.elementsToRemove.length; i ++){
        this.removeElement(this.elementsToRemove[i]);
    }
    
	// remove register link and upgrade link in anonymous login section
	var anonymousLoginSection = document.getElementsByClassName('fm-user-login')[0];
	if(anonymousLoginSection != undefined){
		var loginLink = undefined;
		for (var i = 0; i < anonymousLoginSection.childNodes.length; i++) {
			if (anonymousLoginSection.childNodes[i].className == "lnk-login") {
				loginLink = anonymousLoginSection.childNodes[i];
				break;
			}
		}
		if(loginLink != undefined){
			anonymousLoginSection.innerHTML = loginLink.outerHTML;
		}
		anonymousLoginSection.style.width = "auto";
	}
    
    // remove all channel non-default list
    var channels = document.getElementsByClassName('chl_section');
    for(var i=0; i<channels.length; i++){
        channels[i].style.display="none";
    }
    
};

var worker = new DoubanFMAdRemover();
worker.Main();