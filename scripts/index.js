function isMobile() {
    var mobile = false;
    if (/Android|iPhone|iPad/.test(navigator.userAgent)) {
        mobile = true;
    }
    return mobile;
}

function mobileRedirect() {
    if (isMobile()) {
        if (window.location.pathname === "/") { 
            window.location.replace("../mobile/"); 
        } else {
            window.location.replace("../mobile/") + window.location.pathname;
        }
    }
}
