﻿$(document).ready(function () {

});


function clearText(element) {
    if (element.value === "") {
        element.placeholder = "";
    }
}

function restoreTextU(element) {
    if (element.value === '') {
        element.placeholder = "Nombre de usuario";
    }
}

function restoreTextP(element) {
    if (element.value === '') {
        element.placeholder = "Contraseña";
    }
}

$('#access').click(function () {
    console.log("access");
    // Redireccionar a la nueva vista
    $.ajax({
        url: '/Login/Menu',
        method: 'GET',
        success: function (data) {
            // Manejar la respuesta si es necesario
            console.log("DENTRO DEL AJAX");
            window.location.href = '/Login/Menu';
        }
    });
});

$('#drag').click(function () {
    console.log("drag");
    // Redireccionar a la nueva vista
    $.ajax({
        url: '/Login/Ejercicios',
        method: 'GET',
        success: function (data) {
            // Manejar la respuesta si es necesario
            console.log("DENTRO DEL AJAX");
            window.location.href = '/Login/Ejercicios';
        }
    });
});




