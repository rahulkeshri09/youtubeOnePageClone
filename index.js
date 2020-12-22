const subscribe=document.getElementsByTagName("button");
subscribe[1].addEventListener('click',function(){
	subscribe[1].style.backgroundColor="lightgray";
});
const showMore=document.getElementById("show-more-btn");
showMore.addEventListener('click',function(){
	const x=document.getElementById("desc");
	const y=desc.style.height;
	if(y==="100%"){
		x.style.height="100px";
		showMore.innerText="SHOW MORE";
	}else{
		x.style.height="100%";
		showMore.innerText="SHOW LESS";
	}
});