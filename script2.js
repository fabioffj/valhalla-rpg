var nome1 = document.getElementById("nome")
var nome2 = 0
var nome3 = document.getElementById("nome3")
var vida = 20
var vida2 = 0
var vida3 = document.getElementById("vida")
var forca2 = 0
var forca3 = document.getElementById("forca3")
var forca4 = 0
var agilidade2 = 0
var agilidade3 = document.getElementById("agilidade3")
var agilidade4 = 0
var resistencia2 = 0
var resistencia3 = document.getElementById("resistencia3")
var resistencia4 = 0
var inteligencia2 = 0
var inteligencia3 = document.getElementById("inteligencia3")
var inteligencia4 = 0
var sabedoria2 = 0
var sabedoria3 = document.getElementById("sabedoria3")
var sabedoria4 = 0
var carisma2 = 0
var carisma3 = document.getElementById("carisma3")
var carisma4 = 0

function nome(){
    nome1 = document.getElementById("nome")
    nome2 = nome1.value;
    nome3.innerHTML = `${nome2}`
}

function forca(){    
    var forca1 = document.getElementById("forca")
    forca2 = forca1.value;
    forca3.innerHTML = `${forca2}`
}

function agilidade(){
    var agilidade1 = document.getElementById("agilidade")
    agilidade2 = agilidade1.value;
    agilidade3.innerHTML = `${agilidade2}`
}

function resistencia(){
    var resistencia1 = document.getElementById("resistencia")
    resistencia2 = resistencia1.value;
    resistencia3.innerHTML = `${resistencia2}`
}

function inteligencia(){
    var inteligencia1 = document.getElementById("inteligencia")
    inteligencia2 = inteligencia1.value;
    inteligencia3.innerHTML = `${inteligencia2}`
}

function sabedoria(){
    var sabedoria1 = document.getElementById("sabedoria")
    sabedoria2 = sabedoria1.value;
    sabedoria3.innerHTML = `${sabedoria2}`
}

function carisma(){
    var carisma1 = document.getElementById("carisma")
    carisma2 = carisma1.value;
    carisma3.innerHTML = `${carisma2}`
}

function comecar2(){
    vida2 = vida;
    vida3.innerHTML = `${vida2}`
    var fraseBora1 = document.getElementById("fraseBora1")
    fraseBora1.style.display = "block";
}

function bora1(){
    var frase1=document.getElementById("frase1")
    frase1.style.display = "block";
}

function cincoDeDano(){
    vida -= 5;
    vida2 = vida;
    vida3.innerHTML = `${vida2}`
}

function testeSabedoria1(){
    var fraseBora2 = document.getElementById("fraseBora2")
    fraseBora2.style.display = "block";
    var sucessoTesteSabedoria1=document.getElementById("sucessoTesteSabedoria1")
    var falhaTesteSabedoria1=document.getElementById("falhaTesteSabedoria1")
    sabedoria4 = sabedoria2 + (Math.floor(Math.random() * 8) + 1);
    if (sabedoria4 > 8) {
        sucessoTesteSabedoria1.style.display = "block";        
    } else {
        falhaTesteSabedoria1.style.display = "block";
    }
}

function bora2(){
    var frase2=document.getElementById("frase2")
    frase2.style.display = "block";
}

function testeInteligencia1(){
    var fraseBora3 = document.getElementById("fraseBora3")
    fraseBora3.style.display = "block";
    var sucessoTesteInteligencia1=document.getElementById("sucessoTesteInteligencia1")
    var falhaTesteInteligencia1=document.getElementById("falhaTesteInteligencia1")
    inteligencia4 = inteligencia2 + (Math.floor(Math.random() * 8) + 1);
    if (inteligencia4 > 8) {
        sucessoTesteInteligencia1.style.display = "block";        
    } else {
        falhaTesteInteligencia1.style.display = "block";
    }
}

function maisUmAtributos1(){
    forca2 = forca2 + 1;
    forca3.innerHTML = `${forca2}`
    agilidade2 = agilidade2 + 1;
    agilidade3.innerHTML = `${agilidade2}`
    resistencia2 = resistencia2 + 1;
    resistencia3.innerHTML = `${resistencia2}`
}

function bora3(){
    var frase3=document.getElementById("frase3")
    frase3.style.display = "block";
}

