
function isMobile() {
    var mobile = false;
    if (/Android|iPhone|iPad/.test(navigator.userAgent)) {
        mobile = true;
    }
    return mobile;
}

function mobileRedirect() {
    if (isMobile()) {
        var view = confirm("This website is not meant to be viewed on mobile. \nContinue?")
        if (!view) {
            window.location.replace("mobile.html")
        }
    }
}

