//Evento submit
$('#formulario').submit(function() {
    let correo = $('#correo').val();
    let telefono = $('#tel').val();

    $('#datos').text(`Correo: ${correo} - Teléfono: ${telefono}`);
});

//Evento reset
$("#formulario").bind("reset", function(event){
    var respuesta = confirm ("¿Estás seguro de borrar los campos del formulario?");
    if(!respuesta)
        event.preventDefault();
})

//Evento change
$('#formulario').submit(function (evento) {
    evento.preventDefault();
    
    let resultado = '';

    $('.opcion').each(function (indice, opcion) {
        if ($(opcion).is(':checked')) {
        resultado += $(opcion).attr('value') + '.';
        }
    });

    if ($("input[name='sexo']").change(function(){
        alert("Has cambiado");
    }))

    $('#resultado').text(`El sexo seleccionado es: ${resultado}`);
});

//Evento focus
$('#correo').focus(function() {
    $('#campcorreo').text('El campo correo tiene el foco del cursor.');
});

$('#tel').focus(function() {
    $('#camptel').text('El campo teléfono tiene el foco del cursor.');
});

//Evento blur

$('#correo').blur(function() {
    $('#campcorreo').text('El campo correo ha perdido el foco del cursor.');
});

$('#tel').blur(function() {
    $('#camptel').text('El campo teléfono ha perdido el foco del cursor.');
});
