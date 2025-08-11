/* Meta Data and Header */
const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");
document.head.appendChild(metaCharset);

const metaViewPort = document.createElement("meta");
metaViewPort.setAttribute("name", "viewport");
metaViewPort.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(metaViewPort);

const favIcon = document.createElement("link");
favIcon.href = "assets/Small Logo.svg";
favIcon.rel = "icon";
document.head.appendChild(favIcon);

const title = document.createElement("title");
title.textContent = "PureJS Wonder Web";
document.head.appendChild(title);

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#d4b000";
document.body.style.boxSizing = "border-box";
document.body.style.overflowX = "hidden";

const header = document.createElement("header");
document.body.appendChild(header);

header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "10px";
header.style.backgroundColor = "rgb(255, 204, 0)";

const topContentTitle = document.createElement("div");
topContentTitle.className = "top-content-title";
topContentTitle.style.display = "flex";
topContentTitle.style.alignItems = "center";
topContentTitle.style.gap = "10px";
header.appendChild(topContentTitle);

const mainLogo = document.createElement("img");
mainLogo.setAttribute("src", "assets/Logo.svg");
mainLogo.width = 125;
mainLogo.alt = "PureJS Logo";
topContentTitle.appendChild(mainLogo);

const topContentTitleTexts = document.createElement("div");
topContentTitleTexts.className = "top-content-title-texts";
topContentTitle.appendChild(topContentTitleTexts);

const topContentTitleText1 = document.createElement("h1");
topContentTitleText1.textContent = "PureJS Wonder Web";
topContentTitleText1.style.margin = "0";
const topContentTitleText2 = document.createElement("h3");
topContentTitleText2.textContent = "A Unique Website, made with only JS";
topContentTitleText2.style.margin = "0";
topContentTitleText2.style.fontSize = "16px";
topContentTitleTexts.appendChild(topContentTitleText1);
topContentTitleTexts.appendChild(topContentTitleText2);

const navbar = document.createElement("nav");
header.appendChild(navbar);
const navbarUl = document.createElement("ul");
navbarUl.style.listStyle = "none";
navbarUl.style.display = "flex";
navbarUl.style.fontSize = "18px";
navbarUl.style.gap = "7px";
navbar.appendChild(navbarUl);
const navbarLi1 = document.createElement("li");
const navbarLi1Link = document.createElement("a");
navbarLi1Link.textContent = "Home";
navbarLi1Link.href = "#home";
navbarLi1.appendChild(navbarLi1Link);
navbarUl.appendChild(navbarLi1);
const navbarLi2 = document.createElement("li");
const navbarLi2Link = document.createElement("a");
navbarLi2Link.textContent = "About";
navbarLi2Link.href = "#about";
navbarLi2.appendChild(navbarLi2Link);
navbarUl.appendChild(navbarLi2);
const navbarLi3 = document.createElement("li");
const navbarLi3Link = document.createElement("a");
navbarLi3Link.textContent = "Products";
navbarLi3Link.href = "#products";
navbarLi3.appendChild(navbarLi3Link);
navbarUl.appendChild(navbarLi3);
const navbarLi4 = document.createElement("li");
const navbarLi4Link = document.createElement("a");
navbarLi4Link.textContent = "Contact";
navbarLi4Link.href = "#contact";
navbarLi4.appendChild(navbarLi4Link);
navbarUl.appendChild(navbarLi4);
navbarUl.querySelectorAll("a").forEach((a) => {
  a.style.textDecoration = "none";
  a.style.color = "black";
  a.style.padding = "7px 13px";
  a.style.borderRadius = "20px";
  a.style.transition = "background-color 0.3s ease";
  a.title = a.textContent;
  a.addEventListener("mouseover", () => {
    a.style.backgroundColor = "red";
  });
  a.addEventListener("mouseout", () => {
    a.style.backgroundColor = "";
  });
});

const productSearch = document.createElement("div");
productSearch.className = "product-search";
header.appendChild(productSearch);
const productSearchInput = document.createElement("input");
productSearchInput.type = "search";
productSearchInput.placeholder = "Search Products";
productSearchInput.style.padding = "5px 10px 5px 10px";
productSearchInput.style.borderRadius = "15px";
productSearch.appendChild(productSearchInput);
const productSearchButton = document.createElement("button");
productSearchButton.textContent = "Search";
productSearchButton.style.padding = "5px 10px 5px 10px";
productSearchButton.style.borderRadius = "15px";
productSearchButton.style.marginLeft = "5px";
productSearchButton.style.backgroundColor = "rgba(60, 174, 226, 1)";
productSearchButton.style.fontWeight = "bold";
productSearchButton.addEventListener("mouseover", (button) => {
  button.target.style.backgroundColor = "rgba(28, 142, 224, 1)";
});
productSearchButton.addEventListener("mouseout", (button) => {
  button.target.style.backgroundColor = "rgba(60, 174, 226, 1)";
});
productSearch.appendChild(productSearchButton);

