const customSelectSearchField = document.querySelectorAll(".custom-select-search-field");
const allSelectSearch = document.querySelectorAll(".custom-select-search");
let selectIndex;
const optionArr = [];

const optionListSearchClick = (opt, index, selectId = null, ulId = null) => {
  const select = document.querySelector(selectId);
  const customSelectElement = document.querySelector(".custom-select-list-box");
  const ul = document.querySelector(ulId);

  if (selectId !== null) {
    select.value = opt.textContent;
    // select.parentElement.classList.add('d-none');
    if (ulId !== null) {
      ul.parentElement.classList.add("d-none");
    }
  } else {
    const currentSelect = customSelectSearchField[index].querySelector("select");
    currentSelect.value = opt.textContent;
  }
  customSelectElement.classList.add("d-none");
};

const selectSearchClick = (select, toggleUl = false) => {
  const currentCustomSelectListBox = select.parentElement.querySelector(".custom-select-list-box");
  const closeSelect = select.parentElement.parentElement.querySelector(".close-select");
  closeSelect.classList.remove("d-none");
  if (toggleUl) {
    const ul = select.parentElement.querySelector(".custom-select-list");
    ul.classList.remove("d-none");
  }
  currentCustomSelectListBox.classList.toggle("d-none");
};

const search = (el) => {
  const select = el.parentElement.parentElement.parentElement.querySelector("select");
  const ul = el.parentElement.parentElement.querySelector(".custom-select-list");
  let match = optionArr.filter((value) => new RegExp(`${el.value}`, "i").test(value));

  select.innerHTML = "";
  ul.innerHTML = "";
  match.forEach((item) => {
    select.innerHTML += `
            <option value="${item}">${item}</option>
        `;
    ul.innerHTML += `<li class="custom-option-list" 
                        onclick="optionListSearchClick(this , ${selectIndex}, '#${select.id}', '#${ul.id}')">${item}</li>`;
  });
};

window.onload = function () {
  allSelectSearch.forEach((select) => {
    select.innerHTML += `<div class="custom-select-arrow"></div>`;
  });
};

customSelectSearchField.forEach((field, index) => {
  const customSelect = field.querySelector(".custom-select-search");
  const customSelectList = field.querySelector(".custom-select-list");
  const customSelectListBox = field.querySelector(".custom-select-list-box .search");
  const inputSearch = `<input type="text" class="select-search" oninput="search(this)" placeholder="search" />`;
  selectIndex = index;
  const opt = customSelect.querySelectorAll("option");
  const ul = `<ul class="custom-select-list" id="expertiseSelect"></ul>`;
  customSelectListBox.innerHTML += inputSearch;
  opt.forEach((el) => {
    if (!el.disabled) {
      optionArr.push(el.value);
      customSelectList.innerHTML += `<li class="custom-option-list" 
                                            onclick="optionListSearchClick(this , ${index})">${el.value}</li>`;
    }
  });
});

function closeSelect(el) {
  const currentCustomSelectListBox = el.parentElement.querySelector(".custom-select-list-box");
  el.classList.add("d-none");
  currentCustomSelectListBox.classList.add("d-none");
}
