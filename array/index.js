

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


    
}


const array = new Array()

array.Add(56)
array.Add(10)
array.Add(21)
array.Add(89)
array.Add(120)




array.splice()
console.log(array)
