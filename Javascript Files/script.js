var topnav , logo , menuIcon , navOption , filterButtons , filterAll , webFilter , appsFilter , iconsFilter , filterItemsClass , filterItems;
// preloader start
function preloaderStart() {
    var loader = document.getElementById("preloader");
    loader.style.display = "none";
}
// prelaoder end
// top nav : start

topnav = document.getElementById('top-nav');
logo = document.getElementById('logo');
menuIcon = document.getElementById("menu-icon");
navOption = document.getElementById("nav-option");
function topnavScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        topnav.style.padding = "3rem 1rem";
        logo.style.fontSize = "2.5rem";
   }else {
    topnav.style.padding = "8rem 1rem";
    logo.style.fontSize = "3.5rem";
   }
}
//add event lisener to the window
window.addEventListener("scroll" , ()=>{
    topnavScroll();
});
// for menu on small screen

menuIcon.addEventListener("click" , ()=>{
  if (navOption.style.display.match("block")) { 
     navOption.style.display = "none";
     document.getElementById("menu-bars").classList.remove('change');
    } else {
        navOption.style.display = "block";
        document.getElementById("menu-bars").classList.add('change');
    }
});
// top nav : end

//  js for filtering : start

filterButtons = document.getElementsByClassName("filter-button");

filterAll = document.getElementById("all-filter");
webFilter = document.getElementById("web-filter");
appsFilter = document.getElementById("apps-filter");
iconsFilter = document.getElementById("icons-filter");

filterItemsClass = document.getElementsByClassName("items");
filterItems = document.getElementsByClassName("filter");

for (let x = 0; x < filterItemsClass.length; x++) {
    const element = filterItemsClass[x];
    element.classList.add("filter");
}

function itemsFilter(c) {
    var a = c.attributes.rafi.value
    var b = document.getElementsByClassName(a);
    if (a == "all") {
        for (let i = 0; i < filterItems.length; i++) {
            const element = filterItems[i];
            element.style.display = "block";
        }
    } else {
        for (let i = 0; i < filterItems.length; i++) {
            const element = filterItems[i];
            element.style.display = "none";
        }
        for (let i = 0; i < b.length; i++) {
            const element = b[i];
            element.style.display = "block";
            element.style.float = "left";
        }   
    }
    for (let i = 0; i < filterButtons.length; i++) {
        const element = filterButtons[i];
        element.style.backgroundColor = "#EBC985";
    }
    c.style.backgroundColor = "#FFFFFF";
}

function excuteFilter(a) {
    a.addEventListener("click" , ()=>{
        itemsFilter(a);
    });
}
excuteFilter(filterAll);
excuteFilter(webFilter);
excuteFilter(appsFilter);
excuteFilter(iconsFilter);
//  js for filtering : end