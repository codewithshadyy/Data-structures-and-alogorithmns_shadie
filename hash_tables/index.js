
// const students = {
//     name:"james",
//     age:21
// }


// for(let[key, value] of Object.entries(students)){

//     console.log(`${key}:${value}`)
// }
// console.log(students)


// const user = new Map()

// user.set("1", "james")
// user.set("2", 'kimani')
// user.set("3", "mwangi")
// user.set("4", "shee")

// for(let[key, value] of user){
//     console.log(`${key}:${value}`)
// }

// console.log(user.size)


class HashTable{
    constructor(){
        this.table = new Array(127)
        this.size = 0
    }

    _hash(key){
        let hash = 0

        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }

        return hash % this.table.length
    }

    set(key, value){

        const index = this._hash(key)
        this.table[index] = [key, value]

        this.size++
    }

    get(key){
        const index = this._hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this._hash(key)

        if(this.table[index] && this.table[index].length){
            this.table[index] = undefined
            this.size--
            return true
        } else {
            return false
        }
    }
}

const ht = new HashTable()


ht.set("jane", 29)
ht.set("shee", 18)
ht.set('shadie', 21)


ht.remove("shee")
console.log(ht.get("shee"))