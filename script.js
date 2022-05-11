let selected = [];
let filterBtn = document.querySelector(".btn-filter");
let searchBar = document.querySelector("#search-bar");
let filteredByContainer = document.querySelector(".filtered-by-container");
let resetBtn = document.querySelector(".btn-reset");
menuOptions = document.querySelectorAll(".select-item");

// for regular select list to keep dropdown from closing
// $(".filter-item").on("click", function (event) {
//   console.log(event);
//   event.stopPropagation();
// });

let reloadPage = () => {
  location.reload();
};

const filteredBy = `<span class="filter-status-container ml-1"
><span class="filtered-start font-weight-bold"
  >Filtered By:
</span>
<span class="text-muted"> Status </span>
|
<span class="text-muted"> Owner </span>
|
<span class="text-primary"> Edit</span>
</span>`;

$(document).ready(function () {
  var multipleCancelButton = new Choices("#choices-multiple-remove-button", {
    removeItemButton: true,
    maxItemCount: 5,
    searchResultLimit: 5,
    renderChoiceLimit: 5,
  });
});

menuOptions.forEach((item) => {
  item.addEventListener("click", (event) => {});
});

filterBtn.addEventListener("click", () => {
  menuOptions.forEach((item) => {
    // console.log(item.text);
  });
  filteredByContainer.innerHTML = filteredBy;
});

resetBtn.addEventListener("click", reloadPage);
