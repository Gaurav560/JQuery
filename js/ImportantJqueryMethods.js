//some methods can directly manipulate the dom 



//method is val which returns the value and sets the value 
$(document).ready(function () {
    $("#btn9").click(function () {

        //settingdata through val function  in field
        //    let value= $("#fdj").val();
        // console.log("value of v is :"+value);

        //getting data through val function in field
        $("#fdj").val("this is done using val function ")

    });


    //text function to get text within any html element
    //it just ignores the html element 
    $("#btn10").click(function () {
        let c = $("#para").text();
        console.log(c)
    });




    $("#btn11").click(function () {
        //it justdoesn't ignore the html tag .it considers everything inside text function as string 
        let c = $("#para").text("<b>gaurav all i great </b>");
        console.log(c)
    });


    //if you want to insert as a html element then ,use html function insted of text function 
    $("#btn12").click(function () {
        //it justdoesn't ignore the html tag .it considers everything inside text function as string 
        let c = $("#para").html("<b>gaurav all i great </b>");
        console.log(c)
    });




    //image  attribute (attr function->src ki value nikal sakta hai aur  src ki value change bhi kar sakta hai  )

    $("#btn13").click(function () {
        let s = $(".image1").attr("src")
        console.log(s)

        //changing the value of src
  $(".image1").attr("src", "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg");
    })

});



