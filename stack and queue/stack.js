class Node{
  constructor(element){
    this.value = element
    this.next = null
  }
}

class stack{
  constructor(){
    this.top = null
  }

  push (value){
    const node = new Node(value)
    if(!this.top){
      this.top = node
    }else{
      node.next = this.top
      this.top = node
    }
  }

  pop(){
    if(!this.top){
      console.log("stack underflow")
    }else{
      this.top = this.top.next
    }
  }

  print(){
    if(!this.top)
    {
      console.log("stack underflow")
    }else{

      let temp = this.top
      while(temp)
      {
        console.log(temp.value)
        temp = temp.next
      }
    }
  }
}

let list = new stack ()

list.push(19)
list.push(20)
list.push(21)
list.pop()

list.print()
