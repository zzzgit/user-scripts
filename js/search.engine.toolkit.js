// ==UserScript==
// @name         search engine toolkit
// @updateURL    https://openuserjs.org/meta/zzzope/My_Script.meta.js
// @version      0.4
// @description  Esc and / shortcut support for baidu and wiki
// @license      MIT; https://opensource.org/licenses/MIT
// @copyright    2014, me
// @author       zzzope
// @match        https://*.baidu.com/*
// @match        https://*.wikipedia.org/*
// @match        https://*.wiktionary.org/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	let domain = window.location.hostname;
	let kw_input;//搜索框
	if (domain.indexOf("baidu.com") > -1) {//百度
		kw_input = document.getElementById("kw");
	}
	else if (domain.indexOf("wikipedia.org") > -1) {//wikitionary
		kw_input = document.getElementById("searchInput");
	}
	else if (domain.indexOf("wiktionary.org") > -1) {//wikitionary
		kw_input = document.getElementById("searchInput");
	}

	kw_input.addEventListener("keyup", e => {
		let key = e.key;
		if (key === "Escape") {
			kw_input.blur()
			e.stopPropagation()
		}
	}, true)

	document.addEventListener("keydown", e => {
		let key = e.key;
		switch (key) {
			case "/":
				kw_input.focus();
				kw_input.select();
				e.preventDefault();
				break;
		}
	});
})();


if (false && domain.indexOf("baidu.com") > -1) {//百度
	document.addEventListener("keydown", function (e) {
		var ikeyCode = e.keyCode;
		switch (ikeyCode) {
			case 78: //n
				document.querySelector("#page > a:last-child").click();//百度
				break;
		}
	});
} 
