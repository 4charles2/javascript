$(function() {
	var ongletContact = document.getElementById("ongletContact");
	var formContactElt = document.getElementById("form_contact");
	var bkgdContact = document.getElementById("bk_contact");
	var linkContact = document.getElementById("link_contact");
	var formElt = document.getElementById("contact");

	document.addEventListener("click", closeOngletContact);
	ongletContact.addEventListener("click", openOngletContact);

	function closeOngletContact() {
		$('#contenuOngletContact').hide();
		console.log("Le contenu doit être caché");
		if (document.documentElement.clientWidth > 1900 && document.documentElement.clientWidth > 575) {
			ongletContact.style.width = "3%";
		} else if (document.documentElement.clientWidth > 575) {
			ongletContact.style.width = "5%";
		} else {
			ongletContact.style.width = "10%";
		}
	}

	function openOngletContact(e) {
		console.log("TAILLE document.documentElement.clientWidth : " + document.documentElement.clientWidth);
		$('#contenuOngletContact').show();
		if (document.documentElement.clientWidth < 744) {
			bkgdContact.innerHTML = "";
			linkContact.innerHTML = "";
			bkgdContact.style.backgroundImage = "url(/site_styleTvous/image/contact/1_page_livre_contact.png)";
			ongletContact.style.width = "407px";
			formElt.style.left = "25px";
			formElt.style.width = "78%";
		} else {
			ongletContact.style.width = "815px";
		}
		e.stopPropagation();
	}
});