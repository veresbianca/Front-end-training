// /**
//  * Created by ioanadubau on 31/03/2017.
//  */
//
$(document).ready(function(){
    console.log("is working");

    var counter = 0;
    $(".fa-angle-left").click(function(){

        if(counter > 1){
            console.log("0-clicks");
             return
         }
        counter = counter + 1;

        console.log("is clicked left");
        $(".all-items li div ").animate({left: '-=' + '100vw'},500);
        // console.log(counter);
    });

    $(".fa-angle-right").click(function(){
        console.log("is clicked right");
         console.log(counter);
         if(counter === 0){
             console.log("click");
            return
        }
         counter = counter -1;


        $(".all-items li div ").animate({left: '+=' + '100vw'},500);
    });




});