function loadPage() {
    const header = document.createElement("div");
    header.setAttribute("id","header");
    const logo = document.createElement("img");
    logo.src = "/eatgreat.png";
    header.appendChild(logo);
    document.body.append(header);
};



export default loadPage;
