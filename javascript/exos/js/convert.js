const form = document.querySelector("form");
const input_euro = document.getElementById("euro");
const input_chf = document.getElementById("chf");

// Gestion des événements
form.onsubmit = function (e) {
  e.preventDefault();
};
input_euro.oninput = function (e) {
  input_chf.value = input_euro.value / 1.06;
};
input_chf.oninput = function (e) {
  input_euro.value = input_chf.value * 1.06;
};
