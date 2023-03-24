function loadPage() {
    // Header
    const header = document.createElement("header");
    const logo = document.createElement("img");
    logo.src = "/eatgreat.png";
    header.appendChild(logo);
    document.body.appendChild(header);
    
    // testimonial
    const testimonial = document.createElement("div");
    testimonial.setAttribute("id","testimonial");
    const testText1 = document.createElement("h1");
    testText1.innerText = " “Man it was amazing ! Everything was perfect , I truly appreciate it ! We didn't even have a chance to get a pic to post we dug in right away 🤣 but it was more than enough for all of us ! That dessert was delicious!” "
    testimonial.appendChild(testText1);
    document.body.appendChild(testimonial);

    // main section
    const mainSec = document.createElement("div")
    mainSec.setAttribute("class", "mainSec")
    const testPic = document.createElement("img");
    testPic.src = "/pizzarolls.png";
    testPic.height = 500;
    mainSec.appendChild(testPic);
    const imgCap1 = document.createElement("div");
    mainSec.appendChild(imgCap1);
    imgCap1.setAttribute("class", "imgcap");
    const cap1 = document.createElement("h2");
    cap1.innerText = "Personal/Private Chef";
    imgCap1.appendChild(cap1);
    document.body.appendChild(mainSec);

    const mainSec2 = document.createElement("div");
    mainSec2.setAttribute("class", "mainSec");
    mainSec2.innerHTML = `<div class="imgcap">
                            <h2>Catering, Parties, Weddings & More!</h2>
                          </div>
                                <img src="/catering.png" alt="catering trays" height="500px">
                            </div>`
    document.body.appendChild(mainSec2);


};



export default loadPage;
