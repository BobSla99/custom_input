let tag = [];

const inputTagContainer = document.querySelector("#input-tag");
const tagsContainer = document.createElement("div");
const inputTag = document.createElement("span");

inputTag.ariaRoleDescription = "textbox";
inputTag.contentEditable = true; //el span se comporta como un input
inputTag.classList.add("input");
inputTag.focus();

inputTagContainer.classList.add("input-tag-container");
tagsContainer.classList.add("tag-container");

inputTagContainer.appendChild(tagsContainer);
tagsContainer.appendChild(inputTag);
inputTagContainer.addEventListener("click", (e) => {
  if (
    e.target.id === "input-tag" ||
    e.target.classList.contains("tag-container")
  ) {
    inputTag.focus();
  }
});

inputTag.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && inputTag.textContent !== "") {
    e.preventDefault();
    tag.push(inputTag.textContent);
    tagsContainer.innerHTML = "";

    if (tag) {
      tag.forEach((tag) => {
        const nTag = document.createElement("div");
        nTag.classList.add("tag");
        nTag.innerHTML = `${tag} <span class="tag-delete" data-id${(
          Math.random() * 100
        )
          .toString(36)
          .slice(3)}>X</span>`;
        console.log(nTag);
        tagsContainer.insertBefore(nTag, tagsContainer.lastElementChild);
      });
    }
  }

  console.log(tag);
});
