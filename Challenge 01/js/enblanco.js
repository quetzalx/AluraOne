var textoPlano = document.querySelector("#textoPlano");
var textoCifrado = document.querySelector(".desaparece")

textoPlano.addEventListener("input", function(){
   if (textoPlano>0){
       textoCifrado.add("desaparece");
   }
   else{
       textoCifrado.remove("desaparece");
   }
   });
});
