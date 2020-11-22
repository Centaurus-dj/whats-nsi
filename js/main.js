//    Functions

function MyFunction (){
    console.log("Test is initalised");
};

function OpenSideNavBar(){
    //document.getElementById("nav-sidebar").classList.toggle("hide");
    if (window.sidebar_open){
        document.getElementById("close-sidebar").classList.toggle("hide");
        document.getElementById("open-sidebar").classList.toggle("hide");
        document.getElementById("nav-sidebar").style.marginLeft = "-300px";
        window.sidebar_open = false;
        console.log("Navbar closed");
    }
    else {
        document.getElementById("close-sidebar").classList.toggle("hide");
        document.getElementById("open-sidebar").classList.toggle("hide");
        document.getElementById("nav-sidebar").style.marginLeft = 0;
        window.sidebar_open = true;
        console.log("Navbar opened");
    }

};

//      Variables

var theme = "dark";
var lang = "fr";
var sidebar_open = false;
