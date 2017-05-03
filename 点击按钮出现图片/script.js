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
addLoadEvent(button);



function showPic(){
	var placeholder = document.createElement("img");
	placeholder.setAttribute("src","image/333.jpg");
	
	var show = document.getElementById("show")
	show.appendChild(placeholder);
}





function button() {
	var button = document.getElementById("btn");
		button.onclick = function() {
		return showPic();
	}

}