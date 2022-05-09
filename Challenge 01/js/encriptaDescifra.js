var ejecuta=document.querySelector(".botones");
var textoACaja=document.querySelector(".caja-tc")

function encriptaTexto(){
   var textoAcifrar=document.querySelector("#textoPlano").value;
   const vocales=['e', 'i', 'a', 'o', 'u'];
   const llave =['nter', 'mes', 'i', 'ber', 'fat']
   const textoEnArreglo = textoAcifrar.split('');

   for (var i = 0; i < textoEnArreglo.length; i++) {
      for (var j = 0; j < vocales.length; j++) {
         if (textoEnArreglo[i]==vocales[j]) {
            textoEnArreglo[i]=textoEnArreglo[i]+llave[j];
         }
      }
      /*console.log(textoEnArreglo);*/
   }
   let texto=textoEnArreglo.join('');
   textoACaja.value=texto;
}

function descifraTexto(){
    var textoADescifrar=document.querySelector("#textoPlano").value;
    textof=textoADescifrar.replace(/enter/g,'e');
    textofuno=textof.replace(/imes/g,'i');
    textofdos=textofuno.replace(/ai/g,'a');
    textoftres=textofdos.replace(/ober/g,'o');
    textofcuatro=textoftres.replace(/ufat/g,'u');
    textoACaja.value=textofcuatro;
}
