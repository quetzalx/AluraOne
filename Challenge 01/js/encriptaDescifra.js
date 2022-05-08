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
    const vocales=['e', 'i', 'a', 'o', 'u'];
    const llave =['enter', 'imes', 'ai', 'ober', 'ufat']
    const textoEnArreglo = textoADescifrar.split('');
    const texto=textoADescifrar;

/*    for (var i = 0; i < 4; i++) {
        textoF=texto.replace(/llave[i]/g,vocales[i]);
        console.log(texto);
    }
*/
    textof=textoADescifrar.replace(/enter/g,'e');
    console.log(textof);
    textofuno=textof.replace(/imes/g,'i');
    console.log(textofuno);
    textofdos=textofuno.replace(/ai/g,'a');
    console.log(textofdos);
    textoftres=textofdos.replace(/ober/g,'o');
    console.log(textoftres);
    textofcuatro=textoftres.replace(/ufat/g,'u');

    console.log(textofcuatro);
    textoACaja.value=textofcuatro;
}
