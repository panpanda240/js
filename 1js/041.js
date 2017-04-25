
function showPic(whichpic, srctype) {
	var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
	var der=document.getElementById("der");
	// var links = gallery.getElementsByTagName("a");
	// for (var i=0; i< links.length;i++){
	// 	if(i%2===0){
	// 	placeholder.setAttribute("src", source);
		
		
	// 	}else{
	// 	der.setAttribute("src", source);
          
	// 	}
	
	// }
	if (srctype == 1)
		placeholder.setAttribute("src", source);
	else
		der.setAttribute("src", source);

	return false;

}


function prepareGallery() {
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for ( var i=0; i < links.length; i++) {
		links[i].onclick = function() {
			if (i % 2 == 0) {
				return showPic(this, 1);
			} else {
				return showPic(this, 2);
			}
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
//addLoadEvent(showPic);




