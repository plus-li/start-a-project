str1=sessionStorage.playernum;
str2=sessionStorage.acnum;
str3=sessionStorage.ad;

playernum=JSON.parse(str1);//玩家数
acnum=JSON.parse(str2);/*杀手*/
ad=JSON.parse(str3);/*water*/
var newPeople= JSON.parse(sessionStorage.getItem("str4"));

var deadArr=[];
sessionStorage.setItem("deadlist",JSON.stringify(deadArr));

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

var date=1;
sessionStorage.setItem("abc",date);


var people = kill.concat(water);
console.log(people);
var newPeople = [];
for(var i=0,n=people.length; i<n;i++){
    var j = Math.floor(Math.random() * people.length);
    newPeople[i] = people[j];
    people.splice(j,1);

}
console.log(newPeople);
var str4=JSON.stringify(newPeople);
sessionStorage.newPeople=str4;
console.log(str4);


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
}

function ab(){
    window.location.href="2-5.html";
}






