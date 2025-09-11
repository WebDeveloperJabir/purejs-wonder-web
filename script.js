/* Meta Data and Header */
const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");
document.head.appendChild(metaCharset);

/* Prism CSS */
const prismCss = document.createElement("link");
prismCss.rel = "stylesheet";
prismCss.href = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/themes/prism.min.css";
document.head.appendChild(prismCss);
const prismScript = document.createElement("script");
prismScript.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/prism.min.js";
prismScript.onload = () => {
  loadFile("https://raw.githubusercontent.com/WebDeveloperJabir/purejs-wonder-web/refs/heads/main/index.html", HTMLFileShowPlaceCode);
  loadFile("https://raw.githubusercontent.com/WebDeveloperJabir/purejs-wonder-web/refs/heads/main/style.css", CSSFileShowPlaceCode);
  loadFile("https://raw.githubusercontent.com/WebDeveloperJabir/purejs-wonder-web/refs/heads/main/script.js", JSFileShowPlaceCode);
};
document.head.appendChild(prismScript);

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
jsCodeShow.style.transition = "transform 1s ease";
window.onload = () => {
  jsCodeShow.style.transform = "translateX(0px)";
};
function copyJsCode(element, code) {
  navigator.clipboard.writeText(code);
  element.textContent = "Copied!";
  element.style.color = "green";
  setTimeout(() => {
    element.textContent = "Copy";
    element.style.color = "black";
  }, 1500);
}
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
jsCodeShowCopyButton.onclick = () => copyJsCode(jsCodeShowCopyButton, jsCode);
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
document.body.appendChild(text);

const button = document.createElement("button");
button.textContent = "Click Me";

function click() {
  console.log("Button clicked!");
  button.style.backgroundColor = "red";
}
  
button.onclick = click;
document.body.appendChild(button);

for(let i = 0; i < 6; i++) {
  console.log("This is line " + i);
  const text = document.createElement("p");
  text.textContent = "This is line " + i;
  document.body.appendChild(text);
}
`;
let jsVisibleCode = "";
let index = 0;

function typeCode() {
  if (index < jsCode.length) {
    jsVisibleCode += jsCode[index];
    jsCodeShowPre.innerHTML = jsVisibleCode + `&#9608;`;
    index++;
    setTimeout(typeCode, 30);
  }
}
setTimeout(typeCode, 900);

main.appendChild(welcomeSection);

