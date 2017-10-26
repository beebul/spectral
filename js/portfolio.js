$(document).ready(function() {
  $("img").unveil();
});


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
      top: 60, 
      overlay: 0.2,
      onOpen: function(modal) { 
        $(modal).addClass('modal-open');
        console.log('open1');
      }, 
      onClose: function(modal) 
      { 
        $(modal).removeClass('modal-open'); 
      }
    });

    $('.easy-modal-open').click(function(e) {
      var target = $(this).attr('href');
      $("#modal-windows").css("display", "block");
      $("img").trigger("unveil");
      $(target).trigger('openModal');
      e.preventDefault();
    });

    $('.easy-modal-close').click(function(e) {
      $('.easy-modal').trigger('closeModal');
    });

  });

  //$("#modal-windows").css("display", "block");

});