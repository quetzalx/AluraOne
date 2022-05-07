var textoPlano = document.querySelector("#textoPlano");

textoPlano.addEventListener("input", function(event){
   /*var textoCifrado = document.querySelector(".texto-cifrado");*/
   var contenido = textoPlano.textContent;
   if (this.value.length > 0) {
           var expresion = new RegExp(this.value);
           if (!expresion.test(contenido)){
              /*console.log("No muestra el muñeco");*/
              document.getElementById("muneco").style.display="none";
           }else{
              /*console.log("Muestra al muñeco");*/
              document.getElementById("muneco").style.visibility="initial"
              }
   }else{        
        console.log("Muestra el muñeco 2");
        document.getElementById("muneco").style.display="initial";
      }
});
