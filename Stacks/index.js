
class Stack{
    items = []

    // adding an element to the top of the stack
    push(element){
        this.items.push(element)
    }

    copy(elements){
        this.items.push(...elements)
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

    search(element){
        if(!this.items.includes(element)){
            return `Oops ${element} does not exists`
        }
        else {

             return `Great ${element} found `
        }
       
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

const list = ["shadie", "shee", "shadrack", "wanjiru"]




stacks.push(45)
stacks.push(67)
stacks.push(90)
stacks.push(120)
stacks.copy(list)
stacks.pop()


console.log(stacks.search("shadrack"))
console.log(stacks)
console.log(stacks.peek())
console.log(stacks.size())