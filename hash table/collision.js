class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    if (typeof key === "string") {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
    return key % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    // this.table [index] = value
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const samekeyItem = bucket.find((item) => item[0] === key);
      if (samekeyItem) {
        samekeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index]
    const bucket = this.table[index];
    if (bucket) {
      const samekeyItem = bucket.find((item) => item[0] === key);
      if (samekeyItem) {
        return samekeyItem[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const samekeyItem = bucket.find((item) => item[0] === key);
      if (samekeyItem) {
        bucket.splice(bucket.indexOf(samekeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new hashTable(50);

table.set("name", "muhsin");
table.set("mane", "muhsin");
table.set("age", "22");
// table.display();
// console.log(table.get("name"));
// table.set("mane", "dfg");
table.remove("name")

table.display();