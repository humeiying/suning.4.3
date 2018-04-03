/*
* @Author: Administrator
* @Date:   2018-03-07 16:08:10
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-02 23:38:00
*/
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".paperbox li");
	let banner=document.querySelector(".banner");
	pagers.forEach(
		function(ele,index){
		ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
				this.classList.add("active");
				imgs[index].classList.add("active");
				n=index;
				}
			});

			let next=document.querySelector(".next");
			let prev=document.querySelector(".prev");
			next.onclick=function(){
				move();
			}
			prev.onclick=function(){
				n-=2;
				move();
			}
	 let t=setInterval(move,3000);
	 var n=0;
	 	function move(){
		n++;
	 	// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
}
//返回顶部
{	//获取一系列元素
	let tanchu4=document.querySelector(".totop5");
	let tanchu=document.querySelector(".cedao_right_xiaoxi1");
	let tanchu1=document.querySelector(".cedao_right_xiaoxi2 span");
	let tanchu2=document.querySelector(".cedao_right_xiaoxi3 span");
	let zuoce=document.querySelector(".totop");
	let zuoce1=document.querySelector(".totop span");
		tanchu.onmouseenter=function(){
			zuoce.style.width=74+"px";
			zuoce.style.background="#FFAA02";
			zuoce1.style.color="#383838";
			tanchu.style.background="#FFAA02";
			tanchu1.style.color="white";
			tanchu2.style.color="white";
		}
		tanchu.onmouseleave=function(){
			zuoce.style.width=0;
			zuoce.style.background="#383838";
			zuoce1.style.color="#FFAA02";
			tanchu.style.background="#272727";
			tanchu1.style.color="#917231";
			tanchu2.style.color="#917231";
		}
		// 为返回顶部设置单击事件
		tanchu.onclick=function(){
			// 获取当前滚动条的位置
			let st=document.documentElement.scrollTop;
				// 设置一个interval函数
				let t=setInterval(function(){
					//设置在每25s内向上移动200px
					st-=200;
					//当向上移动的距离为负数时，st的值设置成0
					//清除interval函数。
					if(st<0){
					 	st=0;
						clearInterval(t);
					}
					// 将当前滚动条的值设置为0
					document.documentElement.scrollTop=0;
				},25)
			
		}
		tanchu4.onclick=function(){
			// 获取当前滚动条的位置
			let st=document.documentElement.scrollTop;
				// 设置一个interval函数
				let t=setInterval(function(){
					//设置在每25s内向上移动200px
					st-=200;
					//当向上移动的距离为负数时，st的值设置成0
					//清除interval函数。
					if(st<0){
					 	st=0;
						clearInterval(t);
					}
					// 将当前滚动条的值设置为0
					document.documentElement.scrollTop=0;
				},25)
			
		}
		zuoce.onclick=function(){
			let st=document.documentElement.scrollTop;
				let t=setInterval(function(){
					st=-200;
					if(st<0){
					 	st=0;
						clearInterval(t);
					}
					document.documentElement.scrollTop=0;
				},25)
		}

}
// 导航栏的显示
{	
	// 获取元素
	let daohang=document.querySelector(".tanchu");
	let leftBar=document.querySelector(".leftBar");
	let content=document.querySelectorAll(".content2");
	let tips=document.querySelectorAll(".leftBar_item");
	// 设置滚动事件
	window.onscroll=function(){
		//获取当前滚动条的值
	let st=document.documentElement.scrollTop;
		// 当值大于700时
		if(st>700){
			// 将此时的样式设置为block
			daohang.style.display="block";
		}
		else{
			// 否则将此时的样式设置为none
			daohang.style.display="none";
		}
		if(st>3000){
		leftBar.style.display="block";
		}
		else{
		leftBar.style.display="none";
		}
	}
		//遍历tips对象
		tips.forEach(function(ele,index){
		// 为ele设置单击事件
		ele.onclick=function(){
			//获取位于对象最顶端和窗口中可见内容的最顶端之间的距离-40
			let ot=content[index].offsetTop-50;
			// console.log(ot);
			// 获取当前滚动条的距离
			let now=document.documentElement.scrollTop;
			// 设置当前对象需要移动的速度，其所用的时间是一致的
			let speed=(ot-now)/10;
			let time=0;
			//为t设置一个interval方法，每经过25ms时，它的时间加50s,
			// 其滚动条的位置也加一个速度。当时间为550ms时，清除Interval方法
			let t=setInterval(function(){
				time+=50;
				now+=speed;
				if(time===500){
					clearInterval(t);
				}
				// 将滚动条的位置指为now的值所对应的位置
				document.documentElement.scrollTop=now;
			},50);
		}
	});
		//为window添加一个监听事件
		window.addEventListener("scroll",function(){
			//获取当前元素的滚动条的距离
		let st=document.documentElement.scrollTop;
		//利用for循环   遍历当前的内容
		for(let i=0;i<content.length;i++){
			//当st的值为content[i]的值时，将上一个元素的类名移除，为下一个元素添加类名
			if(st>content[i].offsetTop-150){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
					
				}
				tips[i].classList.add("active");
			}
		}
	});
}
//好货
{
		let prev=document.querySelector(".prev1");
		let next=document.querySelector(".next1");
		let inner=document.querySelector(".inner");
		let contents=document.querySelectorAll(".item");
		let pagers=document.querySelectorAll(".pager");
		flag=true;
		let n=1;
		next.onclick=function(){
			if(flag){
				flag=false;
				n++;
				inner.style.transition="all 0.5s";
				inner.style.left=n*-400+"px";
				pagers[n-1].classList.add("active");
				pagers[n-2].classList.remove("active");
			}
		}
		prev.onclick=function(){
			if(flag){
				flag=false;
				n--;
				inner.style.transition="all 0.5s";
				inner.style.left=n*-400+"px";
				pagers[n-1].classList.add("active");
				pagers[n].classList.remove("active");
			}
		}
		inner.addEventListener("transitionend",function(){
			flag=true;
			if(n===4){
				n=1;
				inner.style.transition="none";
				inner.style.left=-400+"px";
			}
			if(n===0){
				n=3;
				inner.style.transition="none";
				inner.style.left=-1200+"px";
			}
		})
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				n=index+1;
				inner.style.left=n*-400+"px";
			}
		})
}
//生鲜
{
		let prev=document.querySelector(".prev2");
		let next=document.querySelector(".next2");
		let inner=document.querySelector(".shengxian_inner");
		let contents=document.querySelectorAll(".shengxian_nerrong_medium");
		let n=1;
		let flag=true;
		next.onclick=function(){
			if(flag){
				flag=false;
				n++;
				inner.style.transition="all 0.5s";
				inner.style.left=n*-390+"px";
			}
		}
		prev.onclick=function(){
			if(flag){
				flag=false;
				n--;
				inner.style.transition="all 0.5s"
				inner.style.left=n*-390+"px";
			}
		}
		inner.addEventListener("transitionend",function(){
			flag=true;
			if(n===3){
				n=1;
				inner.style.transition="none";
				inner.style.left=-390+"px";
			}
			if(n===0){
				n=2;
				inner.style.transition="none";
				inner.style.left=-780+"px";
			}
		})
}
//必抢清单
{
	let yiru=document.querySelectorAll(".biqing_right_neirong1");
	let tanchu=document.querySelectorAll(".erweima_xianshi");
	let obj=tanchu[0];
		yiru.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				tanchu[index].style.display="block";
				obj=tanchu[index];
			}
			ele.onmouseleave=function(){
		 		tanchu[index].style.display="none";
		 	}
		})

		let prev3=document.querySelector(".prev3");
		let next3=document.querySelector(".next3");
		let inner3=document.querySelector(".biqing_right_inner");
		let n=1;
		flag=true;
		next3.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner3.style.transition="all 0.5s";
			inner3.style.marginLeft=-560*n+"px"
		}
	}
	prev3.onclick=function(){
		if(flag){
			n--;
			flag=false;
			inner3.style.transition="all 0.5s";
			inner3.style.marginLeft=-560*n+"px"
		}
	}
	inner3.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			n=1;
			inner3.style.transition="none";
			inner3.style.marginLeft=-560+"px";	
		}
		if(n===0){
			n=3;
			inner3.style.transition="none";
			inner3.style.marginLeft=-1680+"px";	
		}

	})
}
//banner
{
		let labels=document.querySelectorAll(".banner_left_left1");
		let menus=document.querySelectorAll(".banner_content");
		let obj=menus[0];
		labels.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				menus[index].style.display="block";
				obj=menus[index];
			}
			ele.onmouseleave=function(){
				menus[index].style.display="none";
			}
		})
}
//大聚会、无缝切换
{
	let dajuhui_bottom_left=document.querySelector(".dajuhui_bottom_left");
	let prev5=document.querySelector(".prev5");
	let next5=document.querySelector(".next5");
	let inner2=document.querySelector(".inner2");
	dajuhui_bottom_left.onmouseenter=function(){
		prev5.style.display="block";
		next5.style.display="block";
	}
	dajuhui_bottom_left.onmouseleave=function(){
		prev5.style.display="none";
		next5.style.display="none";
	}
	let n=1;
	flag=true;
	next5.onclick=function(){
		if(flag){
			n++;
			flag=false;
			inner2.style.transition="all 0.5s";
			inner2.style.marginLeft=-1000*n+"px"
		}
	}
	prev5.onclick=function(){
		if(flag){
			n--;
			flag=false;
			inner2.style.transition="all 0.5s";
			inner2.style.marginLeft=-1000*n+"px"
		}
	}
	inner2.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			n=1;
			inner2.style.transition="none";
			inner2.style.marginLeft=-1000+"px";	
		}
		if(n===0){
			n=3;
			inner2.style.transition="none";
			inner2.style.marginLeft=-3000+"px";	
		}

	})

}
{
	var tops=document.querySelectorAll(".toolbar_item4");
	var bottom=document.querySelectorAll(".tollbar_item_content");
	tops.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<tops.length;i++){
				bottom[i].style.display="none";
			}
			bottom[index].style.display="block";
			bottom[index].style.transition="all 0.5s";

		}
		ele.onmouseleave=function(){
			for(let i=0;i<tops.length;i++){
				bottom[i].style.display="none";
				bottom[i].style.transition="all 0.5s";
			}
		}
	});
}
{
	var cedao_neirong=document.querySelectorAll(".cedao_xiaoxi_neirong");
	var cedao_item=document.querySelectorAll(".cedao_right_xiaoxi");
	cedao_item.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<cedao_item.length;i++){
				cedao_neirong[i].style.width=0;
				}
				cedao_neirong[index].style.width=47+"px";
				}
				ele.onmouseleave=function(){
				for(let i=0;i<cedao_item.length;i++){
				cedao_neirong[i].style.width=0;
				}
				}
	})
}
