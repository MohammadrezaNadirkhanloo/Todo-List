"use strict";
const btnDropdown = document.getElementById("btn_dropdown");
const menuDropdown = document.getElementById("menu_dropdown");
const iconDropdown = document.getElementById("icon_dropdown");
const textDropdown = document.getElementById("text_btn_dropdown");
const itemDropdown = document.querySelectorAll(".item");
const bod = document.querySelector("#bg_back_menu");

bod.addEventListener("click", () => {
  menuDropdown.classList.add("hidden");
  iconDropdown.classList.remove("-rotate-180");
  bod.classList.add("hidden");
});
function showMenu() {
  menuDropdown.classList.toggle("hidden");
  iconDropdown.classList.toggle("-rotate-180");
  bod.classList.toggle("hidden");
}

let num = 0;
function itemMenu(e) {
  if (e.target.classList.contains("item_all")) {
    textDropdown.textContent = "مشاهده همه";
    showMenu();
  } else if (e.target.classList.contains("item_done")) {
    textDropdown.textContent = "انجام شده";
    showMenu();
  } else {
    textDropdown.textContent = "انجام نشده";
    showMenu();
  }
}

btnDropdown.addEventListener("click", showMenu);

itemDropdown.forEach((item) => {
  item.addEventListener("click", itemMenu);
});
