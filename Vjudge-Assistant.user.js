// ==UserScript==
// @name		Vjudge Assistant
// @namespace		https://github.com/doublebit015/Vjudge-Assistant
// @version		1.0.1
// @description:zh-cn	一键复制样例输入、输出
// @author		doublebit
// @match		https://vjudge.net/*
// @require  		https://code.jquery.com/jquery-3.4.1.min.js
// @require  		https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js
// ==/UserScript==

var i;
var adscomeup = false;
var clipboard = new ClipboardJS('.copyBtn');

var input = $("dt:contains('Sample Input'),dt:contains('样例输入'),.input .title,h4:contains('Sample Input')");
var size_in = input.length;
for (i=0;i<size_in;i++) {
	input.eq(i).append("<button type='button' style='float:right' class='copyBtn' data-clipboard-target='#input_" + i + "'>Copy</button>");
	var sample_in = input.eq(i).next();
	sample_in.attr("id","input_" + i);
}

var output = $("dt:contains('Sample Output'),dt:contains('样例输出'),.output .title,h4:contains('Sample Output')");
var size_out = output.length;
for (i=0;i<size_out;i++) {
	output.eq(i).append("<button type='button' style='float:right' class='copyBtn' data-clipboard-target='#output_" + i + "'>Copy</button>");
	var sample_out = output.eq(i).next();
	sample_out.attr("id","output_" + i);
}

$("#prob-ads").remove();
window.onload = function() {
    $('[rel="preload"]').remove();
    $('[src*="google"]').remove();
    $('[id*="google"]').remove();
    $('[class*="google"]').remove();
    $('[src*="/static/bundle/"]').remove();
    $("script:contains('google')").remove();
}

$("body").on('DOMNodeInserted',"dt,dd",function(e) {
    if($(this).text() == "Sponsor") {
		$(this).remove();
        adscomeup = true;
    } else if (adscomeup == true) {
		$(this).remove();
        $("body").off('DOMNodeInserted');
        adscomeup = true;
	}
});
