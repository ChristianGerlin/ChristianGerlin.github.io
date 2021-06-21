var instagramVisible = "0";
var facebookVisible = "0";
var twitterVisible = "0";
var emailVisible = "0";
var youtubeVisible = "0";
var spotifyVisible = "0";
var vortragVisible = "0";

function instagram(){
    if (instagramVisible == "0") {
        document.getElementById("instagram").style["display"] = "inherit";
        document.getElementById("instagramArrow").style["transform"] = "rotate(-180deg)";
        instagramVisible = "1";
    } else {
        document.getElementById("instagram").style["display"] = "none";
        document.getElementById("instagramArrow").style["transform"] = "rotate(0deg)";
        instagramVisible = "0";
    }
}

function facebook(){
    if (facebookVisible == "0") {
        document.getElementById("facebook").style["display"] = "inherit";
        document.getElementById("facebookArrow").style["transform"] = "rotate(-180deg)";
        facebookVisible = "1";
    } else {
        document.getElementById("facebook").style["display"] = "none";
        document.getElementById("facebookArrow").style["transform"] = "rotate(0deg)";
        facebookVisible = "0";
    }
}

function twitter(){
    if (twitterVisible == "0") {
        document.getElementById("twitter").style["display"] = "inherit";
        document.getElementById("twitterArrow").style["transform"] = "rotate(-180deg)";
        twitterVisible = "1";
    } else {
        document.getElementById("twitter").style["display"] = "none";
        document.getElementById("twitterArrow").style["transform"] = "rotate(0deg)";
        twitterVisible = "0";
    }
}

function email(){
    if (emailVisible == "0") {
        document.getElementById("email").style["display"] = "inherit";
        document.getElementById("emailArrow").style["transform"] = "rotate(-180deg)";
        emailVisible = "1";
    } else {
        document.getElementById("email").style["display"] = "none";
        document.getElementById("emailArrow").style["transform"] = "rotate(0deg)";
        emailVisible = "0";
    }
}

function youtube(){
    if (youtubeVisible == "0") {
        document.getElementById("youtube").style["display"] = "inherit";
        document.getElementById("youtubeArrow").style["transform"] = "rotate(-180deg)";
        youtubeVisible = "1";
    } else {
        document.getElementById("youtube").style["display"] = "none";
        document.getElementById("youtubeArrow").style["transform"] = "rotate(0deg)";
        youtubeVisible = "0";
    }
}

function spotify(){
    if (spotifyVisible == "0") {
        document.getElementById("spotify").style["display"] = "inherit";
        document.getElementById("spotifyArrow").style["transform"] = "rotate(-180deg)";
        spotifyVisible = "1";
    } else {
        document.getElementById("spotify").style["display"] = "none";
        document.getElementById("spotifyArrow").style["transform"] = "rotate(0deg)";
        spotifyVisible = "0";
    }
}

function vortrag(){
    if (vortragVisible == "0") {
        document.getElementById("vortrag").style["display"] = "inherit";
        document.getElementById("vortragArrow").style["transform"] = "rotate(-180deg)";
        vortragVisible = "1";
    } else {
        document.getElementById("vortrag").style["display"] = "none";
        document.getElementById("vortragArrow").style["transform"] = "rotate(0deg)";
        vortragVisible = "0";
    }
}
