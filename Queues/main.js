
class Node{
    constructor(){
        this.value = this.value
        this.next = null
    }
}


class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode
            this.last = newNode
            
        }else{
            this.first.next = newNode
            this.last = newNode
        }
        this.length++
        return newNode
    }
}


const queue = new Queue()

queue.enqueue(21)
queue.enqueue("kipkech")
queue.enqueue(75)
queue.enqueue(10)

console.log(queue)