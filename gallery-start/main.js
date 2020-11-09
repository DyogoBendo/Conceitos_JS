const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", `images/pic${i}.jpg`);

  img.onclick = () => handleImageClick(img.src);
  thumbBar.appendChild(img);
}

function handleImageClick(src) {
  displayedImage.setAttribute("src", src);
}
/* Wiring up the Darken/Lighten button */

btn.onclick = handleButtonClick;

function handleButtonClick() {
    const stateBtn = btn.getAttribute("class");
    if( stateBtn === 'dark'){
        btn.setAttribute("class", "light")
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }else{
        btn.setAttribute("class", "dark")
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}
