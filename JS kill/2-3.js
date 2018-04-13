str1=sessionStorage.playernum;
str2=sessionStorage.acnum;
str3=sessionStorage.ad;

playernum=JSON.parse(str1);//玩家数
acnum=JSON.parse(str2);/*杀手*/
ad=JSON.parse(str3);/*water*/

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

    var people = kill.concat(water);
    console.log(people);
    var newPeople = [];
    for(var i=0,n=people.length; i<n;i++){
        var j = Math.floor(Math.random() * people.length);
        newPeople[i] = people[j];
        people.splice(j,1);
    }
    console.log(newPeople)


var x=1;
function test() {
    x++;
    document.getElementById('aaa').innerHTML = Math.ceil(x/2);

  /*  为什么上面这段代码放上面，代码最后面的
    if(x>=2*playernum){
        window.location.href="task2.3new.html";
    }函数就能运行，而放在if (x<2*playernum-1){下就不行？*/

if (x<2*playernum-1){
        if (x%2!==0){
            var cartoon = document.getElementById("picture");
            cartoon.src = "img/bear.png";
            document.getElementById("card").value = "显示" +Math.ceil((x+1)/2) + "号";
            document.getElementById("man").innerHTML ="";
        }
       else{
            var cartoon = document.getElementById("picture");
            cartoon.src = "img/girl.png";
            document.getElementById("card").value = "隐藏并传递给" + Math.ceil((x+1)/2) + "号";
            document.getElementById("man").innerHTML = newPeople[Math.ceil((x)/2-1)];
        }
      }
      else{
    var cartoon = document.getElementById("picture");
    cartoon.src = "img/bear.png";
    cartoon.src = "img/girl.png";
    document.getElementById("man").innerHTML = newPeople[Math.ceil((x)/2-1)];
    document.getElementById("card").value = "法官查看";
}

     if(x>=2*playernum){
         window.location.href="2-4.html";
         sessionStorage.setItem("str4",JSON.stringify(newPeople));
     }
}


// $(".left").click(function() {
//     sessionStorage.clear();
//     location.href="task2-2.html";
// })

/*
AAAAAAAAAAAA
AAAAAAAAAAAA
AAAAAAAAAAAA
AAAAAAAAAAAA
AAAAAAAAAAAA
AAAAAAAAAAAA*/