function testeForca1(){
    var fraseBora4 = document.getElementById("fraseBora4")
    fraseBora4.style.display = "block";
    var sucessoTesteForca1=document.getElementById("sucessoTesteForca1")
    var falhaTesteForca1=document.getElementById("falhaTesteForca1")
    forca4 = forca2 + (Math.floor(Math.random() * 8) + 1);
    if (forca4 > 8) {
        sucessoTesteForca1.style.display = "block";        
    } else {
        falhaTesteForca1.style.display = "block";
    }
}

function bora4(){
    var frase4=document.getElementById("frase4")
    frase4.style.display = "block";
}

function testeAgilidade1(){
    var fraseBora5 = document.getElementById("fraseBora5")
    fraseBora5.style.display = "block";
    var sucessoTesteAgilidade1=document.getElementById("sucessoTesteAgilidade1")
    var falhaTesteAgilidade1=document.getElementById("falhaTesteAgilidade1")
    agilidade4 = agilidade2 + (Math.floor(Math.random() * 8) + 1);
    if (agilidade4 > 8) {
        sucessoTesteAgilidade1.style.display = "block";        
    } else {
        falhaTesteAgilidade1.style.display = "block";
    }
}

function bora5(){
    var frase5=document.getElementById("frase5")
    frase5.style.display = "block";
}

function testeCarisma1(){
    var sucessoTesteCarisma1=document.getElementById("sucessoTesteCarisma1")
    var falhaTesteCarisma1=document.getElementById("falhaTesteCarisma1")
    var proximaFrase=document.getElementById("proximaFrase")
    carisma4 = carisma2 + (Math.floor(Math.random() * 8) + 1);
    if (carisma4 > 8) {
        sucessoTesteCarisma1.style.display = "block";        
    } else {
        falhaTesteCarisma1.style.display = "block";
    }
    proximaFrase.style.display = "block";
}

function maisUmAtributos2(){
    inteligencia2 = inteligencia2 + 1;
    inteligencia3.innerHTML = `${inteligencia2}`
    sabedoria2 = sabedoria2 + 1;
    sabedoria3.innerHTML = `${sabedoria2}`
    carisma2 = carisma2 + 1;
    carisma3.innerHTML = `${carisma2}`
}

function bora6(){
    var frase6=document.getElementById("frase6")
    frase6.style.display = "block";
}

function testeForca2(){
    var sucessoTesteForca2=document.getElementById("sucessoTesteForca2")
    var falhaTesteForca2=document.getElementById("falhaTesteForca2")
    forca4 = forca2 + (Math.floor(Math.random() * 8) + 1);
    if (forca4 > 10) {
        sucessoTesteForca2.style.display = "block";        
    } else {
        falhaTesteForca2.style.display = "block";
    }
}

function testeAgilidade2(){
    var sucessoTesteAgilidade2=document.getElementById("sucessoTesteAgilidade2")
    var falhaTesteAgilidade2=document.getElementById("falhaTesteAgilidade2")
    agilidade4 = agilidade2 + (Math.floor(Math.random() * 8) + 1);
    if (agilidade4 > 10) {
        sucessoTesteAgilidade2.style.display = "block";        
    } else {
        falhaTesteAgilidade2.style.display = "block";
    }
}

function testeResistencia1(){
    var sucessoTesteResistencia1=document.getElementById("sucessoTesteResistencia1")
    var falhaTesteResistencia1=document.getElementById("falhaTesteResistencia1")
    resistencia4 = resistencia2 + (Math.floor(Math.random() * 8) + 1);
    if (resistencia4 > 10) {
        sucessoTesteResistencia1.style.display = "block";        
    } else {
        falhaTesteResistencia1.style.display = "block";
    }
}

function testeInteligencia2(){
    var sucessoTesteInteligencia2=document.getElementById("sucessoTesteInteligencia2")
    var falhaTesteInteligencia2=document.getElementById("falhaTesteInteligencia2")
    inteligencia4 = inteligencia2 + (Math.floor(Math.random() * 8) + 1);
    if (inteligencia4 > 10) {
        sucessoTesteInteligencia2.style.display = "block";        
    } else {
        falhaTesteInteligencia2.style.display = "block";
    }
}

