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
