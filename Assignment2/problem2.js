function contains(obj, target) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      if (contains(obj[key], target)) {
        return true;
      }
    } else if (obj[key] === target) {
      return true;
    }
  }
  return false;
}

let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let targetValue = 44;
let containsTarget = contains(nestedObject, targetValue);
console.log(containsTarget); // true