/* Body */
const main = document.createElement("main");
document.body.appendChild(main);

let headerHeight = header.offsetHeight;

const welcomeSection = document.createElement("div");
welcomeSection.className = "welcome-section";
welcomeSection.style.color = "black";
welcomeSection.style.display = "flex";
welcomeSection.style.alignItems = "center";
welcomeSection.style.justifyContent = "space-between";
// welcomeSection.style.backgroundImage =
//   "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNkxIWzu5E9jTxh2g6GfuN35PXN-PI1w7lw&s)";
welcomeSection.style.backgroundSize = "cover";
welcomeSection.style.padding = "20px";
welcomeSection.style.height = `calc(100vh - ${headerHeight + 61}px)`;
window.addEventListener("resize", () => {
  headerHeight = header.offsetHeight;
  console.log(headerHeight);
  welcomeSection.style.height = `calc(100vh - ${headerHeight + 61}px)`;
});
const welcomeSectionTextPlace = document.createElement("div");
welcomeSectionTextPlace.className = "welcome-section-text";
welcomeSection.appendChild(welcomeSectionTextPlace);
const welcomeText1 = document.createElement("h2");
welcomeText1.textContent = "Welcome to PureJS Wonder Web!";
welcomeText1.style.fontSize = "30px";
welcomeText1.style.margin = "0";
welcomeSectionTextPlace.appendChild(welcomeText1);
const welcomeText2 = document.createElement("h3");
welcomeText2.textContent = "A Unique Website, made with only JS";
welcomeText2.style.fontSize = "22px";
welcomeText2.style.margin = "0";
welcomeText2.style.marginTop = "2px";
welcomeSectionTextPlace.appendChild(welcomeText2);
const welcomeText3 = document.createElement("h3");
welcomeText3.textContent = "Explore the website and see how it works";
welcomeText3.style.fontSize = "18px";
welcomeText3.style.margin = "0";
welcomeText3.style.marginTop = "15px";
welcomeSectionTextPlace.appendChild(welcomeText3);
const welcomeButtonPlace = document.createElement("div");
welcomeButtonPlace.className = "welcome-button-place";
welcomeButtonPlace.style.marginTop = "15px";
welcomeSectionTextPlace.appendChild(welcomeButtonPlace);
const welcomeButton1 = document.createElement("button");
welcomeButton1.style.marginRight = "10px";
welcomeButton1.style.padding = "7px 20px 7px 20px";
welcomeButton1.style.borderRadius = "15px";
welcomeButton1.style.fontSize = "18px";
welcomeButton1.style.backgroundColor = "rgba(60, 174, 226, 1)";
welcomeButton1.style.fontWeight = "bold";
const welcomeButton1Link = document.createElement("a");
welcomeButton1Link.href = "#";
welcomeButton1Link.textContent = "About";
welcomeButton1Link.style.textDecoration = "none";
welcomeButton1Link.style.color = "inherit";
welcomeButton1.appendChild(welcomeButton1Link);
welcomeButtonPlace.appendChild(welcomeButton1);
const welcomeButton2 = document.createElement("button");
welcomeButton2.style.marginRight = "10px";
welcomeButton2.style.padding = "7px 20px 7px 20px";
welcomeButton2.style.borderRadius = "15px";
welcomeButton2.style.fontSize = "18px";
welcomeButton2.style.backgroundColor = "rgba(230, 54, 54, 1)";
welcomeButton2.style.fontWeight = "bold";
const welcomeButton2Link = document.createElement("a");
welcomeButton2Link.href = "#";
welcomeButton2Link.textContent = "Contact";
welcomeButton2Link.style.textDecoration = "none";
welcomeButton2Link.style.color = "inherit";
welcomeButton2.appendChild(welcomeButton2Link);
welcomeButtonPlace.appendChild(welcomeButton2);

