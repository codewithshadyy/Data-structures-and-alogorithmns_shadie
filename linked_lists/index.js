
class Node {
    constructor(data) {
        this.data =data
        this.next = null
        
    }
}


class LinkedList {
    constructor(head=null) {
        this.head = head
        
    }
    
    // inseriting new node ath the end of the linked lIst
  append(data){
    let newNode = new Node(data)
    if(!this.head){
        this.head = newNode
    }else{
        let current = this.head

        while(current.next !== null){
            current = current.next

        }

        current.next = newNode
    }
  }
}

const list = new LinkedList()

list.append(5)
list.append(6)
list.append(45)
list.append(89)
list.append(71)









