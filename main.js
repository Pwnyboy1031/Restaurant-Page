(()=>{"use strict";const e=function(){const e=document.getElementById("mainContent");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id","testimonial");const n=document.createElement("h1");n.innerText=" “ Man it was amazing ! Everything was perfect , I truly appreciate it ! We didn't even have a chance to get a pic to post we dug in right away 🤣 but it was more than enough for all of us ! That dessert was delicious! ” ",n.setAttribute("id","customerTest"),t.appendChild(n),e.appendChild(t);const c=document.createElement("div");c.setAttribute("class","mainSec");const i=document.createElement("img");i.src="/catered.png",i.height=500,i.setAttribute("id","personalChef"),c.appendChild(i);const a=document.createElement("div");c.appendChild(a),a.setAttribute("class","imgcap");const d=document.createElement("h2");d.innerText="Personal/Private Chef",a.appendChild(d),e.appendChild(c);const s=document.createElement("div");s.setAttribute("class","mainSec"),s.innerHTML='<div class="imgcap">\n                            <h2>Catering, Parties, Weddings & More!</h2>\n                          </div>\n                                <img src="/catering.png" alt="catering trays" height="500px">\n                            </div>',e.appendChild(s)};document.addEventListener("DOMContentLoaded",(t=>{e();const n=document.getElementById("home"),c=document.getElementById("menu"),i=document.getElementById("contact");document.addEventListener("click",(t=>{console.log(t.target),t.target==n?e():t.target==i?function(){const e=document.getElementById("mainContent");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id","contactSec");const n=document.createElement("h1");n.setAttribute("id","contactHeader"),n.innerText="Order Now!",e.append(t),t.append(n);const c=document.createElement("a");c.setAttribute("href","https://www.instagram.com/chefdomllc/?hl=en");const i=document.createElement("img");i.setAttribute("src","/instagram.svg"),i.setAttribute("height","200px"),t.append(i),c.appendChild(i),t.appendChild(c);const a=document.createElement("h1");a.innerText="Closed Mon | Sat",t.append(a);const d=document.createElement("h1");d.innerText="Business Inquiries: ChefDomLLC21@gmail.com",t.append(d)}():t.target==c&&function(){const e=document.getElementById("mainContent");e.innerHTML='<script async src="//www.instagram.com/embed.js"><\/script>';const t=document.createElement("div");t.setAttribute("id","menuWrap");const n=document.createElement("div");n.setAttribute("class","menu"),e.append(t),t.appendChild(n);const c=document.createElement("img");c.setAttribute("src","/pizzarolls.png"),n.appendChild(c)}()}))}))})();