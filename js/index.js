const siteContent = {
  "nav": {
    "nav-item-0": "Register",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "History",
    "page-src-0": "#",
    "page-src-1": "services.html",
    "page-src-2": "product.html",
    "page-src-3": "vision.html",
    "page-src-4": "features.html",
    "page-src-5": "about.html",
    "page-src-6": "contact.html",
    "page-src-7": "history.html",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAV
const nav = document.querySelector('nav');


//CREATES NEW NAV ITEM
const historyLink = document.createElement('a');
const registerLink = document.createElement('a');
nav.appendChild(historyLink);
nav.prepend(registerLink);
const navLinks = nav.getElementsByTagName('a');

for(let i = 0; i < navLinks.length; i++)
{
  navLinks[i].textContent = siteContent['nav'][`nav-item-${i}`];
  navLinks[i].setAttribute('href', siteContent['nav'][`page-src-${i}`]);
  navLinks[i].style.color = 'green';
}






//CTA
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];
const btn = document.querySelector('button');
btn.textContent = siteContent["cta"]["button"];


//MAIN CONTENT TOP CONTENT

const topContentH4 = document.querySelectorAll(".top-content h4");
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];
const topTextContent = document.querySelectorAll(".top-content p");
topTextContent[0].textContent = siteContent['main-content']['features-content'];
topTextContent[1].textContent = siteContent['main-content']['about-content'];

//MIDDLE IMAGE
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//MAIN CONTENT BOTTOM CONTENT

const bottomContentH4 = document.querySelectorAll(".bottom-content h4");
bottomContentH4[0].textContent = siteContent['main-content']["services-h4"];
bottomContentH4[1].textContent = siteContent['main-content']["product-h4"];
bottomContentH4[2].textContent = siteContent['main-content']["vision-h4"];
const bottomTextContent = document.querySelectorAll(".bottom-content p");
bottomTextContent[0].textContent = siteContent['main-content']['services-content'];
bottomTextContent[1].textContent = siteContent['main-content']['product-content'];
bottomTextContent[2].textContent = siteContent['main-content']['vision-content'];

//CONTACT

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
const contactItems = document.querySelectorAll(".contact p");
contactItems[0].textContent = siteContent["contact"]['address'];
contactItems[1].textContent = siteContent["contact"]['phone'];
contactItems[2].textContent = siteContent["contact"]['email'];

//FOOTER

const footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];