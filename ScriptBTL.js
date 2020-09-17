window.onscroll = function() {
    console.info(document.documentElement.scrollTop);
    var menubar = document.getElementById("myMenu");
    if(document.documentElement.scrollTop > 110 || document.body.scrollTop > 110) {
        menubar.style.position = 'fixed';
        menubar.style.top = '0';
        menubar.style.zIndex = '9';
        menubar.style.width = '80%';
        menubar.style.transition = 2;
        menubar.style.left = '10%';
        menubar.style.right = '10%';
        menubar.style.transition = 'width 2s';
    }
    else {
        menubar.style.left = '0';
        menubar.style.right = '0';
        menubar.style.width = '100%'
        menubar.style.position = 'relative';
    }
}

var gotoTOP = 500;
$(window).scroll(function() {
    if ($(this).scrollTop() >= gotoTOP) {
        $("#myBtn").fadeIn('slow');
    }
    else {
        $("#myBtn").fadeOut('slow');
    }
});

function goToTop() {
    var timer = setInterval(function() {
        document.documentElement.scrollTop -= 20;

        if (document.documentElement.scrollTop <= 0)
            clearInterval(timer);
    }, 1);
}