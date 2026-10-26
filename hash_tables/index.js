
// const students = {
//     name:"james",
//     age:21
// }


// for(let[key, value] of Object.entries(students)){

//     console.log(`${key}:${value}`)
// }
// console.log(students)


const user = new Map()

user.set("1", "james")
user.set("2", 'kimani')
user.set("3", "mwangi")
user.set("4", "shee")

for(let[key, value] of user){
    console.log(`${key}:${value}`)
}