var inscriptionBtElt = document.getElementById('submitInscription');
var inputsElts = document.querySelectorAll('.inputInscription');
var triangleElt = document.getElementById('triangle');
var containInfoElt = document.getElementById('containInfo');
var infoInscriptionElt = document.getElementById('infoInscription');
var formElt = document.getElementById('formInscription');
var containInfoFieldElt = document.getElementById('containInfoField');
var txtInfoElt = document.getElementById('txtInfo');
var fieldsetElt = document.querySelector('fieldset');
var formGroupesElts = document.querySelectorAll('.form-group');
var regex = {
		pseudo: /([a-z]+){3}/,
		email: /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
		mdp: /([A-Z0-9a-z]+){5,}/,
		mdpV: /([A-Z0-9a-z]+){5,}/
};

inputsElts.forEach(function(element) {
	
	element.addEventListener("focus", function(e) {
		containInfoElt.style.visibility = "hidden";
		document.querySelector('section').appendChild(containInfoElt);
		var containInfoField = document.getElementById('containInfoField');
		var txtInfoFieldElt = document.getElementById('txtInfoField');

		for (var i = 0; i < formGroupesElts.length; i++) {
			formGroupesElts[i].style.transform = "scale(1.1)";
		}

		switch(e.target.id){
			case "pseudo":
				txtInfoFieldElt.textContent = "Min 3 caractères minuscule";
				containInfoFieldElt.style.visibility = "visible";
				formGroupesElts[0].style.transform = "scale(1.2,1.2)";
				formGroupesElts[0].insertBefore(containInfoField, formGroupesElts[0].firstChild);
			break;
			case "email":
				txtInfoFieldElt.textContent = "adresse standard";
				containInfoFieldElt.style.visibility = "visible";
				formGroupesElts[1].style.transform = "scale(1.2,1.2)";
				formGroupesElts[1].insertBefore(containInfoField, formGroupesElts[1].firstChild);
			break;
			case "password":
				txtInfoFieldElt.textContent = "Au moins 5 minuscules";
				containInfoFieldElt.style.visibility = "visible";
				formGroupesElts[2].style.transform = "scale(1.2,1.2)";
				formGroupesElts[2].insertBefore(containInfoField, formGroupesElts[2].firstChild);
			break;
			case "vpassword":
				txtInfoFieldElt.textContent = "Identique à password";
				containInfoFieldElt.style.visibility = "visible";
				formGroupesElts[3].style.transform = "scale(1.2,1.2)";
				formGroupesElts[3].insertBefore(containInfoField, formGroupesElts[3].firstChild);
			break;
			default:
				containInfoFieldElt.style.visibility = "hidden";
			break;
		}
	});
})
inscriptionBtElt.addEventListener("click", function(e) {
	var id = 0;
	e.preventDefault();
	containInfoField.style.visibility = "hidden";
	document.querySelector('section').appendChild(containInfoField);
	
	for (var i = 0; i < formGroupesElts.length; i++) {
			formGroupesElts[i].style.transform = "scale(1.1)";
	}

	for (var i in regex) {
		if (regex[i].test(inputsElts[id].value)) {
			console.log("test positif pour : " + i);
		} else {
			console.log("test negatif pour : " + i);
			showInfo(inputsElts[id]);
			break;
		}
		id++;
	}
	if (id == 4){
		var inscritData = new FormData();
			inscritData.append("pseudo", inputsElts[0].value);
			inscritData.append("email", inputsElts[1].value);
			inscritData.append("mdp", inputsElts[2].value);
		
		ajaxPost('http://styleetvous.fr/site_styleTvous/php/formulaireInscription.php', inscritData, function (reponse) {
			
			var inputsElts = document.querySelectorAll('.inputInscription');
			var containInfoElt = document.getElementById('containInfo');
					
			if (reponse == "00") {
				containInfo.style.visibility = "visible";
				txtInfoElt.textContent = "Ce pseudo et cette email sont déjà utilisé merci dans choisir des autres !";
				inputsElts[0].parentNode.parentNode.appendChild(containInfoElt);
			} else if (reponse == "10") {
				containInfo.style.visibility = "visible";
				inputsElts[1].parentNode.parentNode.appendChild(containInfoElt);
				txtInfoElt.textContent = "Cette adresse email existe déjà merci dans choisir une autre !";
			} else if (reponse == "01") {
				containInfo.style.visibility = "visible";
				txtInfoElt.textContent = "Ce pseudo existe déjà merci dans choisir un autre !";
				inputsElts[0].parentNode.parentNode.appendChild(containInfoElt);
			}else {
				infoInscriptionElt.style.background = "radial-gradient(ellipse farthest-corner, white, rgba(0,255,0,0.1) 75%,rgba(0,255,0,0.2) 95%, rgba(0,0,0,0.9) 99%)";
				containInfo.style.visibility = "visible";
				txtInfoElt.textContent = "Merci pour votre inscription !";
				showInfo(inputsElts[0]);
				triangleElt.style.visibility = "hidden";
				fieldsetElt.style.marginBottom = "10px";
			//	TEMPS AVANT LE RECHARGEMENT DE LA PAGE 
				setTimeout(function () {
					location.reload();
				}, 2000);
			
			}
			console.log("les données enregistré : " + JSON.stringify(reponse));
			console.log("La reponse de la requête : " + reponse);
		},false);
	}
});

function showInfo(inputElt) {
	containInfoElt.style.visibility = "visible";
	console.log("Dans show element");
	inputElt.parentNode.parentNode.appendChild(containInfoElt);
}