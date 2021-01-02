function isActive(){
    var current = location.pathname.split("/")[1];
    window.frames["nav"].document.getElementById(current).classList.add('active');
}

window.onload = function() {
  isActive();
};

