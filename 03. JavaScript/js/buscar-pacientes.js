var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click", function(){
   console.log("Buscando pacientes...");
   var xhr = new XMLHttpRequest;
   xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json")
   xhr.addEventListener("load",function(){
       var errorAjax = document.querySelector("#error-ajax");
       if (xhr.status == 200) {
           errorAjax.classList.add("invisible");
           var respuesta = xhr.responseText;
    //       console.log(respuesta);
    //       console.log(typeof respuesta);
    //     como es una variable tipo string, cambiamos a arreglo como sigue:
           var pacientes = JSON.parse(respuesta);
    //       console.log(pacientes);
    //       console.log(typeof pacientes);

           pacientes.forEach(function(paciente){
              agregarPacienteEnLaTabla(paciente);
              console.log(paciente);
           });
       }else {
           errorAjax.classList.remove("invisible");
           console.log(xhr.status);
           console.log(xhr.responseText);
       }

   });
   xhr.send();
});
