// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.



$(document).ready(
  function() {

    var listaSerieTv = [
      "BREAKING BAD",
      "BAND OF BROTHERS",
      "STAR TREK",
      "I SIMPSON",
      "IL TRONO DI SPADE",
      "WEST WING",
      "THE WIRE",
      "I SOPRANO"
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

    $('.delete').click(
      function() {
        $(this).parent().remove();
      }
    );
















  }
);
