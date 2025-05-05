const listElem = document.querySelector("#categories");
const listItemElem = listElem.querySelectorAll(".js-item");
console.log(`Number of categories: ${listItemElem.length}`);

listItemElem.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const countEl = item.querySelectorAll("ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${countEl}`);
});
