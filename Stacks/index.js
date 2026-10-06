
class Stack{
    items = []


    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
           return null
        }else{
             return this.items.pop()
        }
    }
    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
       return this.items.length === 0
    }

    size(){
        
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