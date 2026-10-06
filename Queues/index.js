
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
}


const queue = new Queue()


queue.enqueue(89)

console.log(queue)