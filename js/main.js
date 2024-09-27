$(document).ready(function() {
    let $button = $("#btn-back-to-top");

    $(window).on("scroll", function() {
        scrollFunction();
    });

    function scrollFunction() {
        if ($(document).scrollTop() > 20 || $(document).scrollTop() > 20) {
            $button.css("display", "block");
        } else {
            $button.css("display", "none");
        }
    }

    $button.on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});