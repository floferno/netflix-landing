const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectTab(e) {
  unselectTab();
  unselectContent();
  this.classList.add("active");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function unselectTab() {
  tabItems.forEach((item) => item.classList.remove("active"));
}

function unselectContent() {
  //   console.log(tabContentItems);
  //   tabContentItems.forEach((item) => console.log(item));
  //   const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

//Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectTab));
