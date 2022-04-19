const categoryItemEls = document.querySelectorAll("li.item");

console.log("Number of categories:", categoryItemEls.length);

categoryItemEls.forEach((categoryItemEl) => {
  console.log("Category:", categoryItemEl.querySelector("h2").textContent);
  console.log("Elements:", categoryItemEl.querySelectorAll("li").length);
});
