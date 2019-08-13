// // 1）声明一个变量 记录当前的页码是多少
// var page = 0;
// //执行定时器，让图片根据页面进行改变
// var allTab = document.getElementById('imgBox').getElementsByTagName('img');
// var allLi = document.getElementsByClassName("tabLi");
// console.log(allTab);
// var timer = setInterval(function(){
// 	page++;
// 	if(page>=allTab.length){
// 		page = 0;
// 	}
// 	change(page);
// },2000);
//
//
// var oBanner = document.getElementById('body-zj');
// var oTurn = document.getElementById("turn");
// oBanner.onmouseover = function(){
// 	clearInterval(timer);
// 	oTurn.style.display = "block";
// }
//
// oBanner.onmouseleave= function(){
// 	oTurn.style.display = "none";
// 	timer = setInterval(function(){
// 		page++;
// 		if(page>=allTab.length){
// 			page = 0;
// 		}
// 		change(page);
// 	},2000);
// }
// console.log(timer);
//
// //实现点击切换效果
// for(var i = 0;i<allLi.length;i++){
// 	allLi[i].setAttribute('flag',i);
// 	allLi[i].onclick = function(){
// 		var flag = this.getAttribute("flag");
// 		change(flag);
// 		page = flag;
// 	}
// }
// //我要怎么让点击后的图片 按照点击的顺序 进行播放
//
// var oRight = document.getElementById("rightTurn");
//
// oRight.onclick = function(){
// 	page++;
// 	if(page>=allTab.length){
// 		page = 0;
// 	}
// 	change(page);
// }
//
// var oLeft = document.getElementById("leftTurn");
//
// oLeft.onclick = function(){
// 	page--;
// 	if(page<0){
// 		page=allTab.length-1;
// 	}
// 	// 函数的调用
// 	change(page);
// }
//
// //函数的封装
// function change(num){
// 	for(var i = 0;i<allTab.length;i++){
// 		allTab[i].style.display = 'none';
// 		allLi[i].style.backgroundColor = "#7d7d7d";
// 	}
// 	allTab[num].style.display = 'block';
// 	allLi[num].style.backgroundColor = "white";
// }