var ejecuta=document.querySelector(".botones");
var textoACaja=document.querySelector(".caja-tc")

function encriptaTexto(){
   var textoAcifrar=document.querySelector("#textoPlano").value;
   const vocales=['e', 'i', 'a', 'o', 'u'];
   const llave =['nter', 'mes', 'i', 'ber', 'fat']
   /*const tAC=textoAcifrar.split('');*/
   const textoEnArreglo = textoAcifrar.split('');

   for (var i = 0; i < textoEnArreglo.length; i++) {
      for (var j = 0; j <= vocales.length; j++) {
         if (textoEnArreglo[i]==vocales[j]) {
            textoEnArreglo[i]=textoEnArreglo[i]+llave[j];
         }
      }
      console.log(textoEnArreglo);
   }

/*   for (var i = 0; i < textoEnArreglo.length; i++) {
      if (textoEnArreglo[i]=="e") {
         textoEnArreglo[i]=textoEnArreglo[i]+"nter";
      }
      if (textoEnArreglo[i]=="i") {
         textoEnArreglo[i]=textoEnArreglo[i]+"mes"
      }
      if (textoEnArreglo[i]=="a") {
         textoEnArreglo[i]=textoEnArreglo[i]+"i"
      }
      if (textoEnArreglo[i]=="o") {
         textoEnArreglo[i]=textoEnArreglo[i]+"ber"
      }
      if (textoEnArreglo[i]=="u") {
         textoEnArreglo[i]=textoEnArreglo[i]+"fat"
      }
      console.log(textoEnArreglo[i]);
    }*/
    let texto=textoEnArreglo.join('');
    textoACaja.value=texto;

/*    var indice=0;
    tAC.forEach(function(elemento, indice){
       if (elemento[indice]==vocales[indice]) {
          elemento[indice]=elemento[indice]+llave[indice];
          console.log("Compara elementos y vocales");
          console.log(elemento[indice]);
       }
    });
    console.log(tAC);*/
}

function descifraTexto(){
   console.log("Cuando click en descifrado")
}


function resultado(){

}
