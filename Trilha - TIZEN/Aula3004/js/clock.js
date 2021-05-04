//add eventListener for tizenhwkey
window.addEventListener('tizenhwkey', function(e) {
    if(e.keyName == "back")
        tizen.application.getCurrentApplication().exit();
});

setInterval(function () {
    document.getElementById('clock').value = new Date();
}, 1000);
