const dropdownItem = document.querySelectorAll(".dropdown-item");
const tagsContainer = document.querySelector("#tags");

function addTagToContainer() {
  tagsContainer.innerHTML = `
      <div class="col-2">
        <div class="py-2 tag-item>
          ${this.value}
        </div>
      </div>
    `
}
// dropdownItem.forEach(item => {
//   item.addEventListener("click", () => {
    
//   })
// })