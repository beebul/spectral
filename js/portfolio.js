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
      $(target).trigger('openModal');
      e.preventDefault();
      
      
      var modal = this;
      var hash = modal.id;
      window.location.hash = hash;
      window.onhashchange = function() {
        if (!location.hash) {
          $(modal).modal('show');
        }
      }
      
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

  $('.easy-modal-open').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
    console.log(this);
    window.location.hash = hash;
    window.onhashchange = function() {
      if (!location.hash) {
        $(modal).modal('hide');
      }
    }
  });


});