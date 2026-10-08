

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

    linearSearch(item){

        for(let i =0 ;i <= this.items.length; i++){
        if(!this.items.includes(item)){
            return `Ooops ${item} does not exist`
        } else{
            return `Great ${item} found at ${i}`
        }
    }

    }

    
}


const array = new Array()

array.Add(56)
array.Add(10)
array.Add(21)
array.Add(89)
array.Add(120)
array.unshift(45)



console.log(array.linearSearch(56))

array.splice()
array.print()
