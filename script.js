
var menuBar = document.querySelector('.menu-bar');
var mainBody = document.querySelector('.mainbody');


function setMainBodyWidth() {
    var menuBarWidth = menuBar.offsetWidth;
    mainBody.style.width = 'calc(100% - ' + menuBarWidth + 'px)';
    mainBody.style.left = menuBarWidth + 'px';
}

function handleResize() {
    if (window.innerWidth < 900) {
        menuBar.style.display = 'none';
        mainBody.style.left = '0';
        mainBody.style.width = '100%';
    } else {
        menuBar.style.display = 'block';
        setMainBodyWidth();
    }

}


window.onload = function () {
    setMainBodyWidth();
    handleResize();
};

window.addEventListener('resize', function() {
    handleResize();
});

function toggleMenuBar() {
    if (menuBar.style.display === 'none') {
        menuBar.style.transition = 'left 0.3s ease';
        menuBar.style.left = '0';
        menuBar.style.display = 'block';

        mainBody.style.transition = 'left 0.3s ease';
        mainBody.style.left = menuBar.offsetWidth + 'px';
        setMainBodyWidth();
    } else {
        menuBar.style.transition = 'left 0.3s ease';
        menuBar.style.left = '280px';
        menuBar.style.display = 'none';

        mainBody.style.transition = 'left 0.3s ease';
        mainBody.style.left = '0';
        mainBody.style.width='100%';
    }
}

var menuIcon = document.getElementById('menuIcon');
var menutext = document.getElementById('menutext');

menuIcon.addEventListener('mouseenter', function() {
    menutext.style.display='block';
});

menuIcon.addEventListener('mouseleave', function() {
    menutext.style.display='none';
});

var helpicon = document.getElementById('helpicon');
var helptext = document.getElementById('helptext');

helpicon.addEventListener('mouseenter', function() {
    helptext.style.display='block';
});

helpicon.addEventListener('mouseleave', function() {
    helptext.style.display='none';
});

var googleicon = document.getElementById('googleicon');
var googletext = document.getElementById('googletext');

googleicon.addEventListener('mouseenter', function() {
    googletext.style.display='block';
});

googleicon.addEventListener('mouseleave', function() {
    googletext.style.display='none';
});

var accounticon = document.getElementById('accounticon');
var accounttext = document.getElementById('accounttext');

accounticon.addEventListener('mouseenter', function() {
    accounttext.style.display='block';
});

accounticon.addEventListener('mouseleave', function() {
    accounttext.style.display='none';
});


var load=document.getElementById('load');

function loadcontent(){
    load.style.display='block';
}