function loadContact() {
    // reset page
    const mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = ``;

    // main section
    const contactSec = document.createElement("div");
    contactSec.setAttribute('id', 'contactSec')

    //header
    const contactUs = document.createElement("h1");
    contactUs.setAttribute("id", "contactHeader");
    contactUs.innerText = "Order Now!"
    mainContent.append(contactSec);
    contactSec.append(contactUs);
    //instagram link
    const instaLink = document.createElement("a");
    instaLink.setAttribute("href", "https://www.instagram.com/chefdomllc/?hl=en");
    const instaLogo = document.createElement("img");
    instaLogo.setAttribute("src", "/instagram.svg");
    instaLogo.setAttribute("height", "200px");
    contactSec.append(instaLogo);
    instaLink.appendChild(instaLogo);
    contactSec.appendChild(instaLink);
    // closed days
    const openDays = document.createElement("h1");
    openDays.innerText = "Closed Mon | Sat";
    contactSec.append(openDays);
    //business inquiries
    const emailHeader = document.createElement("h1");
    emailHeader.innerText = "Business Inquiries: ChefDomLLC21@gmail.com";
    contactSec.append(emailHeader);

    



};

export default loadContact;