function loadMenu() {
    const mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = `<script async src="//www.instagram.com/embed.js"></script>`;

    // menu wrapper
    const menuWrap = document.createElement("div");
    menuWrap.setAttribute("id", "menuWrap");

    // menu cards
    const menuItem1 = document.createElement("div");
    menuItem1.setAttribute("class", "menu");
    mainContent.append(menuWrap);
    menuWrap.appendChild(menuItem1);

    //menu item 1
    const menuImage1 = document.createElement("img");
    menuImage1.setAttribute("src", "/pizzarolls.png");
    menuItem1.appendChild(menuImage1);
    const menuCaption1 = document.createElement("div");
    menuCaption1.setAttribute("class", "menuCaption");




}

export default loadMenu;