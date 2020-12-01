// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.



$(document).ready(
  function() {

    var listaSerieTv = [
      "BREAKING BAD",
      "BAND OF BROTHERS",
      "STAR TREK",

    ];

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < listaSerieTv.length; i++) {
      var context = {
        text: listaSerieTv[i]
      };
      var html = template(context);
      $('#serie-tv').append(html);
    }

    $(document).on("click", ".delete",
      function() {
        $(this).parent().fadeOut(1000);
      }
    );


    // pulsante da collegare
    $('#invia').click(
      function() {
        console.log('CLICK');
        var nuovaSerie = $('input').val().toUpperCase();
         $("input"). val ("");
        console.log(nuovaSerie);
        var context = {
          text: nuovaSerie
        };
        var html = template(context);
        $('#serie-tv').append(html);

      }
    )

    $('input').keypress (function(event) {
      if(event.which == 13 || event.keyCode == 13) {
        var nuovaSerie = $('input').val().toUpperCase();
         $("input"). val ("");
        console.log(nuovaSerie);
        var context = {
          text: nuovaSerie
        };
        var html = template(context);
        $('#serie-tv').append(html);
      }
    }
  )
  }
);
