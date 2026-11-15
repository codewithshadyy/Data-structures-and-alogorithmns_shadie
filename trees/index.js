

class TreeNode{

    constructor(value){
        this.node = value
        this.children = []
    }

    addNode(node){
        this.children.push(node)
    }
}


const mom = new TreeNode("Juddy")
const sis = new TreeNode("leila")
const me  = new TreeNode("shadie")


mom.addNode(sis)
mom.addNode(me)
sis.addNode(mom)
sis.addNode(me)

console.log(mom)
console.log(sis)