 

/*******************************************************

               SIMPLE FIXED NAVBAR WITH OUT ANY JERK

Creator : Tapan Mahapatra

2017 Jan 13

Individual component reusable

Process:of Usasge 

-------------------Class Names---------------------------------------------
DIV header  REAL HEADER
----------------------------------------------------------------
DIV navbar  REAL NAV BAR
----------------------------------------------------------------
DIV header-dummy  Mention a CSS for it with Ht 0
----------------------------------------------------------------
DIV navbar-dummy  Mention a CSS for it with Ht 0
----------------------------------------------------------------



 **********************************************************/ 

//Setting Variables 
    
var headerHt = $(".header").height();

var navbarHt = $(".navbar").height();

var bodyHt = $("body").height();

var totalHeadHt = headerHt+navbarHt;

var contentHt = bodyHt-(navbarHt+headerHt);

//Make sure all are populating if NOT check for height Auto in CSS 
//and change them.
//alert("header "+headerHt+"nav "+navbarHt+"body "+bodyHt);

var query = $('.header'); 

var isVisible = query.is(':visible');
 
$(document).ready(function(){ 
 
$(window).on('scroll', function(){

var sAmount = $(document).scrollTop();

var wWidth = $(window).width();

var colSlide = (navbarHt+headerHt+contentHt)/2 - 200;

var isVisible = query.is(':visible');

//setting Height of DUMMY divs 



$(".header-dummy").css('height',headerHt) ;
$(".navbar-dummy").css('height',navbarHt) ;


 
 
//On scroll of Header 


if (sAmount > headerHt && isVisible == true){ 
$(".header").hide(); 
$(".navbar-dummy").show(); 
$(".header-dummy").show();
$(".navbar").css("position","fixed"); 
var isVisible = query.is(':visible');

} 

//On scroll back Upto Header
if ( sAmount < headerHt && isVisible!=true ) {
$(".header").show(); 
$(".navbar-dummy").hide();
$(".header-dummy").hide();
$(".navbar").css("position","relative");
 var isVisible = query.is(':visible'); 
} 

});//Window scroll ends

} );//doc ready ends


 
