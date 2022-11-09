var nome1 = document.getElementById("nome")
var nome2 = 0
var nome3 = document.getElementById("nome3")
var vida = 20
var vida2 = 0
var vida3 = document.getElementById("vida")
var forca2 = 0
var forca3 = document.getElementById("forca3")
var agilidade2 = 0
var agilidade3 = document.getElementById("agilidade3")
var resistencia2 = 0
var resistencia3 = document.getElementById("resistencia3")
var inteligencia2 = 0
var inteligencia3 = document.getElementById("inteligencia3")
var sabedoria2 = 0
var sabedoria3 = document.getElementById("sabedoria3")
var carisma2 = 0
var carisma3 = document.getElementById("carisma3")

function nome(){
    nome1 = document.getElementById("nome")
    nome2 = nome1.value
    nome3.innerHTML = `${nome2}`
}

function comecar2(){
    vida2 = vida
    vida3.innerHTML = `${vida2}`
}

function bora1(){
    var frase1=document.getElementById("frase1")
    frase1.style.display = "block";
}

function bora2(){
    var frase2=document.getElementById("frase2")
    frase2.style.display = "block";
}

function bora3(){
    var frase3=document.getElementById("frase3")
    frase3.style.display = "block";
}

function bora4(){
    var frase4=document.getElementById("frase4")
    frase4.style.display = "block";
}

function bora5(){
    var frase5=document.getElementById("frase5")
    frase5.style.display = "block";
}

function bora6(){
    var frase6=document.getElementById("frase6")
    frase6.style.display = "block";
}

function forca(){    
    var forca1 = document.getElementById("forca")
    forca2 = forca1.value
    forca3.innerHTML = `${forca2}`
}

function agilidade(){
    var agilidade1 = document.getElementById("agilidade")
    agilidade2 = agilidade1.value
    agilidade3.innerHTML = `${agilidade2}`
}

function resistencia(){
    var resistencia1 = document.getElementById("resistencia")
    resistencia2 = resistencia1.value
    resistencia3.innerHTML = `${resistencia2}`
}

function inteligencia(){
    var inteligencia1 = document.getElementById("inteligencia")
    inteligencia2 = inteligencia1.value
    inteligencia3.innerHTML = `${inteligencia2}`
}

function sabedoria(){
    var sabedoria1 = document.getElementById("sabedoria")
    sabedoria2 = sabedoria1.value
    sabedoria3.innerHTML = `${sabedoria2}`
}

function carisma(){
    var carisma1 = document.getElementById("carisma")
    carisma2 = carisma1.value
    carisma3.innerHTML = `${carisma2}`
}

function testeSabedoria1(){
    var sucessoTesteSabedoria1=document.getElementById("sucessoTesteSabedoria1")
    var falhaTesteSabedoria1=document.getElementById("falhaTesteSabedoria1")
    var sabedoria1=document.getElementById("sabedoria")
    sabedoria2 += Math.floor(Math.random() * 8) + 1;
    if (sabedoria2 > 6) {
        sucessoTesteSabedoria1.style.display = "block";        
    } else {
        falhaTesteSabedoria1.style.display = "block";
    }
    sabedoria2 = sabedoria1.value
}

function cincoDeDano(){
    vida -= 5;
    vida2 = vida
    vida3.innerHTML = `${vida2}`
}

function testeInteligencia1(){
    var sucessoTesteInteligencia1=document.getElementById("sucessoTesteInteligencia1")
    var falhaTesteInteligencia1=document.getElementById("falhaTesteInteligencia1")
    var inteligencia1 = document.getElementById("inteligencia")
    inteligencia2 += Math.floor(Math.random() * 8) + 1;
    if (inteligencia2 > 6) {
        sucessoTesteInteligencia1.style.display = "block";        
    } else {
        falhaTesteInteligencia1.style.display = "block";
    }
    inteligencia2 = inteligencia1.value
}

/*function maisUmAtributos1(){
    var forca1 = document.getElementById("forca")
    forca2 = forca1.value + 1
    forca3.innerHTML = `${forca2}`
    var agilidade1 = document.getElementById("agilidade")
    agilidade2 = agilidade1.value + 1
    agilidade3.innerHTML = `${agilidade2}`
    var resistencia1 = document.getElementById("resistencia")
    resistencia2 = resistencia1.value + 1
    resistencia3.innerHTML = `${resistencia2}`

}

function maisUmAtributos2(){
    var inteligencia1 = document.getElementById("inteligencia")
    inteligencia2 = inteligencia1.value + 1
    inteligencia3.innerHTML = `${inteligencia2}`
    var sabedoria1 = document.getElementById("sabedoria")
    sabedoria2 = sabedoria1.value + 1
    sabedoria3.innerHTML = `${sabedoria2}`
    var carisma1 = document.getElementById("carisma")
    carisma2 = carisma1.value + 1
    carisma3.innerHTML = `${carisma2}`
}*/

function testeForca1(){
    var sucessoTesteForca1=document.getElementById("sucessoTesteForca1")
    var falhaTesteForca1=document.getElementById("falhaTesteForca1")
    var forca1 = document.getElementById("forca")
    forca2 = forca2 + (Math.floor(Math.random() * 8) + 1);
    if (forca2 > 6) {
        sucessoTesteForca1.style.display = "block";        
    } else {
        falhaTesteForca1.style.display = "block";
    }
    forca2 = forca1.value
}

