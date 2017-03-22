
$(document).ready(function(){

   $(".shoes-number li button").click(function(){

       console.log("entering");
       $(this).addClass("add-background");
       $(this).parent().siblings().find("button").removeClass("add-background");
   })
});