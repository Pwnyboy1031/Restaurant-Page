function loadPage() {
    //reset
    //content wrapper
    const mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = ``;
    
    // testimonial
    const testimonial = document.createElement("div");
    testimonial.setAttribute("id","testimonial");
    const testText1 = document.createElement("h1");
    testText1.innerText = " “ Man it was amazing ! Everything was perfect , I truly appreciate it ! We didn't even have a chance to get a pic to post we dug in right away 🤣 but it was more than enough for all of us ! That dessert was delicious! ” "
    testText1.setAttribute("id", "customerTest");
    testimonial.appendChild(testText1);
    mainContent.appendChild(testimonial);

    // main section
    const mainSec = document.createElement("div")
    mainSec.setAttribute("class", "mainSec")
    const testPic = document.createElement("img");
    testPic.src = "/catered.png";
    testPic.height = 500;
    testPic.setAttribute("id", "personalChef");
    mainSec.appendChild(testPic);
    const imgCap1 = document.createElement("div");
    mainSec.appendChild(imgCap1);
    imgCap1.setAttribute("class", "imgcap");
    const cap1 = document.createElement("h2");
    cap1.innerText = "Personal/Private Chef";
    imgCap1.appendChild(cap1);
    mainContent.appendChild(mainSec);

    const mainSec2 = document.createElement("div");
    mainSec2.setAttribute("class", "mainSec");
    mainSec2.innerHTML = `<div class="imgcap">
                            <h2>Catering, Parties, Weddings & More!</h2>
                          </div>
                                <img src="/catering.png" alt="catering trays" height="500px">
                            </div>`
    mainContent.appendChild(mainSec2);


};



export default loadPage;
