// ==UserScript==
// @name				Vjudge Assistant
// @namespace			http://tampermonkey.net/
// @version				beta
// @description:zh-cn	一键复制样例输入、输出
// @author				doublebit
// @match				https://vjudge.net/*
// @require  			https://code.jquery.com/jquery-3.4.1.min.js
// @require  			https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js
// ==/UserScript==

//去广告
$("#prob-ads").remove();
$("dd:contains('<!-- Prob desc tail -->')").remove();
$("dt:contains('Sponsor')").remove();

//加id，方便定位
function addID() {
	var elem;
	elem = document.getElementsByClassName("sio")[0];
	if (elem)
		elem.setAttribute("id","si");
	elem = document.getElementsByClassName("sio")[1];
	if (elem)
		elem.setAttribute("id","so");
}
addID();

//实例化Clipboard
var clipboard = new ClipboardJS('.copyBtn');

//添加按钮
$("dt:contains('Sample Input')").append("<button type='button' style='float:right' class='copyBtn' data-clipboard-target='#si'>Copy</button>");
$("dt:contains('Sample Output')").append("<button type='button' style='float:right' class='copyBtn' data-clipboard-target='#so'>Copy</button>");
