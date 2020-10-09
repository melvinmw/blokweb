// JavaScript Document
var fotos = ['book1.jpg', 'book2.jpg', 'book3.jpg', 'book4.jpg'];


// a. DOM elementen die een rol spelen in dit script
var fotoImg = document.querySelector('#fotoboek');
var huidigNrSpan = document.querySelector('#huidigeFotoNr');
var laatsteNrSpan = document.querySelector('#laatsteFotoNr');
var vooruitButton = document.querySelector('#right');
var achteruitButton = document.querySelector('#left');

var navigatie = document.querySelector(".navigation");
var hamburgerMenu = document.querySelector(".hamburger");

var menuLinks = document.querySelectorAll(".lijst")

var huidigFotoNr = 0 ; // initieel op 0
toonHuidigeFoto();	


function toonHuidigeFoto() {
	console.log('bladeren ' + huidigFotoNr);
	fotoImg.src = 'images/' + fotos[huidigFotoNr];
	huidigNrSpan.textContent = huidigFotoNr ;
	laatsteNrSpan.textContent = fotos.length - 1;
}

function klikhamburger() {
navigatie.classList.toggle("navigation")
hamburgerMenu.classList.toggle("hamburger")
}


// c. eventHandlers: twee  bladerfuncties voor heen en weer bladeren

function bladerVooruit() {
	huidigFotoNr = huidigFotoNr + 1 ;
	if ( huidigFotoNr > fotos.length -1 ) { // voorbij het einde 
		huidigFotoNr = 0 ; // terug naar begin
	}
	toonHuidigeFoto();	
}

function bladerAchteruit() {
	huidigFotoNr = huidigFotoNr - 1 ;
	if ( huidigFotoNr < 0 ) { // voorbij het begin 
		huidigFotoNr = fotos.length -1 ; // terug naar einde
	}
	toonHuidigeFoto();
}

// d. eventlisteners: voor de heen en weer knoppen die de bladerfuncties aanroepen
vooruitButton.addEventListener('click' , bladerVooruit );
achteruitButton.addEventListener('click' , bladerAchteruit );
hamburgerMenu.addEventListener("click", klikhamburger);
