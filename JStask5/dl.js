
var button=document.getElementById("button");
function change(){

var tel=$(" input[ name='tel' ] ").val();
   var pwd=$(" input[ name='pwd' ] ").val();
		if (tel==""|| pwd =="") {
		alert("帐号密码不能为空！");
	
	
	}else{
		$.ajax({
			url:" /carrots-admin-ajax/a/login",   //对应的接口
			type:"POST",          
			data:{name:tel,pwd:pwd},
			dataType: "json", 
			cache : false,
			success:function(data){
				console.log(data);
				if (data.code==0) {
				window.location.href="http://dev.admin.carrots.ptteng.com/#/dashboard";
				}
			}
			})
	}

	
} 