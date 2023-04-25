const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')



$(".enviar").on("click", function() {
    alert("Datos enviados correctamente!!!");
})
$(".cambiar").click(function() {
    $(".parrafo").addClass("nuevo");
});
$("p, h3, h4").hover(function() {
    $(this).css("color", "blue");
}, function() {
    $(this).css("color", "white");
});

$(".ocultar").on("click", function() {
    $(".p").slideToggle();
});

$(".ocultar").click(function() {
    $(this).slideToggle();
});
$("h5").dblclick(function() {
    $(this).css("color", "red");
});