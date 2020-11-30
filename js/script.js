// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.



$(document).ready(
  function() {

    // var source = document.getElementById("entry-template").innerHTML;
    var source = $("#entry-template").html();
    console.log(source);
    var template = Handlebars.compile(source);

    var context = {
      title: "My New Post",
      body: "This is my first post!" };
    var html = template(context);








  }
);
