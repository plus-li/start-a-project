/**
 * Created by Administrator on 2017/7/26.
 */
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

/*var newPeople=JSON.parse(sessionStorage.getItem("str4"));*/

var b=sessionStorage.getItem("acnum");
var c=sessionStorage.getItem("ad");

function close() {
$(".header-wrapper.lastChild").click(function () {
    sessionStorage.clear();
    location.href="task2-2.html";
})
$(".footer1").click(function () {
    sessionStorage.clear();
    location.href="task2-2.html";
})

$(".footer2").click(function () {
    sessionStorage.clear();
    location.href="task2-2.html";
})
}
function day(){
    var deadArr=JSON.parse(sessionStorage.getItem("deadlist"));
  /*  var newPeople=JSON.parse(sessionStorage.getItem("str4"));//顺序*/
/*    AAAAAA
    AAAAAA*/
    var d=Math.ceil(deadArr.length/2);
    for(var i=0;i<d;i++){
        var killNum=Number(deadArr[i*2])+Number(1);//杀死号
        var voteNum=Number(deadArr[i*2+1])+Number(1);//投死号
        var number=newPeople[voteNum-1];//身份
        var q=i+1;//第几天
        $(".history").append("<div><p>第"+q+"天</p>");
        $(".history div p:first-child").css("font-size","1.5rem");
        $(".history div").eq(i).append("<p>黑夜："+killNum+"号被杀死了，真实身份是平民</p>");
        if(!isNaN(voteNum)){
            $(".history div").eq(i).append("<p>白天："+voteNum+"号被投死了，真实身份是"+number+"</p>");
        }
    }
}


function result(){
if(b==c){
    $(".topMainText").text("杀手胜利！");
    $(".congratulation").text("太棒了！你知道吗？在杀人游戏中只有20%的杀手取得游戏最终的胜利哦！");
}
else{
    $(".topMainText").text("平民胜利！");
    $(".congratulation").text("太棒了！你知道吗？在杀人游戏中有80%的平民都取得了游戏最终的胜利！");
}
}
$(document).ready(function () {
    close();
    result();
    day();
})