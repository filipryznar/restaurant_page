import "./style.css";
import "./styleMenu.css";

import { loadHomePage } from "./loadContent.js";
import { loadMenuPage } from "./menuPage.js";
import { loadContactPage } from "./contactPage.js";
loadHomePage();
document.getElementById("home").classList.add("current");

// Select all menu items inside the <nav>
const menuItems = document.querySelectorAll("nav a");

// Add an event listener to each menu item
menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    menuItems.forEach((menuItem) => menuItem.classList.remove("current"));
    item.classList.add("current");
    if (item.id === "menu") {
      loadMenuPage();
    }

    if (item.id === "home") {
      loadHomePage();
    }
    if (item.id === "about") {
      loadContactPage();
    }
  });
});

console.log("Hello");
