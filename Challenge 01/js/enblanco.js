var textoPlano = document.querySelector("#textoPlano");

textoPlano.addEventListener("input", function(event){
   /*var textoCifrado = document.querySelector(".texto-cifrado");*/
   var contenido = textoPlano.textContent;
   if (this.value.length > 0) {
           var expresion = new RegExp(this.value);
           if (!expresion.test(contenido)){
              /*console.log("No muestra el muñeco");*/
              document.getElementById("muneco").style.display="none";
              document.getElementById("sinTexto").style.display="none";
              document.getElementById("sinTextoDos").style.display="none";
              document.getElementById("textoCifrado").style.display="revert";
           }else{
              /*console.log("Muestra al muñeco");*/
              document.getElementById("muneco").style.visibility="flex";
              document.getElementById("sinTexto").style.visibility="revert";
              document.getElementById("sinTextoDos").style.visibility="revert";
              document.getElementById("textoCifrado").style.visibility="none";
              }
   }else{
        /*console.log("Muestra el muñeco 2");*/
        document.getElementById("muneco").style.display="flex";
        document.getElementById("sinTexto").style.display="revert";
        document.getElementById("sinTextoDos").style.display="revert";
        document.getElementById("textoCifrado").style.display="none";
        document.getElementById("textoCifrado").value='';
      }
});
