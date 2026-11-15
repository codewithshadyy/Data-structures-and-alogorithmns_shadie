

// class TreeNode{

//     constructor(value){
//         this.node = value
//         this.children = []
//     }

//     addNode(node){
//         this.children.push(node)
//     }
// }


// const mom = new TreeNode("Juddy")
// const sis = new TreeNode("leila")
// // const me  = new TreeNode("shadie")


// mom.addNode(sis)
// mom.addNode(me)
// sis.addNode(mom)
// sis.addNode(me)

// console.log(mom)
// console.log(sis)




class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BSTNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined; 
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}


const family = new BinarySearchTree()


const mom = family.insert(45)
const sis = family.insert(23)
const me = family.insert(40)

console.log(family)
console.log(mom)