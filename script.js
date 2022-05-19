let selected = [];
let filterBtn = document.querySelector(".btn-filter");
let searchBar = document.querySelector("#search-bar");
let filteredByContainer = document.querySelector(".filtered-by-container");
let resetBtn = document.querySelector(".btn-reset");
menuOptions = document.querySelectorAll(".select-item");

let dropdown = document.querySelector(".dropdown");
let dropdownMenu = document.querySelector(".dropdown-menu");
let filterLink = document.querySelector("#dropdownFilterLink");

let cardBody = document.querySelector(".card-body");

// for regular select list to keep dropdown from closing
// $(".filter-item").on("click", function (event) {
//   console.log(event);
//   event.stopPropagation();
// });

filterLink.addEventListener("click", (e) => {
  if (!dropdown.classList.contains("show")) {
    filterLink.classList.add("btn-secondary-active");
  } else if (dropdown.classList.contains("show")) {
    filterLink.classList.remove("btn-secondary-active");
  }
});

cardBody.addEventListener("click", (e) => {
  if (!dropdown.classList.contains("show")) {
    filterLink.classList.remove("btn-secondary-active");
  }
});

let reloadPage = () => {
  location.reload();
};

const filteredBy = `<span class="filter-status-container ml-1"
><span class="filtered-start font-weight-bold"
  >Filtered By:
</span>
<span class="text-muted ml-1"> Status </span>
<span class="text-muted ml-1"> | </span>
<span class="text-muted ml-1"> Category </span>
<span class="text-muted ml-1"> | </span>
<a class="text-primary ml-1 filter-edit" id="filterEdit"   role="button"
> Edit</a>
</span>`;

$(document).ready(function () {
  var multipleCancelButton = new Choices("#choices-multiple-remove-button", {
    removeItemButton: true,
    maxItemCount: 5,
    searchResultLimit: 5,
    renderChoiceLimit: 5,
  });
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.id == "filterEdit") {
    filterLink.classList.add("btn-secondary-active");
    dropdownMenu.classList.add("show");
    dropdownMenu.setAttribute(
      "style",
      "position: absolute; transform: translate3d(-28px, 38px, 0px); top: 0px; left: 0px; will-change: transform;"
    );
  }
});

let filterEdit = document.querySelector(".filter-edit");

filterBtn.addEventListener("click", () => {
  filterLink.classList.remove("btn-secondary-active");
  filteredByContainer.innerHTML = filteredBy;
});

resetBtn.addEventListener("click", reloadPage);