const jsCodeShow = document.createElement("div");
jsCodeShow.className = "js-code-show";
jsCodeShow.style.color = "black";
jsCodeShow.style.backgroundColor = "white";
jsCodeShow.style.borderRadius = "5px";
jsCodeShow.style.border = "2px solid #000000";
jsCodeShow.style.width = "500px";
jsCodeShow.style.height = "300px";
jsCodeShow.style.transform = "translateX(600px)";
jsCodeShow.style.transition = "transform 0.4s ease";
window.onload = () => {
  jsCodeShow.style.transform = "translateX(0px)";
};
welcomeSection.appendChild(jsCodeShow);
const jsCodeShowTopHeader = document.createElement("div");
jsCodeShowTopHeader.className = "js-code-show-top-header";
jsCodeShowTopHeader.style.display = "flex";
jsCodeShowTopHeader.style.justifyContent = "space-between";
jsCodeShowTopHeader.style.alignItems = "center";
jsCodeShowTopHeader.style.padding = "5px 10px 5px 10px";
jsCodeShowTopHeader.style.borderBottom = "2px solid #000000ff";
jsCodeShow.appendChild(jsCodeShowTopHeader);
const jsCodeShowTitle = document.createElement("p");
jsCodeShowTitle.textContent = "JavaScript";
jsCodeShowTitle.style.margin = "0";
jsCodeShowTitle.style.fontSize = "15px";
jsCodeShowTopHeader.appendChild(jsCodeShowTitle);
const jsCodeShowCopyButton = document.createElement("button");
jsCodeShowCopyButton.textContent = "Copy";
jsCodeShowCopyButton.style.padding = "0";
jsCodeShowCopyButton.style.width = "50px";
jsCodeShowCopyButton.style.fontSize = "14px";
jsCodeShowCopyButton.style.fontWeight = "bold";
jsCodeShowCopyButton.style.height = "25px";
jsCodeShowCopyButton.style.border = "none";
jsCodeShowCopyButton.style.backgroundColor = "transparent";
jsCodeShowCopyButton.style.cursor = "pointer";
jsCodeShowCopyButton.onclick = copyJsCode;
jsCodeShowTopHeader.appendChild(jsCodeShowCopyButton);
const jsCodeShowPre = document.createElement("pre");
jsCodeShowPre.style.padding = "0px 15px 0px 15px";
jsCodeShowPre.style.height = "240px";
jsCodeShowPre.style.overflow = "auto";
jsCodeShowPre.style.fontSize = "15px";
jsCodeShowPre.style.fontFamily = "monospace";
jsCodeShowPre.style.whiteSpace = "pre-wrap";
jsCodeShowPre.style.fontWeight = "500";
jsCodeShow.appendChild(jsCodeShowPre);
let jsCode = `console.log("This is my first JS-Made website!");
const text = document.createElement("p");
text.textContent = "Hello, World!";
text.style.color = "blue";

const button = document.createElement("button")";
button.textContent = "Click Me";

function click() {
  console.log("Button clicked!");
  button.style.backgroundColor = "red";
}
  
button.onclick = click;
45555555555555555555555555555555
55555555555555555555555555555555
5555555555555555555555555555555`;
let jsVisibleCode = "";
let index = 0;

function copyJsCode() {
  navigator.clipboard.writeText(jsCode);
  jsCodeShowCopyButton.textContent = "Copied!";
  jsCodeShowCopyButton.style.color = "green";
  setTimeout(() => {
    jsCodeShowCopyButton.textContent = "Copy";
    jsCodeShowCopyButton.style.color = "black";
  }, 1500);
}

function typeCode() {
  if (index < jsCode.length) {
    jsVisibleCode += jsCode[index];
    jsCodeShowPre.textContent = jsVisibleCode + "█";
    index++;
    setTimeout(typeCode, 30);
  }
}
setTimeout(typeCode, 500);

main.appendChild(welcomeSection);

const websiteCreator = document.createElement("div");
websiteCreator.className = "website-creator";
websiteCreator.style.display = "flex";
websiteCreator.style.alignItems = "center";
websiteCreator.style.justifyContent = "space-between";
websiteCreator.style.padding = "20px";
main.appendChild(websiteCreator);
const websiteCreatorText = document.createElement("div");
websiteCreatorText.className = "website-creator-text";
websiteCreator.appendChild(websiteCreatorText);
const websiteCreatorName = document.createElement("h2");
websiteCreatorName.textContent = "Jabir Ibne Habib";
websiteCreatorName.style.fontSize = "28px";
websiteCreatorName.style.margin = "0";
websiteCreatorText.appendChild(websiteCreatorName);
const websiteCreatorTitle = document.createElement("h3");
websiteCreatorTitle.textContent = "Website Creator";
websiteCreatorTitle.style.margin = "0";
websiteCreatorTitle.style.marginTop = "5px";
websiteCreatorText.appendChild(websiteCreatorTitle);
const websiteCreatorPosition = document.createElement("h3");
websiteCreatorPosition.textContent = "Junior Coder, Full Stack Web Developer";
websiteCreatorPosition.style.margin = "0";
websiteCreatorPosition.style.marginTop = "5px";
websiteCreatorText.appendChild(websiteCreatorPosition);
const websiteCreatorImage = document.createElement("img");
websiteCreatorImage.src =
  "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg";
websiteCreatorImage.alt = "Website Creator";
websiteCreatorImage.className = "website-creator-image";
websiteCreator.appendChild(websiteCreatorImage);
