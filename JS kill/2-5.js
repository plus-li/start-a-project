str1=sessionStorage.playernum;
str2=sessionStorage.acnum;
str3=sessionStorage.ad;

playernum=JSON.parse(str1);//玩家数
acnum=JSON.parse(str2);/*杀手*/
ad=JSON.parse(str3);/*water*/

str4=sessionStorage.newPeople;
newPeople=JSON.parse(str4);

var date=sessionStorage.getItem("abc");


var deadArr=JSON.parse(sessionStorage.getItem("deadlist"));



var list = new Array(playernum, acnum, ad);
console.log(list);

var kill = [];
for(var i=0;i<acnum;i++){
    kill[i]="杀手"
}
console.log(kill);

var water = [];
for(var i=0;i<ad;i++){
    water[i]="平民"
}
console.log(water);

/*
function folding() {
    $(".first").bind("click",function(){
        $(".all").slideToggle(1000);
    });
}*/

function folding() {

    for(var i=0;i<15;i=i+2){
        $(".first").eq(i).bind("click",function () {
            $(this).next("div").slideToggle(1000);
        })
    }

}






//杀人函数
function xd(){
    $(".kills").click(function (){
        var steps=sessionStorage.getItem("step");//读取天数
        var steps=parseInt(steps);
        console.log(steps);
        var a=(steps-1)/4;
        console.log(a);
        var b=$(".kills").length;
        var f=$(this).index(".kills");
        console.log(b);
        if (a==b-1&&f==b-1){
            var steps=parseInt(steps);
            var steps=steps+1;
            sessionStorage.setItem("step",steps);
            location.href="2-6.html";
        }
        else{
            alert("请按顺序进行游戏")
        }
    })
}

/*判断函数*/
function judge(){
    var steps=sessionStorage.getItem("step");
    if(steps==null&&steps<1){//如果steps为空
        var steps=1;//给steps赋值
        sessionStorage.setItem("step",steps);//并保存
        var steps=sessionStorage.getItem("step");//读取天数
        console.log(steps);
    }
}

$(document).ready(function () {
    folding();
    judge();
    xd();
    soul();
    speaker();
    voted();
    clone();
    change();
    addColor();
    add();
    slide();
})
/*添加操作内容*/
function add(){
    var deadArr=JSON.parse(sessionStorage.getItem("deadlist"));
   /* var newPeople=JSON.parse(sessionStorage.getItem("str4"));//顺序*/



    console.log(deadArr);
    var steps=sessionStorage.getItem("step");
    var r=steps;
    console.log(r);
    if (r>=2){
        for(var i=0;i<15;i=i+2){
            var p=deadArr[i]-0+1;
            console.log(p);
            if(isNaN(p)){
                console.log("……");
            }
            else{
                var w=i/2;
                $(".kills").eq(w).after("<div>"+p+"号被杀手杀死，真实身份是平民</div>")
                $(".kills").eq(w).next("div").css({
                    "color":"black",
                    "font-size":"0.7rem",
                    "text-indent":"31px",
                    "background-color":"white",
                    "justify-content":"flex-start",
                    "cursor":"default",
                })
            }
        }
    }
    if(r>=5){
        for(var i=1;i<50;i=i+2){
            var q=deadArr[i]-0+1;
            var v=(i-1)/2;
            s=newPeople[q-1];
            console.log(i,"数组下标")
            console.log(s);
            console.log(q);
            if (isNaN(q)) {
                return;
            }
            else{
                var v=(i-1)/2;
                $(".people").eq(v).after("<div>"+q+"号被投票投死,真实身份是"+s+"</div>")
                $(".people").eq(v).next("div").css({
                    "color":"black",
                    "font-size":"0.7rem",
                    "text-indent":"31px",
                    "background-color":"white",
                    "justify-content":"flex-start",
                    "cursor":"default",
                })
            }
        }
    }
}







/*亡灵发言*/
function soul(){
    $(".ghost").click(function (){
        var steps=sessionStorage.getItem("step");//读取天数
        var steps=parseInt(steps);
        console.log(steps);
        var a=(steps-2)/4;
        console.log(a);
        var b=$(".ghost").length;
        var f=$(this).index(".ghost");
        console.log(b);
        if (a==b-1&&f==b-1){//索引值与ghosst个数与步骤数的关系
            var steps=parseInt(steps);
            var steps=steps+1;
            sessionStorage.setItem("step",steps);
            alert("亡灵发言");
            addColor();
        }
        else{
            alert("请按顺序进行游戏");
        }
    })
}

/*依次发言*/
function speaker(){
    $(".player").click(function (){
        var steps=sessionStorage.getItem("step");//读取天数
        var steps=parseInt(steps);
        console.log(steps);
        var a=(steps-3)/4;
        console.log(a);
        var b=$(".player").length;
        var f=$(this).index(".player");
        console.log(b);
        if (a==b-1&&f==b-1){//索引值与ghosst个数与步骤数的关系
            var steps=parseInt(steps);
            var steps=steps+1;
            sessionStorage.setItem("step",steps);
            alert("玩家发言！");
            addColor()
        }
        else{
            alert("请按顺序进行游戏");
        }
    })
}

/*投票*/
function voted(){
    $(".people").click(function (){
        var steps=sessionStorage.getItem("step");//读取天数
        var steps=parseInt(steps);
        console.log(steps);
        var a=(steps-4)/4;
        console.log(a);
        var b=$(".people").length;
        var f=$(this).index(".people");
        console.log(b);
        if (a==b-1&&f==b-1){
            var steps=parseInt(steps);
            var steps=steps+1;
            sessionStorage.setItem("step",steps);
            location.href="2-6.html";
        }
        else{
            alert("请按顺序进行游戏")
        }
    })
}


//追加颜色
function addColor(){
    var steps=sessionStorage.getItem("step");
    if (steps>=2){
        var w=steps-2;
        for (var i=0;i<=w;i++){
            $(".text1").eq(i).css("backgroundColor","grey");
            $(".text1").eq(i).prev().css("border-right-color","grey");
        }
    }
}

//天数
function change(){
    var arr=["一","二","三","四","五","六","七","八"];
    for(var i=0;i<15;i++){
        $(".date").eq(i).text(arr[i]);
    }

}

//克隆函数
function clone(){
    var steps=sessionStorage.getItem("step");//读取天数
    var steps=parseInt(steps);
    console.log(steps);
    if ((steps-1)%4>=0) {
        var t=Math.ceil(steps/4)-1;
        console.log(t);
        for(var i=0;i<t;i++){
            $(".main").append($(".main div:lt(2)").clone(true));
        }
    }
}

$(".left").click(function () {
    sessionStorage.clear();
    location.href="task2-2.html"
})

function slide(){//折叠函数
    var steps=sessionStorage.getItem("step");//天数
    if (steps>4){
        u=Math.ceil(steps/4)-1;
        console.log(u);
        for(var i=0;i<u;i++){
            $(".all").eq(i).css("display","none");
        }
    }
}