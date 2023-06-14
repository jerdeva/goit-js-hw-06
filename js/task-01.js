const itemsCategories = document.querySelectorAll('li.item');
console.dir("Number of categories: " + itemsCategories.length);

console.dir(' ');


itemsCategories.forEach(function (item) {
    console.dir("Category: " + item.children[0].textContent);
    console.dir("Elements:" + item.children[1].children.length);
    console.dir(" ");
})