function testeAgilidade3(){
    var sucessoTesteAgilidade3=document.getElementById("sucessoTesteAgilidade3")
    var falhaTesteAgilidade3=document.getElementById("falhaTesteAgilidade3")
    agilidade4 = agilidade2 + (Math.floor(Math.random() * 8) + 1);
    if (agilidade4 > 10) {
        sucessoTesteAgilidade3.style.display = "block";        
    } else {
        falhaTesteAgilidade3.style.display = "block";
    }
}

function testeResistencia2(){
    var sucessoTesteResistencia2=document.getElementById("sucessoTesteResistencia2")
    var falhaTesteResistencia2=document.getElementById("falhaTesteResistencia2")
    resistencia4 = resistencia2 + (Math.floor(Math.random() * 8) + 1);
    if (resistencia4 > 10) {
        sucessoTesteResistencia2.style.display = "block";        
    } else {
        falhaTesteResistencia2.style.display = "block";
    }
}

function testeSabedoria2(){
    var sucessoTesteSabedoria2=document.getElementById("sucessoTesteSabedoria2")
    var falhaTesteSabedoria2=document.getElementById("falhaTesteSabedoria2")
    sabedoria4 = sabedoria2 + Math.floor(Math.random() * 8) + 1;
    if (sabedoria4 > 10) {
        sucessoTesteSabedoria2.style.display = "block";        
    } else {
        falhaTesteSabedoria2.style.display = "block";
    }
}

function testeAgilidade4(){
    var sucessoTesteAgilidade4=document.getElementById("sucessoTesteAgilidade4")
    var falhaTesteAgilidade4=document.getElementById("falhaTesteAgilidade4")
    agilidade4 = agilidade2 + (Math.floor(Math.random() * 8) + 1);
    if (agilidade4 > 10) {
        sucessoTesteAgilidade4.style.display = "block";        
    } else {
        falhaTesteAgilidade4.style.display = "block";
    }
}

function testeResistencia3(){
    var sucessoTesteResistencia3=document.getElementById("sucessoTesteResistencia3")
    var falhaTesteResistencia3=document.getElementById("falhaTesteResistencia3")
    resistencia4 = resistencia2 + (Math.floor(Math.random() * 8) + 1);
    if (resistencia4 > 10) {
        sucessoTesteResistencia3.style.display = "block";        
    } else {
        falhaTesteResistencia3.style.display = "block";
    }
}

function testeCarisma2(){
    var sucessoTesteCarisma2=document.getElementById("sucessoTesteCarisma2")
    var falhaTesteCarisma2=document.getElementById("falhaTesteCarisma2")
    carisma4 = carisma2 + (Math.floor(Math.random() * 8) + 1);
    if (carisma4 > 10) {
        sucessoTesteCarisma2.style.display = "block";        
    } else {
        falhaTesteCarisma2.style.display = "block";
    }
}

function testeAgilidade5(){
    var sucessoTesteAgilidade5=document.getElementById("sucessoTesteAgilidade5")
    var falhaTesteAgilidade5=document.getElementById("falhaTesteAgilidade5")
    agilidade4 = agilidade2 + (Math.floor(Math.random() * 8) + 1);
    if (agilidade4 > 10) {
        sucessoTesteAgilidade5.style.display = "block";        
    } else {
        falhaTesteAgilidade5.style.display = "block";
    }
}

function testeResistencia4(){
    var sucessoTesteResistencia4=document.getElementById("sucessoTesteResistencia4")
    var falhaTesteResistencia4=document.getElementById("falhaTesteResistencia4")
    resistencia4 = resistencia2 + (Math.floor(Math.random() * 8) + 1);
    if (resistencia4 > 10) {
        sucessoTesteResistencia4.style.display = "block";        
    } else {
        falhaTesteResistencia4.style.display = "block";
    }
}

function parabens(){
    alert("PARABÉNS! VOCÊ SALVOU SUA VILA!")
    addEventListener("click", function() { alert("Obrigado por jogar!"); })
    window.location.reload();
}

function parabens2(){
    alert("PARABÉNS! VOCÊ SE SALVOU!")
    addEventListener("click", function() { alert("Obrigado por jogar!"); })
    window.location.reload();
}

function parabens3(){
    alert("VOCÊ SE SALVOU!")
    addEventListener("click", function() { alert("Obrigado por jogar!"); })
    window.location.reload();
}

function morreu(){
    alert("VOCÊ MORREU!")
    addEventListener("click", function() { alert("Obrigado por jogar!"); })
    window.location.reload();
}