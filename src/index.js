import loadContact from "../dist/contact";
import loadPage from "../dist/pageload";
import loadMenu from "../dist/menu";

document.addEventListener("DOMContentLoaded", (e) => {
    // initialize
    loadPage();

    // find buttons
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");

  

    document.addEventListener("click", (e) => {
        console.log(e.target);
        if (e.target == homeBtn) {
            loadPage();
        } else if (e.target == contactBtn) {
            loadContact();
        } else if (e.target == menuBtn) {
            loadMenu();
        }
    });
});