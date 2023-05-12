var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 300){
    pesoValido = false;
    tdImc.textContent = "Peso inválido."
}

if(altura <= 0 || altura >= 3.00) {
    alturaValida = false;
    tdImc.textContent = "Altura inválida."

}

if(alturaValida && pesoValido) {
var imc = peso / (altura * altura);
tdImc.textContent = imc;
}