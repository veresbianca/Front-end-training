/**
 * Created by ioanadubau on 30/03/2017.
 */
    $(document).ready(function(){
    console.log("is working");

        function getTotal() {

        $(".product").each(function(){

            // I saved qty from input and convert it to type number
            var inputValue = Number($(this).find("input").val());
            console.log(inputValue);

            // I saved  the price of the product from data-price
            var productPrice = Number($(this).attr("data-price"));
            console.log(productPrice);

            //calculate the total price of the product
            var subTotal = inputValue * productPrice;
            console.log(subTotal);
            $(this).find(".productTotal").html( subTotal);

        })

    }
        $("input").keyup(function(){
                getTotal();
                updateTotal();
        });

        function updateTotal() {

            var sumPrice = 0;

            $(".productTotal").each(function(){
                sumPrice += Number($(this).html());
                console.log(($(this).html()) )
            });

            $("#sum").html(sumPrice.toFixed(2));
        }


});


