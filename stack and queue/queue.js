class Node{
  constructor(element){
    this.value = element
    this.next = null
  }
}

class queue{
  constructor(){
    this.front = null
    this.rear = null
  }

  Enqueue(value){
    const node = new Node(value)
    if(!this.front){
      this.front = node
      this.rear = node
    }else{
      this.rear.next = node
      this.rear = node
    }
  }

  Dequeue(){
    if(!this.front){
      console.log("empty queue")
    }else{
      this.front = this.front.next
    }
  }

  print(){
    if(!this.front){
      console.log("empty queue");
    }else{
      let temp = this.front
      while(temp){
        console.log(temp.value);
        temp = temp.next
      }
    }
  }

}

let list = new queue()

list.Dequeue()

list.print()