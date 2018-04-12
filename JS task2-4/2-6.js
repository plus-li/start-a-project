/**
 * Created by Administrator on 2017/7/12.
 */

str1=sessionStorage.playernum;
str2=sessionStorage.acnum;
str3=sessionStorage.ad;

playernum=JSON.parse(str1);//玩家数
acnum=JSON.parse(str2);/*杀手*/
ad=JSON.parse(str3);/*water*/
var date=parseInt(sessionStorage.getItem("abc"));

var list = new Array(playernum, acnum, ad);
console.log(list);

var deadArr = JSON.parse(sessionStorage.getItem("deadlist"));


str4=sessionStorage.newPeople;
newPeople=JSON.parse(str4);
console.log(newPeople);


for (i=0;i<playernum;i++){
    var content = document.getElementById("content");
    var node=document.createElement("div");
    node.className = "big";
    content.appendChild(node);

    var node1 = document.createElement("p");
    node1.className = "people";
    node.appendChild(node1);
    node1.innerHTML = newPeople[i];

    var node2 = document.createElement("p");
    node2.className="number";
    node.appendChild(node2);
    node2.innerHTML=i+1+ "号";

    var node3 = document.createElement("img");
    node3.src="./img/07.png";
    node.appendChild(node3);
    node3.className="sword";
}

$(document).ready(function(){
  /*  hover();*/
   /* killer();*/
    judge();
    $(".left").click(function () {
        sessionStorage.clear();
        location.href="";
    })
});

/*下面是关闭函数*/
$(document).ready(function () {
    $(".left").click(function () {
        sessionStorage.clear();
 location.href="";
            })
})



//判断是杀人界面还是投票界面
function judge(){
    var steps=sessionStorage.getItem("step");//读取天数
    var steps=parseInt(steps);//并转换为数字
    var g=(steps-2)%4;
    console.log(g);
    if (g==0) {//修改为杀人页面
        $(".header-wrapper p").text("杀人页面");

        return g;
    }
    else{//修改为投票页面
        $(".header-wrapper p").text("投票");
        /*$(".nav-top").html("<div></div>发言讨论结束，大家请投票");
        $(".nav-top div").addClass("nav-triangle");
        $(".nav-bottom").text("点击得票数最多的人的头像");*/
        return g;
    }
}

//确定按钮
function ab(){
       var h=sessionStorage.getItem("deadPerson");
    console.log(h);
    if(h==null){
        sessionStorage.removeItem("deadPerson");
        alert("请选择一位玩家");
        return;
    }
    else{
        var b=sessionStorage.getItem("acnum");//杀手人数
        var c=sessionStorage.getItem("ad");//平民人数
        var c=c-1;
        console.log(b,c);
        if (b==c) {//杀人夜晚只有平民会死
            deadArr.push(h);
            sessionStorage.setItem("deadlist",JSON.stringify(deadArr));
            sessionStorage.setItem("ad",c);
            location.href="2-7.html"//杀手胜利，游戏结束
        }
        else{
            deadArr.push(h);
            sessionStorage.setItem("deadlist",JSON.stringify(deadArr));
            sessionStorage.setItem("ad",c);
           /* console.log(deadArr);*/
           /* sessionStorage.removeItem("deadPerson");*/
            location.href="2-5.html";
        }

    }
}
//死亡后的背景颜色
function backgroundColor() {
    var deadArr = JSON.parse(sessionStorage.getItem("deadlist"));
    console.log(deadArr);
    if (deadArr !== null) {
        for (var i = 0; i < deadArr.length; i++) {
             var m=deadArr[i];
             // $(".main>div").eq(m).find(".people").css("backgroundColor","#A7A5A3");
             $(".main>div").eq(m).find(".people").addClass("die-bg");
        }
        }
    }

$(document).ready(function(){
    judge();
    backgroundColor();
    var l=judge();
    console.log(l);
    if (l==0) {//杀人页面选择函数
        $("#content >div").click(function(){
            var h=$(this).index().toString();
            console.log(h);
            var j=$.inArray(h,deadArr);//判断索引是否属于死亡的数组
            console.log(h,deadArr,j);
            if(j!==(-1)){
                sessionStorage.removeItem("deadPerson");
                alert("请选择活着的玩家")
            }
            else if (newPeople[h]=="杀手") {
                sessionStorage.removeItem("deadPerson");
                alert("请选择平民玩家")
            }
            else{
                sessionStorage.setItem("deadPerson",h);
                $(".big").find("img").css("display", "none");
                $(this).find("img").css("display", "inline-block");
                $(".big").find(".people").css("backgroundColor","#f5c97b");
                $(this).find(".people").css("backgroundColor","#f40");
            }
            console.log("killer模式")
        })
        //运行点击确认函数

        $(".footer").click(function(){
            ab();
        });
    }
    else{//投票页面选择函数!!!投票页面在这里
        $("#content >div").click(function(){
            //投票选择目标的函数
            var h=$(this).index();//点击生成索引
            var h=$(this).index().toString();
            console.log(h,deadArr);
            var j=$.inArray(h,deadArr);
            console.log(j);
            console.log("vote模式")
            if(j!==(-1)){
                sessionStorage.removeItem("deadPerson");
                alert("请选择活着的玩家")
            }
            else{
                sessionStorage.setItem("deadPerson",h);
                $(".big").find("img").css("display", "none");
                $(this).find("img").css("display", "inline-block");
                $(".big").find(".people").css("backgroundColor","#f5c97b");
                $(this).find(".people").css("backgroundColor","#f40");
            }

        })
        $(".footer").click(function(){
            nextVote();
        });
    }
})



//投票之后点击按钮函数

function nextVote(){
    var k=sessionStorage.getItem("deadPerson");
    console.log(k);

    if(k==null){
        sessionStorage.removeItem("deadPerson");
        alert("请选择一位玩家");
        return;
    }
    else{
        var b=sessionStorage.getItem("acnum");//杀手人数
        var c=sessionStorage.getItem("ad");//平民人数
        if (newPeople[k]=="平民") {
            var c=c-1;
        }
        else{
            b=b-1;
        }
        console.log(b,c);
        if (b==c||b==0) {
            deadArr.push(k);
            sessionStorage.setItem("deadlist",JSON.stringify(deadArr));
            sessionStorage.setItem("acnum",b);
            sessionStorage.setItem("ad",c);
            location.href="2-7.html"//b==0,平民胜利//b!==0杀手胜利
        }
        else{
            deadArr.push(k);
            sessionStorage.setItem("deadlist",JSON.stringify(deadArr));
            sessionStorage.setItem("acnum",b);
            sessionStorage.setItem("ad",c);
            sessionStorage.removeItem("deadPerson");
            date=date+1;
            sessionStorage.setItem("abc",date);
            location.href="2-5.html";


        }
    }

}





