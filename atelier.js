

var element_0 = document.getElementById('0');
var element_1 = document.getElementById('1');
var element_2 = document.getElementById('2');
var element_3 = document.getElementById('3');
var element_4 = document.getElementById('4');
var element_5 = document.getElementById('5');
var element_6 = document.getElementById('6');
var element_7 = document.getElementById('7');

function remise_zero(){
	element_0.style.background = "none";
	element_1.style.background = "none";
	element_2.style.background = "none";
	element_3.style.background = "none";
	element_4.style.background = "none";
	element_5.style.background = "none";
	element_6.style.background = "none";
	element_7.style.background = "none";
	element_0.style.color = "black";
	element_1.style.color = "black";
	element_2.style.color = "black";
	element_3.style.color = "black";
	element_4.style.color = "black";
	element_5.style.color = "black";
	element_6.style.color = "black";
	element_7.style.color = "black";
	element_0.style.fontSize = "1em";
	element_1.style.fontSize = "1em";
	element_2.style.fontSize = "1em";
	element_3.style.fontSize = "1em";
	element_4.style.fontSize = "1em";
	element_5.style.fontSize = "1em";
	element_6.style.fontSize = "1em";
	element_7.style.fontSize = "1em";
	element_0.style.boxShadow = "none";
	element_1.style.boxShadow = "none";
	element_2.style.boxShadow = "none";
	element_3.style.boxShadow = "none";
	element_4.style.boxShadow = "none";
	element_5.style.boxShadow = "none";
	element_6.style.boxShadow = "none";
	element_7.style.boxShadow = "none";
}
element_0.addEventListener('mouseover', function(e){
	remise_zero();
	element_0.style.boxShadow = "0px 0px 9px 0px rgba(42,142,189,0.39)";
					/*boxShadow =  0px 0px 16px 0px rgba(42,142,189,0.39);*/
	if (window.innerWidth >= 991 ) {
		document.getElementsByClassName("img thumbnail show")[0].className = "img thumbnail hidden";
		document.getElementById('10').className = "img thumbnail show";
	}
	else {
		element_0.style.backgroundImage = "url('http://charles-tognol.fr/site_styleTvous/image/atelier/list_group/background_list/vos_couleur.png')";
		element_0.style.color = "blue";
		element_0.style.textAlign = "center";
		element_0.style.fontSize = "1.5em";
		/*-webkit-boxShadow: 0px 0px 9px 0px rgba(42,142,189,0.39);
			-moz-box-shadow: 0px 0px 9px 0px rgba(42,142,189,0.39);*/
	};
});
element_1.addEventListener('mouseover', function(e){
	remise_zero();	
	element_1.style.boxShadow = "0px 0px 9px 0px rgba(42,142,189,0.39)";
	if (window.innerWidth >= 991 ) {
		document.getElementsByClassName("img thumbnail show")[0].className = "img thumbnail hidden";
		document.getElementById('11').className = "img thumbnail show";
	}
else {
		element_1.style.backgroundImage = "url('http://charles-tognol.fr/site_styleTvous/image/atelier/list_group/background_list/methode_4_saisons.png')";
		element_1.style.color = "blue";
		element_1.style.textAlign = "center";
		element_1.style.fontSize = "1.5em";
	};
});
element_2.addEventListener('mouseover', function(e){
	remise_zero();	
	element_2.style.boxShadow = "0px 0px 9px 0px rgba(42,142,189,0.39)";
	if (window.innerWidth >= 991 ) {
		document.getElementsByClassName("img thumbnail show")[0].className = "img thumbnail hidden";
		document.getElementById('12').className = "img thumbnail show";
	}
else {
		element_2.style.backgroundImage = "url('http://charles-tognol.fr/site_styleTvous/image/atelier/list_group/background_list/morphologie_visage.png')";
		element_2.style.color = "blue";
		element_2.style.textAlign = "center";
		element_2.style.fontSize = "1.5em";
	};
});
element_3.addEventListener('mouseover', function(e){
	remise_zero();	
	element_3.style.boxShadow = "0px 0px 9px 0px rgba(42,142,189,0.39)";
	if (window.innerWidth >= 991 ) {
		document.getElementsByClassName("img thumbnail show")[0].className = "img thumbnail hidden";
		document.getElementById('13').className = "img thumbnail show";
	}
else {
		element_3.style.backgroundImage = "url('http://charles-tognol.fr/site_styleTvous/image/atelier/list_group/background_list/tri_trousse.png')";
		element_3.style.color = "blue";
		element_3.style.textAlign = "center";
		element_3.style.fontSize = "1.5em";
	};
});
element_4.addEventListener('mouseover', function(e){	
	remise_zero();
	element_4.style.boxShadow = "0px 0px 9px 0px rgba(42,142,189,0.39)";
	if (window.innerWidth >= 991 ) {
		document.getElementsByClassName("img thumbnail show")[0].className = "img thumbnail hidden";
		document.getElementById('14').className = "img thumbnail show";
	}
else {
		element_4.style.backgroundImage = "url('http://charles-tognol.fr/site_styleTvous/image/atelier/list_group/background_list/maquillage.png')";
		element_4.style.color = "blue";
		element_4.style.textAlign = "center";
		element_4.style.fontSize = "1.5em";
	};
});
element_5.addEventListener('mouseover', function(e){
	remise_zero();	
	element_5.style.boxShadow = "0px 0px 9px 0px rgba(42,142,189,0.39)";
	if (window.innerWidth >= 991 ) {
		document.getElementsByClassName("img thumbnail show")[0].className = "img thumbnail hidden";
		document.getElementById('15').className = "img thumbnail show";
	}
else {
		element_5.style.backgroundImage = "url('http://charles-tognol.fr/site_styleTvous/image/atelier/list_group/background_list/morphologie.png')";
		element_5.style.color = "blue";
		element_5.style.textAlign = "center";
		element_5.style.fontSize = "1.5em";
	};
});
element_6.addEventListener('mouseover', function(e){
	remise_zero();	
	element_6.style.boxShadow = "0px 0px 9px 0px rgba(42,142,189,0.39)";
	if (window.innerWidth >= 991 ) {
		document.getElementsByClassName("img thumbnail show")[0].className = "img thumbnail hidden";
		document.getElementById('16').className = "img thumbnail show";
	}
	else {
		element_6.style.backgroundImage = "url('http://charles-tognol.fr/site_styleTvous/image/atelier/list_group/background_list/style_vestimentaire.png')";
		element_6.style.color = "blue";
		element_6.style.textAlign = "center";
		element_6.style.fontSize = "1.5em";
	};
});
element_7.addEventListener('mouseover', function(e){
	remise_zero();	
	element_7.style.boxShadow = "0px 0px 9px 0px rgba(42,142,189,0.39)";
	if (window.innerWidth >= 991 ) {
		document.getElementsByClassName("img thumbnail show")[0].className = "img thumbnail hidden";
		document.getElementById('17').className = "img thumbnail show";
	}
	else {
		element_7.style.backgroundImage = "url('http://charles-tognol.fr/site_styleTvous/image/atelier/list_group/background_list/style_matiere.png')";
		element_7.style.color = "blue";
		element_7.style.textAlign = "center";
		element_7.style.fontSize = "1.5em";
	};
});