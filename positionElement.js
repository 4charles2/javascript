//Calcule la position d'un element sur la page en parcourant tous les parents de l'élément.

function getPositionLeft (obj) {
	var curleft = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		while (obj = obj.offsetParent) {curleft += obj.offsetLeft;}
	}
	return curleft;
}

function getPositionTop (obj) {
	var curtop = 0;
	if (obj.offsetParent) {
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent) {curtop += obj.offsetTop;}
	}
	return curtop;
}
