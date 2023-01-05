const dropdownItem = document.querySelectorAll(".dropdown-item");
console.log(dropdownItem)
const tagsContainer = document.querySelector("#tags");

function addTagToContainer(event) {

      tagsContainer.innerHTML += `
        <div class="col-2">
          <div class="py-2 tag-item">
            ${event.target.textContent}
          </div>
        </div>
      `
}
