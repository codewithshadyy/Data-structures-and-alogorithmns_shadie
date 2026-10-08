

class Array {
    constructor(items) {
        this.items = []
        
    }

    Add(item){
        this.items.push(item)
    }

    splice(index,count){
        this.items.splice(3,0)
    }
    unshift(item){
        this.items.unshift(item)
    }


    print(){
        this.items.forEach(item => {
            console.log(item)
        })
    }

    
}


const array = new Array()

array.Add(56)
array.Add(10)
array.Add(21)
array.Add(89)
array.Add(120)
array.unshift(45)




array.splice()
array.print()
