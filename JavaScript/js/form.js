var botonAgregar = document.querySelector("#agregar-paciente");

botonAgregar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-agregar");
    var paciente = capturaDatosPaciente(form);

    var errores = validarPaciente(paciente);
    if (errores.length > 0) {
       exhibirMensajesErrores(errores);
//       var mensajeError = document.querySelector("#mensaje-error")
//       mensajeError.textContent=error;
       return;
    }
    if (!validarPaciente(paciente)) {
       //console.log("Paciente incorrecto");
       return;
    }

    agregarPacienteEnLaTabla(paciente);
    form.reset();

    var limpiarMensajesErrores = document.querySelector("#mensajes-errores");
    limpiarMensajesErrores.innerHTML = "";
});

function agregarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturaDatosPaciente(form){
   var paciente = {
     nombre: form.nombre.value,
     peso: form.peso.value,
     altura: form.altura.value,
     gordura: form.gordura.value,
     imc: calcularIMC(form.peso.value, form.altura.value)
   }
   return paciente;
}

function construirTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente){
    var errores = [];

    if (paciente.nombre.length == 0) {
       errores.push("El nombre no puede estar vacío");   //asignas la cadena al arreglo
    }

    if (paciente.peso.length == 0) {
       errores.push("El peso no puede estar vacío");   //asignas la cadena al arreglo
    }

    if (paciente.altura.length == 0) {
       errores.push("La altura no puede estar vacía");   //asignas la cadena al arreglo
    }

    if (paciente.gordura.length == 0) {
       errores.push("El porcentaje de gordura no puede estar vacío");   //asignas la cadena al arreglo
    }

    if (!validarPeso(paciente.peso)) {
       errores.push("El peso es incorrecto");   //asignas la cadena al arreglo
    }
    if (!validarAltura(paciente.altura)){
       errores.push("La altura es incorrecta");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";

    errores.forEach(function(error){
       var li = document.createElement("li");
       li.textContent = error;
       ul.appendChild(li);
    });
}
