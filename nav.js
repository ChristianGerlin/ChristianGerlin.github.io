function implement(){
    $(function(){
        $("#nav-placeholder").load("/nav.html");
    });
}

function isActive(){
    var current = location.pathname.split("/")[1];
    document.getElementById(current).classList.add('active');
}
