window.onload=function(){
    var box =document.querySelector(".box");
    var btn=document.querySelector(".btn");  //滑块
    var bg=document.querySelector(".bg");
    var text=document.querySelector(".text");
	
    var flag=false;
	var flag1=false;
    //滑块de1滑动
    btn.onmousedown=function(event){
        var t=setTimeout("timeCount()",1000);
        var downX =event.clientX;//按下后与X轴的距离
        btn.onmousemove=function(e){
            var moveX=e.clientX-downX;
            if(moveX >0){
                
                this.style.left=moveX+'px'; //添加样式
                bg.style.width=moveX+'px'; //背景宽度
                if(moveX > (box.offsetWidth-btn.offsetWidth)){
                    flag=true;
                    alert('验证成功,用时'+t+'秒');
                    // alert(t);
                    text.innerText='验证成功';
                    text.style.color='#fff';
                    btn.onmousedown=null;
                    btn.onmousemove=null;
										
		           var a=document.getElementById("a");
	               a.setAttribute("href","../注册验证/zhuce.html");
				   a.innerHTML='进入注册';
				   a.style.backgroundColor="red";
					a.style.color="write";
                }
            }
            
        }
    };
    btn.onmouseup=function(){
        btn.onmousemove=null;
        if(flag) return ;
        this.style.left=0;
        bg.style.width=0;

    }
//	
//	if(flag1){		
//	}
	
//		var oa=document.createElement('a');
//		oa.style.backgroundColor="blue";
//		oa.style.color="write";
//		oa.href="../注册验证/zhuce.html";
//		oa.innerHTML='111211';
//		zc.appendChild(oa);
} 