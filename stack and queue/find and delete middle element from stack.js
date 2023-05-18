class Stack {
  constructor() {
    this.items = [];
    this.middle = null;
    this.size = 0;
  }

  push(value) {
    this.items.push(value);
    this.size += 1;
    if (this.size === 1) {
      this.middle = 0;
    } else if (this.size % 2 === 1) {
      this.middle += 1;
    }
  }

  pop() {
    if (this.size === 0) {
      return null;
    } else {
      this.size -= 1;
      const popped = this.items.pop();

      if (this.size % 2 === 0) {
        this.middle -= 1;
      }

      return popped;
    }
  }

  deleteMiddleElement() {
    if (this.size === 0) {
      return;
    }


    // Remove the middle element
    this.items.splice(this.middle, 1);
    this.size -= 1;

    if (this.size % 2 === 0) {
      this.middle -= 1;
    }
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(5);

console.log("Original stack:", stack.items); // [1, 2, 3, 4, 5]

stack.deleteMiddleElement();

console.log("Updated stack:", stack.items); // [1, 2, 4, 5]
