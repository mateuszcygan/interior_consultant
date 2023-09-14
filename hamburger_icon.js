// window.onload =
function myFunction() {
  if (screen.width <= 500) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    let logo = document.getElementById("logo");
    let hamburger_icon = document.querySelector(".icon");
    let description = document.querySelector(".description");
    let overlapping_area = document.querySelector(".overlap");
    let footer = document.querySelector(".footer");

    const web_elements = [
      logo,
      //   hamburger_icon,
      description,
      overlapping_area,
      footer,
    ];

    let invisible = true;
    for (let i = 0; i < web_elements.length; i++) {
      let elem_display = web_elements[i].style.display === "none";
      invisible = invisible && elem_display;
    }

    if (invisible) {
      for (let i = 0; i < web_elements.length; i++) {
        web_elements[i].style.display = "initial";
      }
    } else {
      for (let i = 0; i < web_elements.length; i++) {
        web_elements[i].style.display = "none";
      }
    }
  }
}
