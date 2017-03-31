/**
 * Created by ioanadubau on 30/03/2017.
 */

$(document).ready(function(){



    $(".message input").keyup(function() {

        var infoInput = $(".message input").val();
        // checked if val from infoInput > 0 and I made the btn-submit disabled
        if (infoInput.length > 0 ) {
            console.log("dadsa");
            $(".btn-submit").prop('disabled',false);
        }
        // checked if val from infoInput === 0 and I made the btn-submit enabled
        if (infoInput.length === 0 ){
            $(".btn-submit").prop('disabled',true);
        }
    });
    //on click I saved the value from input
    $(".btn-submit").click (function(e){
        e.preventDefault();
        var infoInput = $(".message input").val();
         $("#result a").text(infoInput);
         //checked if infoInput.length > 0 and I made the btn-submit disabled
         if(infoInput.length > 0) {
           $(".message input").val("");
            $(".btn-submit").prop('disabled',true);
         }
    });
})