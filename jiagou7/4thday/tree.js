//实现二叉树
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor(){
        this.root = null;
    }
    insert(curNode,node){
        if(curNode.value < node.value){//插入右侧
            if(curNode.right == null){
                curNode.right = node;
            }else{
                this.insert(curNode.right,node);
            }
        }else{//插入左侧
            if(curNode.left == null){
                curNode.left = node;
            }else{
                this.insert(curNode.left,node);
            }
        }
    }
    set(value){
        let node = new Node(value);
        if(this.root == null){
            this.root = node;
        }else{
            this.insert(this.root,node);
        }
    }
}
let tree = new Tree();
let arr = [100,30,200,28,68,180,160]
arr.forEach((item)=>{
    tree.set(item);
})
console.dir(tree)