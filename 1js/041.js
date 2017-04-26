
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




