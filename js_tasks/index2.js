/**
 * Created by ioanadubau on 30/03/2017.
 */


$(document).ready(function(){

    // $.getJSON('json.js', function(data) {
    //     console.log(data)
    // })
    //
    //     .done(function(data){
    //         console.log(data[0]);
    //
    //         for( var i=0; i < data.users.length; i++) {
    //             console.log(data.users[i]);
    //         }
    //     });
    //
    //                        first method!
    console.log(data);
    console.log(data.users);
    console.log("..................");

    //looped through the objects from users array
    $.each(data.users,function(index,element){
        console.log("indexul is:::",index);
        console.log("element is:::",element);
        console.log("...............");

        console.log("next-obj:::",element.joined.month);

        $("#placeholder").append("<p>" + element.firstName +  " "  + element.lastName + " " +
            element.joined.month + " " + element.joined.day + " " + element.joined.year + "</p>");
        $("#placeholder").css({"color": "red"});
    });



    //            second method!

    for(i = 0; i < data.users.length; i++ ) {
        var x = data.users[i];
        console.log(x);

         $("#second-div").append("<p>" + x.firstName + " " + x.lastName + " " +
         x.joined.month + " " + x.joined.day + " " + x.joined.year + "</p>");
         $("#second-div").css({"color":"blue"});
    }

});



