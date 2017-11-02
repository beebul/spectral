$(document).ready(function() {

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    $('.button-group a.button').on('click', function() {
        $('.button-group a.button').removeClass('active');
        $(this).addClass('active');
    });


    $(function() {

        $('.easy-modal').easyModal({
            top: 1,
            overlay: 0.2,
            onOpen: function(modal) {
                $(modal).addClass('modal-open');
                //$(modal).children('img').each(function(img) { img.attr('src', img.attr('data-src')); });
            },
            onClose: function(modal) {
                $(modal).removeClass('modal-open');
            }
        });

        $('.easy-modal-open').click(function(e) {
            var target = $(this).attr('href');
            $(target).trigger('openModal');
            e.preventDefault();
        });

        $('.easy-modal-close').click(function(e) {
            $('.easy-modal').trigger('closeModal');
        });

        $('.easy-modal-animated').easyModal({
            top: 200,
            overlay: 0.2,
            transitionIn: 'animated bounceInLeft',
            transitionOut: 'animated bounceOutRight',
            closeButtonClass: '.animated-close'
        });

    });


});