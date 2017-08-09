$(window).load(function() {
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
      top: 200,
      overlay: 0.2
    });

    $('.easy-modal-open').click(function(e) {
      var target = $(this).attr('href');
      console.log(this);
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