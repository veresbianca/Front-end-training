
$(document).ready(function(){

    $(".check").prop('disabled',true);

    $("input").keyup(function(){
    // Saved all values from inputs
        var firstName = $(".first-name input").val();
        var lastName = $(".last-name input").val();
        var userEmail = $(".user-email input").val();
        var payment = $(".payment input").val();

        console.log("entering");
        //checked if all inputs have some written in them
        if(firstName.length && lastName.length && userEmail.length && payment.length){
            $(".check").prop('disabled',false);
            $(".pay-now button").removeClass("inactive");
        } else {
            $(".check").prop('disabled',true);
            $(".pay-now button").addClass("inactive");
        }

    })




});