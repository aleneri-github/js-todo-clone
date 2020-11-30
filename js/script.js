// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.



$(document).ready(
  function() {

    // var source = document.getElementById("entry-template").innerHTML;
    var source = $("#entry-template").html();
    // console.log(source);
    var template = Handlebars.compile(source);

    var context = {
      title: "Regola dei terzi",
      body: "La regola dei terzi è un accorgimento che è stato utilizzato per secoli dai pittori ed è tuttora molto diffuso nella composizione di una fotografia. Dividendo l'immagine in terzi e ponendo il soggetto in uno dei punti di intersezione delle linee immaginarie ottenute, si ritiene che l'immagine risulti più dinamica (rispetto ad una composizione che pone il soggetto al suo centro), ma armonica al tempo stesso. La regola è talmente popolare che alcune macchine fotografiche sono dotate di mirini con una griglia di suddivisione in terzi per aiutare il fotografo."
     };
    var html = template(context);

    // console.log(html);

    $('#app').append(html);








  }
);
