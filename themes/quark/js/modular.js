jQuery(document).ready(function($){

    $("#overlay a").click(function(){
        $("#overlay").removeClass("open"); 
        $("body").removeClass("mobile-nav-open"); 
        $("#toggle").removeClass("active");
    });
    
});