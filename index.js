if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i))) {
    document.write('<link href="/mobile.css"  rel="stylesheet">');

    if(window.location.pathname == "/kontakt.html"){
        window.location.href = "/m.kontakt.html";
    }
} else {
    document.write('<link href="/index.css"  rel="stylesheet">');

    if(window.location.pathname == "/m.kontakt.html"){
        window.location.href = "/kontakt.html";
    }
}

function panel(){
    window.location.href = "/panel/index.html";
}

function blogschreiben(){
    window.location.href = "/panel/blog.html";
}

function indexNoImgMobileSmall() {
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i))) {
        if((window.screen.availWidth)/(window.screen.availHeight) > 0.5){
            document.getElementById('indeximg').style.display="none";
        }
    }
}


function isIndex(){
    if(window.location.href == "https://christiangerlin.de/"){
        document.getElementById('index.html').classList.add('active');
    }
}
