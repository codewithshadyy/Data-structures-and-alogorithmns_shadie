
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
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }


    dequeue(){

        if(!this.first){
            return "oop the the queue is empty"
        }

        if(this.first ==- this.last){
            this.last = null
        }

        const hodlingPointer =this.first
        this.first = this.first.next
        this.length--
        return hodlingPointer.value
    }

    peek(){
        return this.length
    }
}


const queue = new Queue()

queue.enqueue(21)
queue.enqueue("kipkech")
queue.enqueue(75)
queue.enqueue(10)

queue.dequeue()

console.log(queue)
console.log(queue.peek())