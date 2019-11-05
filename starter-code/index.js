class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.length = this.items.length;
      this.items = this.items.sort()
    }
    get(pos) {
      if (pos => 0 && pos < this.items.length) {
        return this.items[pos];
      }
      throw new Error("OutOfBounds");
    }
    max() {
      if (this.items.length != 0) {
        return Math.max(...this.items);
      }
      else {
        throw new Error("EmptySortedList");
      }
    }
    min() {
      if (this.items.length != 0) {
        return Math.min(...this.items);
      }
      else {
        throw new Error("EmptySortedList");
      }
    }
    average() {
      if (this.items.length != 0) {
        return this.sum() / this.length;
      }
      else {
        throw Error("EmptySortedList");
      }
    }
    sum() {
      if (this.items.length != 0) {
        return this.items.reduce((a, b) => a + b, 0)
      }
      else {
        return 0;
      }
    }
  };

  const sortedList = new SortedList;
  console.log(sortedList);
  sortedList.add(6699);
  sortedList.add(748);
  console.log(sortedList);
  console.log(sortedList.get(2))

  
  module.exports = SortedList;