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

var clipboard = new ClipboardJS('.copyBtn');

var i;

var input = $("dt:contains('Sample Input'),dt:contains('样例输入'),.input .title,h4:contains('Sample Input')");
var size_in = input.length;
for (i=0;i<size_in;i++) {
	input.eq(i).append("<button type='button' style='float:right' class='copyBtn' data-clipboard-target='#input_" + i + "'>Copy</button>");
	var sample_in = input.eq(i).next();//.find("pre").eq(0);
	sample_in.attr("id","input_" + i);
}

var output = $("dt:contains('Sample Output'),dt:contains('样例输出'),.output .title,h4:contains('Sample Output')");
var size_out = output.length;
for (i=0;i<size_out;i++) {
	output.eq(i).append("<button type='button' style='float:right' class='copyBtn' data-clipboard-target='#output_" + i + "'>Copy</button>");
	var sample_out = output.eq(i).next();//.find("pre").eq(0);
	sample_out.attr("id","output_" + i);
}