function testeAgilidade1(){
    var sucessoTesteAgilidade1=document.getElementById("sucessoTesteAgilidade1")
    var falhaTesteAgilidade1=document.getElementById("falhaTesteAgilidade1")
    var agilidade1 = document.getElementById("agilidade")
    agilidade2 += Math.floor(Math.random() * 8) + 1;
    if (agilidade2 > 6) {
        sucessoTesteAgilidade1.style.display = "block";        
    } else {
        falhaTesteAgilidade1.style.display = "block";
    }
    agilidade2 = agilidade1.value
}

function testeCarisma1(){
    var sucessoTesteCarisma1=document.getElementById("sucessoTesteCarisma1")
    var falhaTesteCarisma1=document.getElementById("falhaTesteCarisma1")
    var proximaFrase=document.getElementById("proximaFrase")
    var carisma1 = document.getElementById("carisma")
    carisma2 += Math.floor(Math.random() * 8) + 1;
    if (carisma2 > 6) {
        sucessoTesteCarisma1.style.display = "block";        
    } else {
        falhaTesteCarisma1.style.display = "block";
    }
    proximaFrase.style.display = "block";
    carisma2 = carisma1.value
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

function testeForca2(){
    var sucessoTesteForca2=document.getElementById("sucessoTesteForca2")
    var falhaTesteForca2=document.getElementById("falhaTesteForca2")
    forca2 += Math.floor(Math.random() * 8) + 1;
    if (forca2 > 8) {
        sucessoTesteForca2.style.display = "block";        
    } else {
        falhaTesteForca2.style.display = "block";
    }
}

function testeAgilidade2(){
    var sucessoTesteAgilidade2=document.getElementById("sucessoTesteAgilidade2")
    var falhaTesteAgilidade2=document.getElementById("falhaTesteAgilidade2")
    agilidade2 += Math.floor(Math.random() * 8) + 1;
    if (agilidade2 > 8) {
        sucessoTesteAgilidade2.style.display = "block";        
    } else {
        falhaTesteAgilidade2.style.display = "block";
    }
}

function testeAgilidade3(){
    var sucessoTesteAgilidade3=document.getElementById("sucessoTesteAgilidade3")
    var falhaTesteAgilidade3=document.getElementById("falhaTesteAgilidade3")
    agilidade2 += Math.floor(Math.random() * 8) + 1;
    if (agilidade2 > 8) {
        sucessoTesteAgilidade3.style.display = "block";        
    } else {
        falhaTesteAgilidade3.style.display = "block";
    }
}

function testeAgilidade4(){
    var sucessoTesteAgilidade4=document.getElementById("sucessoTesteAgilidade4")
    var falhaTesteAgilidade4=document.getElementById("falhaTesteAgilidade4")
    agilidade2 += Math.floor(Math.random() * 8) + 1;
    if (agilidade2 > 8) {
        sucessoTesteAgilidade4.style.display = "block";        
    } else {
        falhaTesteAgilidade4.style.display = "block";
    }
}

function testeAgilidade5(){
    var sucessoTesteAgilidade5=document.getElementById("sucessoTesteAgilidade5")
    var falhaTesteAgilidade5=document.getElementById("falhaTesteAgilidade5")
    agilidade2 += Math.floor(Math.random() * 8) + 1;
    if (agilidade2 > 8) {
        sucessoTesteAgilidade5.style.display = "block";        
    } else {
        falhaTesteAgilidade5.style.display = "block";
    }
}

function testeResistencia1(){
    var sucessoTesteResistencia1=document.getElementById("sucessoTesteResistencia1")
    var falhaTesteResistencia1=document.getElementById("falhaTesteResistencia1")
    resistencia2 += Math.floor(Math.random() * 8) + 1;
    if (resistencia2 > 8) {
        sucessoTesteResistencia1.style.display = "block";        
    } else {
        falhaTesteResistencia1.style.display = "block";
    }
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

function testeInteligencia2(){
    var sucessoTesteInteligencia2=document.getElementById("sucessoTesteInteligencia2")
    var falhaTesteInteligencia2=document.getElementById("falhaTesteInteligencia2")
    inteligencia2 += Math.floor(Math.random() * 8) + 1;
    if (inteligencia2 > 8) {
        sucessoTesteInteligencia2.style.display = "block";        
    } else {
        falhaTesteInteligencia2.style.display = "block";
    }
}

function testeSabedoria2(){
    var sucessoTesteSabedoria2=document.getElementById("sucessoTesteSabedoria2")
    var falhaTesteSabedoria2=document.getElementById("falhaTesteSabedoria2")
    sabedoria2 += Math.floor(Math.random() * 8) + 1;
    if (sabedoria2 > 8) {
        sucessoTesteSabedoria2.style.display = "block";        
    } else {
        falhaTesteSabedoria2.style.display = "block";
    }
}

function testeCarisma2(){
    var sucessoTesteCarisma2=document.getElementById("sucessoTesteCarisma2")
    var falhaTesteCarisma2=document.getElementById("falhaTesteCarisma2")
    carisma2 += Math.floor(Math.random() * 8) + 1;
    if (carisma2 > 8) {
        sucessoTesteCarisma2.style.display = "block";        
    } else {
        falhaTesteCarisma2.style.display = "block";
    }
}