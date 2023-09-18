let logo,
  hamburger_icon,
  description,
  overlapping_area,
  footer,
  navigation_bar,
  navigation_bar_X,
  X;

let web_elements;

document.addEventListener("DOMContentLoaded", function () {
  logo = document.getElementById("logo");
  hamburger_icon = document.querySelector(".icon");
  description = document.querySelector(".description");
  overlapping_area = document.querySelector(".overlap");
  footer = document.querySelector(".footer");
  navigation_bar_X = document.querySelector("#navX");

  //elements displayed after clicking hamburger icon
  navigation_bar = document.querySelector("#myLinks"); // whole navigation bar
  X = document.getElementById("x");

  web_elements = [logo, hamburger_icon, description, overlapping_area, footer];
});

function displayNavigationPage() {
  if (screen.width <= 500) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    let invisible = true;
    for (let i = 0; i < web_elements.length; i++) {
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

      navigation_bar.style.display = "flex";
      navigation_bar.style.flexDirection = "column";
      navigation_bar.style.gap = "2rem";
      navigation_bar.style.height = "100vh";
      navigation_bar.style.alignItems = "center";
      navigation_bar.style.flexWrap = "wrap";
      navigation_bar.style.justifyContent = "center";

      // navigation_bar_X.style.display = "grid";

      X.style.display = "initial";
      X.style.alignSelf = "end";
    }
  }
}

let displayMobilePage = () => {
  X.style.display = "none";
  navigation_bar.style.display = "none";
  for (let i = 0; i < web_elements.length; i++) {
    web_elements[i].style.display = "initial";
  }
};
