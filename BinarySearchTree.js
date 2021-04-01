class Node{
    constructor(value){
        this.left=null
        this.right=null
        this.value=value
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.root==null){
            this.root=newNode
        }else{
            let currentNode=this.root
            while(true){
                if(value<currentNode.value){
                    //go left
                    if(!currentNode.left){
                        currentNode.left=newNode
                        return this
                    }
                    currentNode=currentNode.left
                }else{
                    //go right
                    if(!currentNode.right){
                        currentNode.right=newNode
                        return this
                    }
                    currentNode=currentNode.right
                }
            }
        }
    }
    lookup(value){
        if(!this.root){
            return false
        }
        let currentNode=this.root
        while(currentNode){
            if(value<currentNode.value){
                currentNode=currentNode.left
            }else if(value>currentNode.value){
                currentNode=currentNode.right
            }else if(value===currentNode.value){
                return currentNode
            }
        }
        return false
    }
    remove(value){
        if(!this.root){
            return false
        }
        let currentNode=this.root //the node to be deleted
        let parentNode=null
        while(currentNode){
            if(value<currentNode.value){
                parentNode=currentNode
                currentNode=currentNode.left
            }else if(value>currentNode.value){
                parentNode=currentNode
                currentNode=currentNode.right
            }else if(currentNode.value===value){
                //Option 1: No right child:
                if(currentNode.right===null){
                    if(parentNode===null){
                        this.root=currentNode.left
                    }else{
                        //if current<parent value, 
                        //make current left child a child of parent
                        if(currentNode.value<parentNode.value){
                            parentNode.left=currentNode.left

                        //if current>parent value, 
                        //make left child a right child of parent
                        }else if(currentNode.value>parentNode.value){
                            parentNode.right=currentNode.left
                        }
                    }

                //option 2: right child which dosen't have a left child
                }else if(currentNode.right.left===null){
                    if(parentNode===null){
                        this.root=currentNode.left
                    }else{
                        currentNode.right.left=currentNode.left

                        //if current<parent,
                        //make right child of the left the parent
                        if(currentNode.value<parentNode.value){
                            parentNode.left=currentNode.right

                        //if current>parent,
                        //make right child a right child of the parent
                        }else if(currentNode.value>parentNode.value){
                            parentNode.right=currentNode.right
                        }
                    }
                //option3: Right child that has a left child
                }else{
                    //find the Right child's left most child
                    let leftmost=currentNode.right.left
                    let leftmostParent=currentNode.right
                    while(leftmost.left!==null){
                        leftmostParent=leftmost
                        leftmost=leftmost.left
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left=leftmostParent.right
                    leftmost.left=currentNode.left
                    leftmost.right=currentNode.right

                    if(parentNode===null){
                        this.root=leftmost
                    }else{
                        if(currentNode.value<parentNode.value){
                            parentNode.left=leftmost
                        }else if(currentNode.value>parentNode.value){
                            parentNode.right=leftmost
                        }
                    }

                }
                return true

            }
        }
    }
    breadthFirstSearch(){
        let currentNode=this.root
        let list=[]
        let queue=[]
        queue.push(currentNode)

        while(queue.length>0){
            currentNode=queue.shift()
            console.log(currentNode.value)
            list.push(currentNode.value)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list
    }
    depthFirstSearchInorder(){
        return traverseInOrder(this.root,[])
    }
}
function traverseInOrder(node,list){
    if(node.left){
        traverseInOrder(node.left,list)
    }
    list.push(node.value)
    if(node.right){
        traverseInOrder(node.right,list)
    }
    return list
}


const tree=new BinarySearchTree()

tree.insert(9)
tree.insert(4) 
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// tree.remove(170)
// console.log(traverse(tree.root))
// JSON.stringify(traverse(tree.root))
// console.log(tree.lookup(20))
// console.log(tree.breadthFirstSearch())
console.log(tree.depthFirstSearchInorder())


function traverse(node){
    const tree={value: node.value}
    tree.left=node.left===null?null:
    traverse(node.left)
    tree.right=node.right===null?null:
    traverse(node.right);
    return tree
}