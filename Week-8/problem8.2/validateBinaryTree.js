//implementation search tree and validate if given tree is binary search tree
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root===null){
            this.root=newNode;
            return this;
        }
        let current=this.root;
        while(current){
            if(value===current.value) return undefined;
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode;
                    return this;
                }
                current=current.left;
            }else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    } 
    inorder(value){
        if(value===null){
            return;
        }
        this.inorder(value.left);
        console.log(value.data+" ");
        this.inorder(value.right);
    }  
}

const preorder=[1,2,4,7,5,3];

const tree= new BST();

for(let i=0; i<preorder.length; i++){
    tree.insert(preorder[i]);
}

tree.inorder(tree);


