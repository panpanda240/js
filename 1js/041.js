
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
addLoadEvent(Gallery);




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





function Gallery() {
var obj=document.getElementById("a"); 
//浏览器获取节点文本的方法 
function text() { 
	var t=""; 
//如果传入的是元素，则继续遍历其子元素 
//否则假定它是一个数组 
obj=obj.childNodes||obj; 
//遍历所有子节点 
for(var j=0;j<obj.length;j++){ 
//如果不是元素，追加其文本值 
//否则，递归遍历所有元素的子节点 
t+=obj[j].nodeType!=1? obj[j].nodeValue:text(obj[j].childNodes); 
} 
//返回文本 
return t; 
} 

var but=document.getElementById("but");
    but.onclick=function(){
	return shuffle(text(obj));
  }
}