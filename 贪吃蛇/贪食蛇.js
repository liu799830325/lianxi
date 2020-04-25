// 关于方块地构造函数
// var sw=20,sh=20,sr=20,sd=20;//宽,高,行数,列数
// function Square(x,y,classname){
//     this.x=x*sw;
//     this.y=y*sh;
//     this.class=classname;
//     this.viewContent=document.createElement('div');
//     this.viewContent.classname=this.name;
//     this.parent=document.getElementsByClassId('snackwrap');
// }
// Square.prototype.create=function(){
//     this.viewContent.style.position='absolute';
//     this.viewContent.style.width=sw+'px';
//     this.viewContent.style.width=sh+'px';
//     this.viewContent.style.left=this.x+'px';
//     this.viewContent.style.left=this.y+'px';
//     this.parent.appendchild(this.viewContent);
// }
// Square.prototype.remove=function(){
//     this.parent.removechild(this.viewContent);
// }
// function snack(){
    
// }
// 2.
// var container = document.getElementsById("container"),odiv = container.getElementsByTagName("div");
// for(var i=0;i<odiv.length;i++){
//     odiv[i].style.left=(odiv.length-1-i)*50+"px";
// }

// for(var i=this.odiv.length-1;i>=0;i--){
//     this.odiv[i].style.left=(this.odiv.length-1-i)*50+"px";
// }
//封装一个方法,用于创建div元素,放在地图里
var map=document.getElementById("map")
var bodys=[]
function createDiv(color){   //创建方法
    var div=document.createElement("div")
   
    div.style.position="absolute"
    div.style.left=parseInt(Math.random()*10)*30+"px"
    div.style.top=parseInt(Math.random()*10)*30+"px"
    div.style.backgroundColor=color
    map.appendChild(div)
    return div //让函数执行后返回函数创建的div
}
//如何让蛇头移动起开,操作舌头,js找到蛇头对于的div
//假设蛇头的默认方向是右
var head =createDiv("red")//调用方法,创建舌头
head.value="右"
// alert(head.value)
var food = createDiv("blue");//调用方法,创建食物
function move(){
    //身体移动
    if(bodys.length>0){
        for(var n=bodys.length-1;n>=0;n--){
            switch(bodys[n].value){
                case "左":
                    bodys[n].style.left=parseInt(bodys[n].style.left)-30+"px"
                break
                case "右":
                    bodys[n].style.left=parseInt(bodys[n].style.left)+30+"px"
                break
                case "上":
                    bodys[n].style.top=parseInt(bodys[n].style.top)-30+"px"
                break
                case "下":
                    bodys[n].style.top=parseInt(bodys[n].style.top)+30+"px"
                break
            }
            if(n==0){
                bodys[n].value=head.value
            }else{
                bodys[n].value=bodys[n-1].value
            }
        }
    }
    //判断蛇头的方向,.value的值
    switch(head.value){
        case "左":
            head.style.left=parseInt(head.style.left)-30+"px"
        break
        case "右":
            head.style.left=parseInt(head.style.left)+30+"px"
        break
        case "上":
            head.style.top=parseInt(head.style.top)-30+"px"
        break
        case "下":
            head.style.top=parseInt(head.style.top)+30+"px"
        break
    }
    if(parseInt(head.style.left)<0||parseInt(head.style.left)>420||parseInt(head.style.top)<0||parseInt(
        head.style.top)>420){
        
        alert("撞墙了!!!")
        clearInterval(t)
        alert('你的分数是：'+bodys.length)
    }
    if(bodys.length>0){
        for(var n=bodys.length-1;n>=0;n--){
            if(parseInt(head.style.left)==parseInt(bodys[n].style.left)&&
            parseInt(head.style.top)==parseInt(bodys[n].style.top)){
            alter("咬到身体了!!!")
            clearInterval(t)
            }
        }
    }
    //碰撞检测
    if(head.style.left==food.style.left&&head.style.top==food.style.top){//代表吃到食物
        //用数组放身体
        var body=createDiv("pink")
        var last
        if(bodys.length>0){
            last=bodys[bodys.length-1]
        }else{
            last=head
        }
        switch(last.value){
            case "左":
                body.style.left=parseInt(last.style.left)+30+"px"
                body.style.top=last.style.top
            break
            case "右":
                body.style.left=parseInt(last.style.left)-30+"px"
                body.style.top=last.style.top
            break
            case "上":
                body.style.top=parseInt(last.style.top)+30+"px"
                body.style.left=last.style.left
            break
            case "下":
                body.style.top=parseInt(last.style.top)-30+"px"
                body.style.left=last.style.left
            break
        }
        body.value=last.value
        bodys.push(body)
        //事物更新
        food.style.left=parseInt(Math.random()*10)*30+"px"
        food.style.top=parseInt(Math.random()*10)*30+"px"
    }
}
var t=setInterval(move,500)   //定时器
//通过键盘的按键来改变蛇头的移动方向
//键盘的键值, 通过不同的键值,对应不同的键
//e表示时间对象
document.onkeydown=function(e){
    switch(e.keyCode){
        case 37:
            head.value="左"
        break
        case 38:
            head.value="上"
        break
        case 39:
            head.value="右"
        break
        case 40:
            head.value="下"
        break
    }
}