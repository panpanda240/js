function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	// source = "images/courses.jpg"
	var placeholder = document.getElementById("placeholder");
	// placeholder = <img>
	placeholder.setAttribute("src", source);
	// src = "images/courses.jpg"

	var text = whichpic.getAttribute("title");
	// text = courses
	var description = document.getElementById("description");
	// descriptioin = <p>
	description.firstChild.nodeValue = text;
	// descrption = "courses"
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	alert (body_element.childNodes.length);
}

function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;

	var gallery = document.getElementById("imagegallery");
	// gallery = <body>

	var links = gallery.getElementsByTagName("a");
	// links = [a,a,a,a,a]
	for ( var i=0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic2(this);
		}
	}
}

function showPic2(whichpic) {
	if (!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return true;
	placeholder.setAttribute("src",source);
	if (!document.getElementById("description")) return false;
	var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
	var description = document.getElementById("description");
	if (description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = text;
	}
	return false;
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	// 判断window.onload是否是函数
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

//window.onload 

addLoadEvent(countBodyChildren);
addLoadEvent(prepareGallery);
