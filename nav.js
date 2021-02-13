if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i))) {
    $("#nav-placeholder").load("/m.nav.html");
var current = location.pathname.split("/")[1];
} else {
    $("#nav-placeholder").load("/nav.html");
    var current = location.pathname.split("/")[1];
}

if(current == "m.kontakt.html"){
    current = "kontakt.html";
}

if(current == "m.twitter.timeline1.html" || current == "m.twitter.timeline2.html" || current == "m.twitter.timeline3.html"){
    current = "twitter.html";
}

function isActive(){
    console.log(current);
    document.getElementById(current).classList.add('active');
}
