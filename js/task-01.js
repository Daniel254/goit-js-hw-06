const categoryItemEls = document.querySelectorAll("li.item");

console.log("Number of categories:", categoryItemEls.length);

categoryItemEls.forEach((categoryItemEl) => {
  console.log("Category:", categoryItemEl.firstElementChild.textContent);
  console.log("Elements:", categoryItemEl.lastElementChild.children.length);
});
