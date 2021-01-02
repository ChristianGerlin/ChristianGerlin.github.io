if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i))) {
    document.write('<link href="/mobile.css"  rel="stylesheet">');
} else {
    document.write('<link href="/index.css"  rel="stylesheet">');
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
