
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


//   inserting node at the beginning of the linked lisst

prepend(data){
    let newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
}

// Delete:removing the first occurence of a node wit the giveen data

delete(data){
    if(!this.head){
        return
    }

    if(this.head.data === data){
        this.head = this.head.next
        return
    }
    let current = this.head
    while(current.next !==  null){
        if(current.next.data === data){
            current.next =current.next.next
            return
        }
        current = current.next


    }
}



// serach:find the first ocucrence of node with a given data

search(data){
    let current = this.head

while(current !== null){
    if(current.data === data){
        return true
    }
current = current.next

}
return false
}


print(data){
    let current =this.head
    const elements = []

    while(current !==   null){
        elements.push(current.data)


        current = current.next
    }
    console.log(elements.join("->"))
}

}

const list = new LinkedList()

list.append(5)
list.append(6)
list.append(45)
list.append(89)
list.append(71)


list.prepend("Layla celine")
list.delete(5)
list.search()

console.log(list.search("Layla celine"))

console.log(list)
list.print()








