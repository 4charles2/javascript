setInterval(function () {
	var sloganElt =  document.getElementById("slogan");
	if(sloganElt.textContent == "Avoir la Clé de Soi est question d'Harmonie...")
	{
		sloganElt.textContent = "Stylez-vous !!!";
	}else{
		sloganElt.textContent = "Avoir la Clé de Soi est question d'Harmonie...";
	}
}, 2000);

/*Suivant la taille de la fenetre va placer différentes image et réglage sur le CAROUSSEL */
function image_dim()
{
	var width = document.body.clientWidth; 	
	var bk_carousel = document.getElementById('bk-carousel');
	var carousel_3 = document.getElementById('carousel_3');
	
	if (width < 561 && width > 429) /*= 578px(CSS)*/
	{
		bk_carousel.src = "site_styleTvous/image/1page/3_pince_a_linge.png";
	}
	else if (width < 430 && width > 388) /*= 443px(CSS)*/
	{
		bk_carousel.src = "site_styleTvous/image/1page/XS_2_pince_a_linge.png";
	}
	else if (width < 389 && width > 350) /*= 415px (css)*/
	{
		bk_carousel.src = "site_styleTvous/image/1page/XXS_2_pince_a_linge.png";
	}
	else if (width < 350 && width > 320) /*375px (css google)*/
	{
		bk_carousel.src = "site_styleTvous/image/1page/XXXS_2_pince_a_linge.png";
	}
	else if (width < 320)
	{
		bk_carousel.src = "site_styleTvous/image/1page/XXXXS_2_pince_a_linge.png";
	}
	else
	{
		bk_carousel.src = "site_styleTvous/image/1page/pince_a_linge.png";
	}
}