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

    const menuItem2 = document.createElement("div");
    menuItem2.setAttribute("class", "menu");
    mainContent.append(menuWrap);
    menuWrap.appendChild(menuItem2);

    const menuItem3 = document.createElement("div");
    menuItem3.setAttribute("class", "menu");
    mainContent.append(menuWrap);
    menuWrap.appendChild(menuItem3);

    //menu item 1
    const menuImage1 = document.createElement("img");
    menuImage1.setAttribute("src", "assets/pizzarolls.png");
    menuItem1.appendChild(menuImage1);
    const menuCaption1 = document.createElement("div");
    menuCaption1.setAttribute("class", "menuCaption");
    menuItem1.appendChild(menuCaption1);
    menuCaption1.innerText = "Pizza Rolls"

    //menu item 2
    const menuImage2 = document.createElement("img");
    menuImage2.setAttribute("src", "assets/chkwaffles.png");
    menuItem2.appendChild(menuImage2);
    const menuCaption2 = document.createElement("div");
    menuCaption2.setAttribute("class", "menuCaption");
    menuItem2.appendChild(menuCaption2);
    menuCaption2.innerText = "Chicken and Waffles"

    //menu item 3
    const menuImage3 = document.createElement("img");
    menuImage3.setAttribute("src", "assets/cheesecake.png");
    menuItem3.appendChild(menuImage3);
    const menuCaption3 = document.createElement("div");
    menuCaption3.setAttribute("class", "menuCaption");
    menuItem3.appendChild(menuCaption3);
    menuCaption3.innerText = "Cheesecake"





}

export default loadMenu;