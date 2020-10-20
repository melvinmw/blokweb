// a. DOM elementen die een rol spelen in dit script
var navBar = document.querySelector(".navigatie");
var hamKnop = document.querySelector(".hamburger");

function toggleHam(){
	navBar.classList.toggle("toonNav")
	hamKnop.classList.toggle("sluiten")
}

// eventlisteners= bedoeld voor de knop die de funcie aanroept
hamKnop.addEventListener('click', toggleHam );
