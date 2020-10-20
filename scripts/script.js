
var fotos = ['book1.jpg', 'book2.jpg', 'book3.jpg', 'book4.jpg'];

var fotoImg = document.querySelector('#fotoboek');
var huidigNrSpan = document.querySelector('#huidigeFotoNr');
var laatsteNrSpan = document.querySelector('#laatsteFotoNr');
var vooruitButton = document.querySelector('#right');
var achteruitButton = document.querySelector('#left');

var navBar = document.querySelector(".navigatie");
var hamKnop = document.querySelector(".hamburger");


var huidigFotoNr = 0 ;
toonHuidigeFoto();	


function toonHuidigeFoto() {
	console.log('bladeren ' + huidigFotoNr);
	fotoImg.src = 'images/' + fotos[huidigFotoNr];
	huidigNrSpan.textContent = huidigFotoNr ;
	laatsteNrSpan.textContent = fotos.length - 1;
}

function toggleHam(){
	navBar.classList.toggle("toonNav")
	hamKnop.classList.toggle("sluiten")
}

function bladerVooruit() {
	huidigFotoNr = huidigFotoNr + 1 ;
	if ( huidigFotoNr > fotos.length -1 ) { 
		huidigFotoNr = 0 ; 
	}
	toonHuidigeFoto();	
}

function bladerAchteruit() {
	huidigFotoNr = huidigFotoNr - 1 ;
	if ( huidigFotoNr < 0 ) { 
		huidigFotoNr = fotos.length -1 ; 
	}
	toonHuidigeFoto();
}

vooruitButton.addEventListener('click' , bladerVooruit );
achteruitButton.addEventListener('click' , bladerAchteruit );
hamKnop.addEventListener('click', toggleHam );
