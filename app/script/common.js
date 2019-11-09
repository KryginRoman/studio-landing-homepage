;(function() {
    document.addEventListener("DOMContentLoaded", () => {

        /*Slider initialization*/
        $(".header-slider").slick({
            "prevArrow": $(".header-slider-arrow"),
            "nextArrow": $(".placeholder-arrow"),
            "responsive": [
                {
                    "breakpoint": 576,
                    "settings": {
                        "arrows": false
                    }
                }
            ]
        });
        $(".testimonials-list").slick({
            "arrows": false
        });

    });
})();