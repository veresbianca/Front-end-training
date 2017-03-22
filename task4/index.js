/**
 * Created by ioanadubau on 22/03/2017.
 */

$(document).ready(function(){

   $(".shoes-number li button").click(function(){
       console.log("entering");
       $(this).siblings("disabled");
   })



});