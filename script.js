
let btnnome = document.getElementById('nome')
btnnome.addEventListener('keypress', detnome)

let ml = document.getElementById('mail')
ml.addEventListener('keypress', detmail)

let msg = document.getElementById('message')
msg.addEventListener('keypress', dettext)

let delt = document.querySelector('#btnnme')
delt.addEventListener('click', apagar)

let del = document.querySelector('#btnmail')
del.addEventListener('click', apagarmail)

let de = document.querySelector('#btntext')
de.addEventListener('click', apagartxt)

function apagartxt(){
  document.querySelector('#message').value = "";
}

function apagarmail(){
  document.querySelector('#mail').value = "";
}

function apagar(){
  document.querySelector('.effacer').value = "";
}

function detnome(){
  document.getElementById('btnnme').style.display = "flex";
  document.getElementById('btnmail').style.display = "none";
  document.getElementById('btntext').style.display = "none";
}

function detmail(){
  document.getElementById('btnmail').style.display = "flex";
  document.getElementById('btnnme').style.display = "none";
  document.getElementById('btntext').style.display = "none";
}

function dettext(){
  document.getElementById('btntext').style.display = "flex";
  document.getElementById('btnmail').style.display = "none";
  document.getElementById('btnnme').style.display = "none";
}

let inf = document.querySelector('#mandar')
inf.addEventListener('click', send)

function send(){
  let mail = document.querySelector('#mail')
  let nome = document.querySelector('#nome')
  let msg = document.querySelector('#message')
  let saida = document.querySelector('#info')
  saida.style.color="#fede00"
  saida.style.textAlign = "center"

  if(mail.value.length < 6 || nome.value.length < 2 || msg.value.length < 6  ){
    document.querySelector('#info').innerHTML = " Prenche coretamente todos campos para continuar !!!";
  }
}


gsap.from('.picbox', {opacity:0, duration:1.5,stagger: 1, x: 100})
gsap.from('.com1',{opacity: 0, duration: 1.5, x: -100})

ScrollReveal().reveal('.linguagen-content', {distance: '200px', interval: 600, delay: 400, duration: 600});

ScrollReveal().reveal('.serv-imgcontent', {distance: '200px', interval: 600, origin: 'left', duration: 1000});
ScrollReveal().reveal('.serco-textcontent', {distance: '200px', interval: 600, origin: 'left', duration: 1000, delay: 400});

ScrollReveal().reveal('.telmail', {distance: '200px', interval: 600, origin: 'bottom', duration: 1000});
ScrollReveal().reveal('.formu-container', {distance: '200px', interval: 600, origin: 'bottom', duration: 1000, delay: 400});
