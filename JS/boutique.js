function defile (idContenu, idConteneur, temps){
//fonction recursive pour défilement

	function go(){
		position-- ;
		if (position+hContenu < min) {
			position = max ;
			page = 0 ;
		}
		leContenu.style.top = position + "px" ;
		if (position+(max-min)*page <= min) {
			page++ ;
			leTimer = setTimeout(go, temps*100) ;
		}else{
			leTimer = setTimeout(go, temps) ;
		}
	}

// variable locales

var leContenu = document.getElementById(idContenu) ;
var leConteneur = document.getElementById(idConteneur) ;
var hContenu = leContenu.offsetHeight ;
var min = leContenu.offsetTop ;
var max = leConteneur.offsetHeight ;
var position = max ;
var page = 0 ;
var leTimer ;

// appel de go pour demarrer le défilement

go() ;

//événement survol sur calque conteneur
	leConteneur.onmouseover = function() {
		clearTimeout(leTimer) ;
}
//événement fin de survol sur calque conteneur
	leConteneur.onmouseout =function() {
		go();
}

}

//--- dimensionnement et positionnement du navigateur ---
function dimposNavigateur (idCalquePrincipal, marge) {

  var margeNavigateur = 100 ;
  var calque = document.getElementById(idCalquePrincipal) ;
  var hCalque = calque.offsetHeight ;
  var lCalque = calque.offsetWidth ;
  var hEcran = screen.availHeight ;
  var lEcran = screen.availWidth ;
  
  // calcul des coordonnées de la fenetre, après centrage
  var y = Math.max(0, hEcran - hCalque - 2*marge - margeNavigateur)/2 ;
  var x = Math.max(0, lEcran - lCalque - 2*marge)/2 ;
  
  // calcul de la taille de la fenetre en fonction du calque principal
  var hauteur = Math.min(hEcran, hCalque + 2*marge + margeNavigateur) ;
  var largeur = Math.min(lEcran, lCalque + 2*marge) ;
  
  // positionnement et dimensionnement de la fenetre
  moveTo(x, y) ;
  resizeTo(largeur, hauteur) ;
  
}

window.onload = function() {
	
	//--- redimensionnement de la fenetre ---
	//dimposNavigateur ("divPrincipal", 50) ;
	
	
	
	document.getElementById("cmdOK").onclick = function() {
		if (document.getElementById("txtLogin").value=="" || document.getElementById("pwdMdp").value=="") {
			alert("les deux champs doivent être remplis") ;
		}
	}
	defile ("divTextNews","divNews",10) ;
		

}













































