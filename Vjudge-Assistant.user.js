// ==UserScript==
// @name		Vjudge Assistant
// @namespace		http://tampermonkey.net/
// @version		beta-20200217
// @description:zh-cn	一键复制样例输入、输出
// @author		doublebit
// @match		https://vjudge.net/*
// @require  		https://code.jquery.com/jquery-3.4.1.min.js
// @require  		https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js
// ==/UserScript==

window.onload=setTimeout(function(){
$("#prob-ads").remove();
$('[rel="preload"]').remove();
$('[src*="google"]').remove();
$('[id*="google"]').remove();
$('[class*="google"]').remove();
$('[src*="/static/bundle/"]').remove();
$("script:contains('google')").remove();
//alert('first');
},3000);

//uncertain
window.onload=setTimeout(function(){/*
$('[rel="preload"]').remove();
$('[src*="google"]').remove();
$('[id*="google"]').remove();
$('[class*="google"]').remove();
$('[src*="/static/bundle/"]').remove();
$("script:contains('google')").remove(); */
$("dt:contains('Sponsor')").remove();
$("dd:contains('<!-- Prob desc tail -->')").remove();
//alert('second');
},240000);

function addID() {
	var elem;
	elem = $("dd pre");
    var size = elem.length;
	if (elem[size-2])
		elem[size-2].setAttribute("id","si");
	if (elem[size-1])
		elem[size-1].setAttribute("id","so");
}
addID();

var clipboard = new ClipboardJS('.copyBtn');

$("dt:contains('Sample Input'),dt:contains('样例输入'),.input .title,h4:contains('Sample Input')")
    .append("<button type='button' style='float:right' class='copyBtn' data-clipboard-target='#si'>Copy</button>");
$("dt:contains('Sample Output'),dt:contains('样例输出'),.output .title,h4:contains('Sample Output')")
    .append("<button type='button' style='float:right' class='copyBtn' data-clipboard-target='#so'>Copy</button>");
