$(function() {
    $(".nav-item").click(function() {
        var li = $(this).parent()
        li.addClass("active")

        li.nextAll().each(function(index, e) {
            $(e).removeClass("active");
        });
        
        li.prevAll().each(function(index, e) {
            $(e).removeClass("active");
        });
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
});

