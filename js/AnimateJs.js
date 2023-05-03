
$(document).ready(function () {
    $("#btn8").click(function () {
        console.log("click");
    

//proeties of css in animate paramter must be camel case 
        $("#container").animate({width:"+=600px",height:"+=600px",opacity:0.5,left:"500px"},2000,function(){
$("#container").animate({borderRadius:"20px",left:"0px",width:"230px",height:"300px"})
        });
    });


});

