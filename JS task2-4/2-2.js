/**
 * Created by Administrator on 2017/7/10.
 */
/**
 * Created by Administrator on 2017/7/8.
 */

/*var player=document.getElementById("number").value;
 var playernum=parseInt(player);*/



function getNumberFunction(){
    var player=document.getElementById("number").value;
    var playernum=parseInt(player);
    var str1=JSON.stringify(playernum);
    sessionStorage.playernum=str1;

    var ac=Math.floor(playernum/3);
    var acnum=parseInt(ac);
    var str2=JSON.stringify(acnum);
    sessionStorage.acnum=str2;

    var ae=playernum-acnum;
    var ad=parseInt(ae);
    var str3=JSON.stringify(ad);
    sessionStorage.ad=str3;

    var list=new Array(playernum,acnum,ad);

    if (playernum<4||playernum>18){
        document.getElementById("kill").innerHTML="";
        document.getElementById("water").innerHTML="";
    }
    else {

        if(isNaN(acnum)){
            return;
        }
        else {
            document.getElementById("killer").innerText=acnum;
            document.getElementById("water").innerHTML=ad;
        }
    }
    return list;
}

function testNumberFunction(){
    var player=document.getElementById("number").value;
    var playernum=parseInt(player);
    if(playernum>=4&&playernum<=18){
        window.location.href="2-3.html";
    }
    else{
        alert("请输入正确的人数")
    }

}