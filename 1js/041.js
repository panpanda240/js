
function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");//第一张图片
	var der=document.getElementById("der");//第二张图片
	
	var srctype=parseInt(whichpic.getAttribute("id"))//解析id的字符串，并返回一个整数。
	if (srctype %2 == 0){
	//如果返回的数是偶数就设置source的图片在der第二张图片	
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
addLoadEvent(prepareGallery);
addLoadEvent(allery);
addLoadEvent(switchButton);



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

 function arra(){
   
   var id=document.getElementById("imagegallery");
   var text=id.getElementsByTagName("a");
   var arr= new Array();
   for (var i = 0;i<text.length;i++) {
	arr[i]=text[i].lastChild.nodeValue;
   }

   shuffle(arr);

   for (var i = 0;i<text.length;i++) {
	text[i].lastChild.nodeValue=arr[i];
  }

}

function allery() {
	var button = document.getElementById("but");
		button.onclick = function() {
		return arra();
	}

}

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

