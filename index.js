class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => (b > a ? -1 : 1))
  }

  get(pos) {
    if(this.items[pos] == undefined) {
      throw new Error ('OutofBounds')
    }
    else {
      return this.items[pos]
    }
  }

  max() {
    if(this.items.length == 0) {
      throw new Error ('EmptySortedList')
    }
    else {
      this.items.sort((a,b) => (b < a ? -1 : 1))
      return this.items[0]
      }
    }

  min() {
    if(this.items.length == 0) {
      throw new Error ('EmptySortedList')
    }
    else {
      this.items.sort((a,b) => (b > a ? -1 : 1))
      return this.items[0]
      }
    }

  sum() {
    
  }

  avg() {}
}

module.exports = SortedList;