const websiteCreator = document.createElement("div");
websiteCreator.className = "website-creator";
websiteCreator.style.padding = "20px";
const websiteCreatorText = document.createElement("div");
websiteCreatorText.className = "website-creator-text";
websiteCreatorText.style.display = "flex";
websiteCreatorText.style.alignItems = "center";
websiteCreatorText.style.gap = "20px";
websiteCreatorText.style.marginBottom = "25px";
websiteCreator.appendChild(websiteCreatorText);
const websiteCreatorImage = document.createElement("img");
websiteCreatorImage.src = "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg";
websiteCreatorImage.alt = "Website Creator";
websiteCreatorImage.className = "website-creator-image";
websiteCreatorText.appendChild(websiteCreatorImage);
const websiteCreatorIntroducerText = document.createElement("p");
websiteCreatorText.appendChild(websiteCreatorIntroducerText);
const websiteCreatorName = document.createElement("h2");
websiteCreatorName.textContent = "Jabir Ibne Habib";
websiteCreatorName.style.fontSize = "28px";
websiteCreatorName.style.margin = "0";
websiteCreatorIntroducerText.appendChild(websiteCreatorName);
const websiteCreatorTitle = document.createElement("h3");
websiteCreatorTitle.textContent = "Website Creator";
websiteCreatorTitle.style.margin = "0";
websiteCreatorTitle.style.marginTop = "1px";
websiteCreatorIntroducerText.appendChild(websiteCreatorTitle);
const websiteCreatorPosition = document.createElement("h4");
websiteCreatorPosition.textContent = "Junior Coder, Full Stack Web Developer";
websiteCreatorPosition.style.margin = "0";
websiteCreatorPosition.style.marginTop = "3px";
websiteCreatorIntroducerText.appendChild(websiteCreatorPosition);
const websiteCreatorBio = document.createElement("p");
websiteCreatorBio.innerHTML =
  'Welcome to my website! This is a website that is made by only <b><span class="speech-element">JavaScript</span></b>. I rendered all the contents by <b>JavaScript</b>. I didn\'t used <b><span class="speech-element">HTML</span></b> or <b><span class="speech-element">CSS</span></b> externally. For HTML content, I created them by JS methods like <code><b>document.createElement()</b></code>, <code><b>element.appendChild()</b></code>, <code><b>element.innerHTML</b></code> etc. more and for CSS styles, I applied them using JS <code><b>style</b></code> object as well. To say shortly, my website\'s structure is implemented by JS. I showcased the codes at below. You can see the codes and will be able to know how I designed the website.<br><br>This is not a website for my work or any other purposes. The main reason for creating this website is to showcase <b>my skills</b> in JavaScript programming and to show how basically a JS based website looks like. You can see the differences between my website and the tradional websites, you can <b>compare</b> them. You will also be able to note that how JS works. How the DOM manipulation is working here. Why it might be slow for a JS based website that manipulates the DOM directly. It is a website for showcase.' +
  '<br><br>Last few days, I was thinking of making a website that is completely based on JavaScript. I work in <b><span class="speech-element">Python</span></b> with the library <b><span class="speech-element">Tkinter</span></b>. I created some small GUI app. That is not like HTML (Markup Language). The components like Button, Text, Checkbox, Input, Image etc. are made by methods. Some of the methods are: <code><b>tkinter.Button()</b></code>, <code><b>tkinter.Label()</b></code>, <code><b>tkinter.Entry()</b></code>, <code><b>tkinter.Text()</b></code> etc. So, I thought that I will create a website for demo that is fully based on JS. And this website\'s JS codes are really looks like Python\'s code with Tkinter. I included the codes at below. You can see that.<br><br>Actually, I did many projects for practise. I want to be a Full Stack Web Developer. But besides the projects, I want to do some funs with coding. It is also a fun project. If a project gives you fun, if it is a weird project and also you can practise while making it, then why not to make it? What\'s the loss? Then it is a good project and you, of course, can do it besides your work!<br><br>So, explore the website, see the techniques, and enjoy it! Good Luck :)';
websiteCreatorBio.style.fontSize = "17.5px";
websiteCreatorBio.style.lineHeight = "1.5";
websiteCreatorBio.style.marginTop = "10px";
websiteCreatorBio.style.textAlign = "justify";
websiteCreator.appendChild(websiteCreatorBio);
const speechElements = document.querySelectorAll(".speech-element");
speechElements.forEach((element) => {
  element.parentElement.style.textDecoration = "underline";
  element.parentElement.style.cursor = "pointer";
  element.parentElement.style.textUnderlineOffset = "4.5px";
  element.parentElement.style.color = "blue";
  element.parentElement.insertAdjacentHTML("afterbegin", "&#128266;");
});
function speechText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("speech-element")) {
    const text = e.target.textContent;
    speechText(text);
  }
});
main.appendChild(websiteCreator);

