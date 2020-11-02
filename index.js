function $_GET(key) {
    let p = window.location.search;
    p = p.match(new RegExp(key + "=([^&=]+)"));
    return p ? Boolean(p[1]) : false;
}

function color() {
    let head  = document.getElementsByTagName("head")[0];
    let link  = document.createElement("link");
    link.id   = "css";
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.media = "all";
    if($_GET("white")) {
        link.href = "./white.css";
    } else {
        link.href = "./black.css";        
    }
    head.appendChild(link);
}