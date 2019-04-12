// ==UserScript==
// @name         google search
// @updateURL    https://openuserjs.org/meta/zzzope/My_Script.meta.js
// @version      0.3
// @description  google toolkit
// @license      MIT; https://opensource.org/licenses/MIT
// @copyright    2014, me
// @author       zzzope
// @match        https://*.google.com/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	let domain = window.location.hostname;
	let firstLink = null
	if (domain.includes(".google.com")) {
		document.addEventListener("keyup", e => {
			if (e.target.tagName == "INPUT" || e.target.tagName == "TEXTAREA") {
				return null;
			}
			let key = e.key;
			switch (key) {
				case "a":
					firstLink = document.querySelector(".g .rc>.r>a")
					if (firstLink) {
						firstLink.click();
						e.preventDefault();
					}
					break;
			}
		});
	}
})();
