const slider = document.getElementById("slider");
const icon = document.querySelectorAll(".icon");
const hiddenText = document.querySelectorAll(".answerd");
const divv = document.querySelectorAll(".question");

for (let i = 0; i < divv.length; i++) {
  divv[i].addEventListener("click", (event) => {
    divv[i].classList.toggle("question-click");
    let iconn = event.target.nextSibling.nextSibling;
    iconn.classList.toggle("rotate");
    let text = event.target.parentNode.nextSibling.nextSibling;
    if (text.textContent === "") {
      text.style.backgroundColor = "#11346f";
      text.style.padding = "13px 5px";

      text.textContent =
        "The MagicMassage can last up to 6 hours when it's fully charged.";
    } else {
      text.textContent = "";
      text.style.padding = " 0";
    }
  });
}

const changeSlider = (e) => {
  slider.style.marginLeft = `${e}%`;
};
