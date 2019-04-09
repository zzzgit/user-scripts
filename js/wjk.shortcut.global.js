// ==UserScript==
// @name         global-page-scroll-shortcut
// @namespace    http://jonkee.la/
// @version      0.1
// @description  shortcut for key w j k
// @author       jonkee
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	//頁面滾動
	function scroll(direction) {
		var h = window.innerHeight;
		if (direction < 0) {
			h = 0 - h;
		}
		var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		window.scroll(0, h + top);
	}
	//添加全局事件
	document.addEventListener("keyup", function (e) {
		if (e.target.tagName == "INPUT" || e.target.tagName == "TEXTAREA") {
			return null;
		}
		let key = e.key
		switch (key) {
			case "w":// 只能關閉由他自己打開的window
				window.close();
				break;
			case "j":
				scroll(1);
				break;
			case "k":
				scroll(-1);
				break;
		}
	});
})();