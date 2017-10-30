//****************************
//****** Author Taps
//******Use with Hash Scroll
//****************************

$(document).ready(function () {

    //alert($(".navlink").width());

    // Onclick Selector

    $(".navlink").click(function () {
        $(".navlink").removeClass("active");
        $(this).addClass("active");
    });

    //Get all the height 

    var headerHt = $(".header").height();
    var navbarHt = $(".navbar").height()
    var DivN1Ht = $(".divn1").height();
    var DivN2Ht = $(".divn2").height();
    var DivN3Ht = $(".divn3").height();
    var DivN4Ht = $(".divn4").height();
    var DivN5Ht = $(".divn5").height();
    var DivN6Ht = $(".divn6").height();


    var sAmount = $(document).scrollTop();

    $(window).on('scroll', function () {


        var sAmount = $(document).scrollTop();
        var wAmount = $(document).width();



        if (sAmount > headerHt && sAmount < headerHt + DivN1Ht) {
            $(".navlink").removeClass("active");
            $(".n1").addClass("active");
        }
        //
        if (sAmount > headerHt + DivN1Ht && sAmount < headerHt + DivN1Ht + DivN2Ht) {
            $(".navlink").removeClass("active");
            $(".n2").addClass("active");
        }
        //
        if (sAmount > headerHt + DivN1Ht + DivN2Ht && sAmount < headerHt + DivN1Ht + DivN2Ht + DivN3Ht) {
            $(".navlink").removeClass("active");
            $(".n3").addClass("active");
        }
        //
        if (sAmount > headerHt + DivN1Ht + DivN2Ht + DivN3Ht && sAmount < headerHt + DivN1Ht + DivN2Ht + DivN3Ht + DivN4Ht) {
            $(".navlink").removeClass("active");
            $(".n4").addClass("active");
            $(".n44").addClass("active"); // for small menu
        }
        //
        if (sAmount > headerHt + DivN1Ht + DivN2Ht + DivN3Ht + DivN4Ht && sAmount < headerHt + DivN1Ht + DivN2Ht + DivN3Ht + DivN4Ht + DivN5Ht) {
            $(".navlink").removeClass("active");
            $(".n5").addClass("active");
            $(".n55").addClass("active"); // for small menu
        }
        //
        if (sAmount > headerHt + DivN1Ht + DivN2Ht + DivN3Ht + DivN4Ht + DivN5Ht) {
            $(".navlink").removeClass("active");
            $(".n6").addClass("active");
            $(".n66").addClass("active"); // for small menu
        }


    }); //Window scroll ends

}); //doc ready ends
