let logo,
  hamburger_icon,
  description,
  overlapping_area,
  footer,
  navigation_bar,
  X;

let web_elements;

document.addEventListener("DOMContentLoaded", function () {
  logo = document.getElementById("logo");
  hamburger_icon = document.querySelector(".icon");
  description = document.querySelector(".description");
  overlapping_area = document.querySelector(".overlap");
  footer = document.querySelector("footer");

  //elements displayed after clicking hamburger icon
  navigation_bar = document.querySelector("#vertical-nav");
  // whole navigation bar that is invisible in bigger page
  X = document.querySelector("#x");

  web_elements = [logo, hamburger_icon, description, overlapping_area, footer];
});

function displayNavigationPage() {
  if (screen.width <= 500) {
    if (navigation_bar.style.display === "flex") {
      navigation_bar.style.display = "none";
    } else {
      navigation_bar.style.display = "flex";
      navigation_bar.style.alignContent = "center";
    }

    let invisible = true;
    for (let i = 0; i < web_elements.length; i++) {
      console.log(web_elements[i].style.display);
      let elem_display = web_elements[i].style.display === "none";
      invisible = invisible && elem_display;
    }

    if (invisible) {
      for (let i = 0; i < web_elements.length; i++) {
        web_elements[i].style.display = "initial";
        //check if it aligns with the display properties that I set
      }
    } else {
      for (let i = 0; i < web_elements.length; i++) {
        web_elements[i].style.display = "none";
      }
    }
  }
}

let displayMobilePage = () => {
  navigation_bar.style.display = "none";
  for (let i = 0; i < web_elements.length; i++) {
    web_elements[i].style.display = "initial";
  }
};
