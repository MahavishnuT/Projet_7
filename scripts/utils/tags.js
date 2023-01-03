const dropdownItem = document.querySelectorAll(".dropdown-item");
console.log(dropdownItem)
const tagsContainer = document.querySelector("#tags");

dropdownItem.forEach(item => {
  return (item.addEventListener("click", (e) => {
    tagsContainer.innerHTML += `
      <div class="col-2">
        <div class="py-2 tag-item">
          ${e.target.textContent}
        </div>
      </div>
    `
  }))
});