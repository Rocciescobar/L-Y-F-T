$(document).ready(function() {  
  // Animación splash  
  $('.start-view').hide();
  $('#splashscreen').show();    
  setTimeout(function() {
    $('#splashscreen').fadeOut(500);
    $('.start-view').show();
  }, 2000);

  // Selecciona una bandera
  $('#flag-list').on('click', function() {
    var link = $(event.target).attr('src');
    $('.main-flag').attr('src', link);
  });

  // Habilitar boton "Next"
  $('#input-phone').on('keyup', function() {
    var digits = $(this).val().length;
    if (digits > 9) {
      $('#button-next').removeClass('disabled');
    } else {
      $('#button-next').addClass('disabled');;
    }
  });

  // Generar código aleatorio
  $('#button-next').on('click', function() {
    var codeRandom = Math.floor((Math.random() * 900) + 100);
    alert('Tu código es: LAB-' + codeRandom);
    console.log(codeRandom);
    $('#input-phone').val() === '';
  });
});