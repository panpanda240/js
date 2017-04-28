function varExample(){
if(!document.getElementById("der")) return false;
if(!document.getElementById("placeholder")) return false;
if(!der.getAttribute("src")) return false;
if(!placeholder.getAttribute("src")) return false;
var dersrc=der.getAttribute("src");
var  placeholdersrc=placeholder.getAttribute("src");
placeholder.setAttribute("src", dersrc);
der.setAttribute("src", placeholdersrc);
}

function test() {
    if (0) return false;

}
function switchButton(){
  if(!document.getElementsByTagName) return false;
if(!document.getElementById) return false;
if(!document.getElementById("btn")) return false;
var butt=document.getElementById("btn");
butt.onclick=function(){
	return varExample()? false:true;

 }
}

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload !='function'){
		window.onload =func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
	var der=document.getElementById("der");
	
	var srctype=parseInt(whichpic.getAttribute("id"))
	if (srctype %2 == 0){
		
		der.setAttribute("src", source);
	}
	else{
		placeholder.setAttribute("src", source);
	}

	return false;

}


function prepareGallery() {
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for ( var i=0; i < links.length; i++) {
		links[i].onclick = function() {
			
				return showPic(this);
		}
	}
}

addLoadEvent(switchButton);
addLoadEvent(prepareGallery);
