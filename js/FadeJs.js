
//note:in jquery every element works as node of tree and html is the root node of all


//writing function first and calling then from jquery
function myfun() {
    console.log("gaurav,you are fine ,You are going to be a good developer.")
}
//this is called jquery
$(document).ready(myfun);



//writing function iside jquery
$(document).ready(function myfun1() {
    console.log("you are going to conquer everything .")

});



//writing function inside jquery (dom manipulation )

$(document).ready(function () {
    $("#btn1").click(function () {
        console.log("click");
      //  $("#container").hide();
        $("#container").fadeOut(2000,function(){
           alert("gone..");
        });
    });


    $("#btn2").click(function () {
        console.log("click");
       // $("#container").show();
        $("#container").fadeIn(4000,function(){
            alert("here i come..");
        });
    });


    //fadeToggle function -dono kaam karta hai fadeIn and fadeOut bhi 
    $("#btn3").click(function () {
        console.log("click");
       // $("#container").show();
        $("#container").fadeToggle(6000,function(){
            alert("its happening...");
        });
    });


    $("#btn4").click(function () {
        console.log("click");
       // $("#container").show();
        $("#container").fadeTo(300,0.5,function(){
            alert("its happening...");
        });
    });
});

