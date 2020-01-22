const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
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
logo.setAttribute('src', siteContent["nav"]["img-src"]);



// NavBar
let navBarLinks = document.querySelectorAll('a')
navBarLinks[0].textContent = siteContent['nav']['nav-item-1']
navBarLinks[1].textContent = siteContent['nav']['nav-item-2']
navBarLinks[2].textContent = siteContent['nav']['nav-item-3']
navBarLinks[3].textContent = siteContent['nav']['nav-item-4']
navBarLinks[4].textContent = siteContent['nav']['nav-item-5']
navBarLinks[5].textContent = siteContent['nav']['nav-item-6']

// Prepend and Append new links
const parentNav = document.querySelector('nav')
const newLink = document.createElement('a');
const newLink2 = document.createElement('a');

newLink.innerHTML = 'Home';
newLink2.innerHTML = 'End';

parentNav.prepend(newLink);
parentNav.appendChild(newLink2)

// Change color of all links to green
const navColor = document.querySelectorAll('a')
navColor.forEach(element => {
  element.style.color = 'green';
})




// Call to action
const mainH1 = document.querySelector('h1');
mainH1.textContent = (siteContent['cta']['h1']);
mainH1.style = 'line-height: 1.25;word-spacing: 70px;width: min-content;'

const btn = document.querySelector("button");
btn.textContent = (siteContent["cta"]['button']);

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);



// Page content headers
let pageH4 = document.querySelectorAll('h4');
pageH4[0].textContent = siteContent['main-content']['features-h4']
pageH4[1].textContent = siteContent['main-content']['about-h4']
pageH4[2].textContent = siteContent['main-content']['services-h4']
pageH4[3].textContent = siteContent['main-content']['product-h4']
pageH4[4].textContent = siteContent['main-content']['vision-h4']
pageH4[5].textContent = siteContent['contact']['contact-h4']



// Page content
let pageContent = document.querySelectorAll('p')
pageContent[0].textContent = siteContent['main-content']['features-content']
pageContent[1].textContent = siteContent['main-content']['about-content']
pageContent[2].textContent = siteContent['main-content']['services-content']
pageContent[3].textContent = siteContent['main-content']['product-content']
pageContent[4].textContent = siteContent['main-content']['vision-content']
pageContent[5].textContent = siteContent['contact']['address']
pageContent[5].style = 'width: 200px;line-height: 1.35;'
pageContent[6].textContent = siteContent['contact']['phone']
pageContent[7].textContent = siteContent['contact']['email']
pageContent[8].textContent = siteContent['footer']['copyright']



// Middle image
let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);
