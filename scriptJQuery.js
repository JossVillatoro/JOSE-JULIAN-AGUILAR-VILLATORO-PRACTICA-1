$(document).ready(function() {
    $('#botonCalcular').on('click', function() {
        // Obtener los valores de los inputs
        var numero1 = parseInt($('#numero1').val());
        var numero2 = parseInt($('#numero2').val());
        var operacion = $('#operacion').val();
        var result;

        // Verificar que los números sean válidos
        if (isNaN(numero1) || isNaN(numero2)) {
            $('#resultado').val('Ingresa dos números.');
            return;
        }

        // Realizar la operación seleccionada
        switch (operacion) {
            case 'sumar':
                result = numero1 + numero2;
                break;
            case 'restar':
                result = numero1 - numero2;
                break;
            case 'multiplicar':
                result = numero1 * numero2;
                break;
            case 'dividir':
                if (numero2 !== 0) {
                    result = numero1 / numero2;
                } else {
                    result = 'No se puede dividir';
                }
                break;
            default:
                result = 'Selecciona una operación';
        }

        // Mostrar el resultado
        $('#resultado').val(result);
    });
});
