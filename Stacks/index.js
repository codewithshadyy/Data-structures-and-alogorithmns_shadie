
class Stack{
    items = []

    // adding an element to the top of the stack
    push(element){
        this.items.push(element)
    }

    // removing the last element from a stack

    pop(){
        if(this.isEmpty()){
           return null
        }else{
             return this.items.pop()
        }
    }
    // returning the last ellement in a stack without removing it
    peek(){
        return this.items[this.items.length-1]
    }


    // checking whether the stack is empty
    isEmpty(){
       return this.items.length === 0
    }

    // checking number of elements in a stack
    size(){
        return this.items.length

    }

    
}



const stacks = new Stack()


stacks.push(45)
stacks.push(67)
stacks.push(90)
stacks.push(120)
stacks.pop()



console.log(stacks)
console.log(stacks.peek())
console.log(stacks.size())