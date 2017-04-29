

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

addLoadEvent(allery);



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



 function arra(){
   
   var id=document.getElementById("imagegallery");
   var image=id.getElementsByTagName("img");
   var arr= new Array();
   for (var i = 0;i<image.length;i++) {
   	var imges=image[i].getAttribute("src");
	arr[i]=imges;
   }

   shuffle(arr);

   for (var i = 0;i<image.length;i++) {
   	
	image[i].setAttribute("src",arr[i]);
  }

}

function allery() {
	var button = document.getElementById("btn");
		button.onclick = function() {
		return arra();
	}

}