var topNav = document.querySelector(".mobile-view-menu");
var topNavList = document.querySelector(".top-nav-menu");

var btmNav = document.querySelector(".mobile-view-menu-2");
var btmNavList = document.querySelector(".top-nav-menu2");


 
topNav.addEventListener("click",()=> {
   topNavList.classList.toggle("topNavList")
})

btmNav.addEventListener("click",()=> {
   btmNavList.classList.toggle("btmNavList")
})