const fileShowcase = document.createElement("div");
fileShowcase.classList.add("file-showcase");
fileShowcase.style.padding = "10px";
const fileShowcaseTitle = document.createElement("h2");
fileShowcaseTitle.textContent = "File Showcase";
fileShowcaseTitle.style.textAlign = "center";
fileShowcase.appendChild(fileShowcaseTitle);
const fileShowcasePlace = document.createElement("div");
fileShowcasePlace.classList.add("file-showcase-place");
fileShowcasePlace.style.display = "flex";
fileShowcasePlace.style.flexDirection = "row";
fileShowcasePlace.style.flexWrap = "wrap";
fileShowcasePlace.style.justifyContent = "center";
fileShowcasePlace.style.gap = "20px";
fileShowcase.appendChild(fileShowcasePlace);
const HTMLFileShowPlace = document.createElement("div");
HTMLFileShowPlace.classList.add("file-showcase-item");
const HTMLFileShowPlacePre = document.createElement("pre");
HTMLFileShowPlace.appendChild(HTMLFileShowPlacePre);
const HTMLFileShowPlaceCode = document.createElement("code");
HTMLFileShowPlaceCode.classList.add("language-js");
HTMLFileShowPlacePre.appendChild(HTMLFileShowPlaceCode);
const CSSFileShowPlace = document.createElement("div");
CSSFileShowPlace.classList.add("file-showcase-item");
const CSSFileShowPlacePre = document.createElement("pre");
CSSFileShowPlace.appendChild(CSSFileShowPlacePre);
const CSSFileShowPlaceCode = document.createElement("code");
CSSFileShowPlaceCode.classList.add("language-js");
CSSFileShowPlacePre.appendChild(CSSFileShowPlaceCode);
const JSFileShowPlace = document.createElement("div");
JSFileShowPlace.classList.add("file-showcase-item");
const JSFileShowPlacePre = document.createElement("pre");
JSFileShowPlace.appendChild(JSFileShowPlacePre);
const JSFileShowPlaceCode = document.createElement("code");
JSFileShowPlaceCode.classList.add("language-js");
JSFileShowPlacePre.appendChild(JSFileShowPlaceCode);
[HTMLFileShowPlace, CSSFileShowPlace, JSFileShowPlace].forEach((fileShowPlace, index) => {
  // Container styles
  fileShowPlace.style.border = "2px solid #000000ff";

  fileShowPlace.style.borderRadius = "5px";
  fileShowPlace.style.overflowX = "hidden";
  fileShowPlace.style.width = "410px";
  fileShowPlace.style.height = "300px";
  fileShowPlace.style.backgroundColor = "#f9f9f9";
  fileShowPlace.children[0].style.height = "79%";
  // fileShowPlace.children[0].style.backgroundColor = "#cc0e0eff";
  fileShowPlace.children[0].style.width = "100%";
  fileShowPlace.children[0].style.overflowY = "auto";
  fileShowPlace.children[0].style.padding = "10px";
  fileShowPlace.children[0].style.boxSizing = "border-box";
  fileShowPlace.children[0].style.whiteSpace = "pre-wrap";
  fileShowPlace.children[0].children[0].style.whiteSpace = "pre-wrap";
  fileShowPlace.children[0].children[0].style.display = "block";
  fileShowPlace.children[0].children[0].style.wordBreak = "break-word";

  const topHeader = document.createElement("div");
  topHeader.className = "file-show-top-header";
  topHeader.style.display = "flex";
  topHeader.style.justifyContent = "space-between";
  topHeader.style.alignItems = "center";
  topHeader.style.padding = "5px 10px 5px 10px";
  topHeader.style.borderBottom = "2px solid #000000ff";
  fileShowPlace.appendChild(topHeader);
  const title = document.createElement("p");
  title.textContent = ["HTML", "CSS", "JavaScript"][index];
  title.style.margin = "0";
  title.style.fontSize = "15px";
  topHeader.appendChild(title);
  const copyButton = document.createElement("button");
  copyButton.textContent = "Copy";
  copyButton.style.padding = "0";
  copyButton.style.width = "50px";
  copyButton.style.height = "25px";
  copyButton.style.fontSize = "14px";
  copyButton.style.fontWeight = "bold";
  copyButton.style.border = "none";
  copyButton.style.backgroundColor = "transparent";
  copyButton.style.cursor = "pointer";
  copyButton.onclick = () => copyJsCode(copyButton, fileShowPlace.children[1].children[0].textContent);
  topHeader.appendChild(copyButton);
  fileShowPlace.prepend(topHeader);
});

function loadFile(filePath, insertCodePlace) {
  fetch(filePath)
    .then((res) => res.text())
    .then((text) => {
      insertCodePlace.textContent = text;
      Prism.highlightElement(insertCodePlace);
    })
    .catch((err) => console.error("Error loading file:", err));
}
fileShowcasePlace.appendChild(HTMLFileShowPlace);
fileShowcasePlace.appendChild(CSSFileShowPlace);
fileShowcasePlace.appendChild(JSFileShowPlace);
HTMLFileShowPlaceCode.classList.add("language-html");
CSSFileShowPlaceCode.classList.add("language-css");
JSFileShowPlaceCode.classList.add("language-js");
HTMLFileShowPlaceCode.style.backgroundColor = "#F9F9F9";
CSSFileShowPlaceCode.style.backgroundColor = "#F9F9F9";
JSFileShowPlaceCode.style.backgroundColor = "#F9F9F9";
HTMLFileShowPlacePre.style.backgroundColor = "#F9F9F9";
CSSFileShowPlacePre.style.backgroundColor = "#F9F9F9";
JSFileShowPlacePre.style.backgroundColor = "#F9F9F9";

main.appendChild(fileShowcase);
