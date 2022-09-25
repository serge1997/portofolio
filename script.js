
let btnnome = document.getElementById('nome')
btnnome.addEventListener('keypress', detnome)

let delt = document.querySelector('.fa-trash')
delt.addEventListener('click', apagar)

function apagar(){
  document.querySelector('.effacer').value = "";
}

function detnome(){
  document.getElementById('btnnme').style.display = "flex";
}
