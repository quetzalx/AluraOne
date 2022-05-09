var clickcopiar=document.querySelector(".botonCopiar");


function copiaTextoCD(){
    var textoACopiar = document.querySelector(".caja-tc");
    var limpiacaja=document.querySelector(".caja-tp");

    if (textoACopiar!=0) {
      textoACopiar.select();
      textoACopiar.setSelectionRange(0,99999);
      texto=document.execCommand('copy');
      limpiacaja.select();
      limpiacaja.value="";      
    }else {

      return null;
    }
    limpiacaja.value="";
}
