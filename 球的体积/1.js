
function suru(){
	var r = document.getElementById("suru").value;
	return r;
}


function volumn(r) {
    return 4 / 3 * Math.PI * Math.pow(r,3);
    document.write(+r+ volumn(r));
}




function zhi(){
	var zhi = document.getElementById("zhi");
	var a = zhi.setAttribute("value",volumn(suru))

}


function ji(){
var button = document.getElementById("btu");
	button.onclick = function(){
			return zhi();
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

addLoadEvent(ji);