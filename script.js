const color1 = document.querySelector(".col1");
const color2 = document.querySelector(".col2");
const color3 = document.querySelector(".col3");
const hexStyle1 = getComputedStyle(color1).getPropertyValue("background-color");
const hexStyle2 = getComputedStyle(color2).getPropertyValue("background-color");
const hexStyle3 = getComputedStyle(color3).getPropertyValue("background-color");

color1.innerText = hexStyle1;
color2.innerText = hexStyle2;
color3.innerText = hexStyle3;
