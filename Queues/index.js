
class Queue{
    constructor(){
        this.items  = {}
        this.head = 0
        this.tail = 0
    }

     
    // adding an element to the back

    enqueue(item){
         this.items.tail = item
         this.tail++
}

dequeue(){
    if(this.isEmpty){
        return "OOps no items in the queue"
    }
    const item = this.items.head
    delete this.items.head
    this.head++
    return item
}




   get isEmpty(){
        return this.tail - this.head === 0
    }
}


const queue = new Queue()


queue.enqueue(89)
queue.enqueue("shee")
queue.enqueue("maina")
queue.enqueue("kimani")

console.log(queue)
queue.dequeue()