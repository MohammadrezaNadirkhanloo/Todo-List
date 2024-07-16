"use strict";
// document ui
const btnDropdown = document.getElementById("btn_dropdown");
const menuDropdown = document.getElementById("menu_dropdown");
const iconDropdown = document.getElementById("icon_dropdown");
const textDropdown = document.getElementById("text_btn_dropdown");
const itemDropdown = document.querySelectorAll(".item");
const bgBackMenu = document.querySelector("#bg_back_menu");
const selectMouse = document.getElementById("styleDelete");
// ---------
// created data
const addTodoList = document.getElementById("add_Todo");
const addTodoInput = document.getElementById("input_Todo");
const listTodoItem = document.getElementById("todoList");
//-----------

let datas = [];
let eventValue = null;

// Menu show
function showMenu() {
  menuDropdown.classList.toggle("hidden");
  iconDropdown.classList.toggle("-rotate-180");
  bgBackMenu.classList.toggle("hidden");
}

//filter data & ui menu
function itemMenu(value) {
  switch (value) {
    case "all": {
      textDropdown.textContent = "مشاهده همه";
      // showMenu();
      if (datas.length === 0) return alert("لیست خالی است");
      dataTodos(datas);
      checkItem(datas.length);
      break;
    }

    case "completed": {
      textDropdown.textContent = "انجام شده";
      // showMenu();
      if (datas.length === 0) return alert("لیست خالی است");
      const newData = datas.filter((data) => {
        return data.isCompeletd;
      });
      dataTodos(newData);
      checkItem(newData.length);

      break;
    }

    case "uncompleted": {
      textDropdown.textContent = "انجام نشده";
      // showMenu();
      if (datas.length === 0) return alert("لیست خالی است");
      const newData = datas.filter((data) => {
        return !data.isCompeletd;
      });
      dataTodos(newData);

      checkItem(newData.length);
      break;
    }
    default: {
      dataTodos(datas);

      break;
    }
  }
}

btnDropdown.addEventListener("click", showMenu);

itemDropdown.forEach((item) => {
  item.addEventListener("click", (e) => {
    eventValue = e.target.value;
    itemMenu(eventValue);
  });
});

// The background that is displayed when the menu is displayed
bgBackMenu.addEventListener("click", () => {
  menuDropdown.classList.add("hidden");
  iconDropdown.classList.remove("-rotate-180");
  bgBackMenu.classList.add("hidden");
});

// -------------

// Change icon list
function styleIconMouseenter(outline, solid) {
  document.getElementById(outline).classList.add("hidden");
  document.getElementById(solid).classList.remove("hidden");
}
function styleIconMouseleave(outline, solid) {
  document.getElementById(outline).classList.remove("hidden");
  document.getElementById(solid).classList.add("hidden");
}

// ------------

// check img and item
function checkItem(data) {
  if (data !== 0) {
    listTodoItem.classList.remove("hidden");
    document.getElementById("imgListItem").classList.add("hidden");
  } else {
    listTodoItem.classList.add("hidden");
    document.getElementById("imgListItem").classList.remove("hidden");
  }
}

//create code html
function dataTodos(datatodo) {
  let htmldata = "";
  let uniqueId = 0;
  datatodo.forEach((data) => {
    uniqueId++;
    htmldata += `<div
                  class="flex justify-between items-center p-5 ${
                    data.isCompeletd
                      ? "text-slate-400 line-through blur-sm bg-slate-900 rounded-xl "
                      : "hover:bg-slate-900 hover:rounded-xl"
                  }  my-2 transition"
                >
                  <p title="${
                    data.title
                  }" class="text-gray-300 text-xl font-medium w-1/2 truncate">
                  ${data.title}
                  </p>
                  <div class="flex gap-5 items-center">
                    <p
                      class="font-thin text-slate-400 proportional-nums mt-0.5 hidden sm:block md:hidden lg:block"
                      title="${data.dateCreated}"
                    >
                  ${data.dateCreated}
                    </p>
  
                    <button
                      onmouseenter="styleIconMouseenter('deleteOutline${uniqueId}','deleteSolid${uniqueId}')"
                      onclick="removeItem(${data.id})"
                      onmouseleave="styleIconMouseleave('deleteOutline${uniqueId}','deleteSolid${uniqueId}')"
                      title="Delete"
                    >
                      <svg
                        id="deleteOutline${uniqueId}"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 text-red-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                      <svg
                        id="deleteSolid${uniqueId}"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-6 text-red-600 hidden"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      onmouseenter="styleIconMouseenter('checkOutline${uniqueId}','checkSolid${uniqueId}')"
                      onmouseleave="styleIconMouseleave('checkOutline${uniqueId}','checkSolid${uniqueId}')"
                      title="Compeletd"
                      onclick="compeletdItem(${data.id})"
                      class="${data.isCompeletd ? "hidden" : "block"}"
                    >
                      <svg
                        id="checkOutline${uniqueId}"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                        />
                      </svg>
                      <svg
                        id="checkSolid${uniqueId}"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-6 hidden"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>`;
  });
  listTodoItem.innerHTML = htmldata;
  addTodoInput.value = "";
}

// add data in form
function addNewTodo(e) {
  e.preventDefault();
  if (!addTodoInput.value) return alert("کاری تعریف نشده");
  const newData = {
    id: Date.now(),
    dateCreated: new Date().toLocaleDateString("fa"),
    title: addTodoInput.value,
    isCompeletd: false,
  };
  datas.push(newData);
  dataTodos(datas);
  checkItem(datas.length);
}

addTodoList.addEventListener("submit", addNewTodo);

// -------------------

// event remove item
function removeItem(id) {
  datas = datas.filter((data) => data.id !== id);
  itemMenu(eventValue);
}

// event Compeletd item
function compeletdItem(id) {
  const data = datas.find((item) => item.id === id);
  data.isCompeletd = true;
  itemMenu(eventValue);
}
