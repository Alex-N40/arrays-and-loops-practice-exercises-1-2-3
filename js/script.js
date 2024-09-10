var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books",
];

// Ex.1
/*stuff.forEach(function (element, index) {
  if (index % 2 === 0) {
    console.log(element);
  }
});*/

// Ex.2
/*var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log(`No such element exists in this array.`);
  } else {
    array.splice(index, 1);
    console.log(`Removed ${item}.`);
  }
};

removeItem(stuff, "sky");
removeItem(stuff, "moon");
console.log(stuff);*/

// Ex.3
// option with ".filter()"
/*var withS = stuff.filter(function (item) {
  return item.includes("s");
});

console.log(withS);*/

// option with "for...of"
var withS = [];
for (var element of stuff) {
  if (element.includes("s")) {
    withS.push(element);
  }
}
console.log(withS);
