
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
}

let node1 = new Node(7)
let node2 = new Node(10)
let node3 = new Node(120)
let node4 = new Node(568)



node1.next = node2
node2.next = node3
node3.next = node4

let list = new LinkedList(node3)



console.log(list.head.next.data)

