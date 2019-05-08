// ==UserScript==
// @name         wikipedia toolkit
// @version      1.0.2
// @updateURL    https://openuserjs.org/meta/zzzope/My_Script.meta.js
// @description  nothing
// @author       zzzope
// @match        https://*.wikipedia.org/*
// @match        https://*.wiktionary.org/*
// @license      MIT; https://opensource.org/licenses/MIT
// @copyright    2014, me
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	let url = window.location.href
	let isDictionary = url.includes("wiktionary")
	let link = null
	// short cuts
	document.addEventListener("keydown", event => {
		if (event.target.tagName === "INPUT") {
			return null
		}
		switch (event.key) {
			case "e":
				link = document.querySelector(".interlanguage-link.interwiki-en a")
				break;
			case "h":
				link = document.querySelector(".interlanguage-link.interwiki-zh a")
				break;
			case "j":
				link = document.querySelector(".interlanguage-link.interwiki-ja a")
				break;
			case "k":
				link = document.querySelector(".interlanguage-link.interwiki-ko a")
				break;
			case "m":
				link = document.querySelector(".interlanguage-link.interwiki-ms a")
				break;
			case "t":
				link = document.querySelector(".interlanguage-link.interwiki-th a")
				break;
			case "v":
				link = document.querySelector(".interlanguage-link.interwiki-vi a")
				break;

			default:
				console.log()
		}
		if (link) {
			link.click()
			link = null
		}
	})
	// redirect

	if (window.location.hostname.includes(".wikipedia.org")) {
		let chLink = document.querySelector(".interlanguage-link.interwiki-zh a")
		if (chLink && chLink.href) {
			chLink.href = chLink.href.replace(/org\/.*\//, "org/zh-tw/")
		}
	}
	if (window.location.hostname === "zh.wikipedia.org") {
		//if (url.includes(".org/zh-")) {
			if (!url.includes("zh-tw")) {
				window.location = url.replace(/org\/.*\//, "org/zh-tw/")
			}
		//}
	}
})();
