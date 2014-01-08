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
});

