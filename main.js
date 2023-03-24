let arr=["ram","moorthy","siva","praba","anu"];
arr.forEach(function(e){
	let cont=document.querySelector(".condainer");
	let btn=document.createElement("button");
	
	btn.innerHTML=e;
	cont.appendChild(btn);
	btn.style.padding="12px";
	btn.style.margin="12px";
});