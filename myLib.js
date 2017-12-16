
//Affiche un message d'erreur passer en argument après avoir créer une div et l'ajoute 
// à l'element parent passer en argument
"position: absolute; background-color: black; top: 0px; height: 100%"
function msgReponse(elmentParent, message, typeMsg){
    var background;
    typeMsg ? background = ["rgba(0, 255, 0, 0.2)", '#00806A'] : background = ["rgba(255, 0, 0, 0.2)", '#D8000C'];
    var divElt = document.createElement('div');
    divElt.setAttribute("class", "col-12");
    var styleElmts = {
        position: "absolute",
        border: "1px solid #00806A",
        padding: "1.5%",
        top: "49%",
        //left: "0px",
        textAlign: "center",
        //width: "100%", attr col-12 car gerer par bootstrap
        height: "10%",
        backgroundColor: background[0],
        color: background[1],
        fontSize: '25px',
        borderRadius: '5px'
    };
    for(st in styleElmts){
        divElt.style[st] = styleElmts[st];
    }
    divElt.textContent = message;
    elmentParent.appendChild(divElt);
    setTimeout(function(){elmentParent.removeChild(divElt)}, 10000);
}

 function meAjax(url, methode, data, nameData, callback, isJson){

    var xhr = new XMLHttpRequest();
    var form = new FormData();

    xhr.open(methode, url);

    xhr.addEventListener("load", function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log("status de la reuete : " + xhr.status);
            callback(xhr.responseText);
        } else {
            console.error(xhr.status + " " + xhr.statusText + " " + url);
        }
    });

    xhr.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });

    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }

    if(Array.isArray(nameData)){
        var i = 0;
        nameData.forEach( function(element){
            form.append(element, data[i]);
            i++;
        });    
    }else if (methode == "POST") {
        form.append(nameData, data);
    }else{
        form = null;
    }
    //form.append('action', );
    xhr.send(form);
}

function refresh(url, time) {
    var metaElt = document.createElement('meta');
    metaElt.setAttribute('http-equiv', 'refresh');
    metaElt.setAttribute('content', time+'; URL='+url);
    document.head.appendChild(metaElt);
}

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}
// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
// Le paramètre isJson permet d'indiquer si l'envoi concerne des données JSON
function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);
}