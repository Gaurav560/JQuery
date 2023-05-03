
$(document).ready(function () {
    $("#btn5").click(function () {
        console.log("click");
      //  $("#container").hide();
        $("#container").slideUp(2000,function(){
           alert("gone..");
        });
    });


    $("#btn6").click(function () {
        console.log("click");
       // $("#container").show();
        $("#container").slideDown(4000,function(){
            alert("here i come..");
        });
    });


    //fadeToggle function -dono kaam karta hai fadeIn and fadeOut bhi 
    $("#btn7").click(function () {
        console.log("click");
       // $("#container").show();
        $("#container").slideToggle(6000,function(){
            alert("its happening...");
        });
    });


});

