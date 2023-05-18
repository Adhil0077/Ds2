class Stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(item) {
    this.queue2.push(item);
    while (this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift());
    }
    // Swap the queues
    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.queue1.shift();
  }

  isEmpty() {
    return this.queue1.length === 0;
  }

  size() {
    return this.queue1.length;
  }

  print() {
    console.log(this.queue1);
  }
}

// Usage example
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: [30, 20, 10]

const item = stack.pop();
console.log(item); // Output: 30

console.log(stack.size()); // Output: 2

stack.print(); // Output: [20, 10]
