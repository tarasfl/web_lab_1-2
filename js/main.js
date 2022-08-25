function hamburger_menu(){
    var menu = document.getElementById("burger_menu");
    var li_element = document.querySelector("#burger_menu > ul > li:nth-child(5)")
    li_element.className = "nav_item"
    if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
}

