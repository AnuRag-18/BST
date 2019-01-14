function Node(data){
    this.value = data;
    this.left = null;
    this.right = null;
}

function Tree (){
    this.root = null;
}
Tree.prototype.addValue = function(n){
    var a = new Node(n)
    if(this.root == null){
        this.root = a;
    }
    else {
        this.root.addNode(a);
    }
} 

Node.prototype.addNode = function(m)
{
    if(m.value < this.value){
        if(this.left == null){
            this.left= m;
        }
        else {
            this.left.addNode(m);
        }
    }
    else if(m.value > this.value){
        if(this.right == null){
            this.right = m;
        }
        else {
            this.right.addNode(m);
        }
    }
}
Tree.prototype.search = function(val){
    var found = this.root.search(val);
    return found;
}
Node.prototype.search = function(val){
  if(this.value == val){
  return this;
  }
  else if(val <this.value && this.left!=null){
     return this.left.search(val);
  }
  else if (val >this.value && this.right!=null){
      return this.right.search(val);
  }
  return null;
}

Tree.prototype.traverse = function(){
 this.root.visit();
}
Node.prototype.visit = function(){
    if(this.left!=null){
        this.left.visit();
    }
    console.log(this.value);
    if(this.right!=null){
        this.right.visit();
    }
}


var tree = new Tree();
tree.addValue(4);
tree.addValue(5);
tree.addValue(3);
tree.addValue(2);
tree.addValue(1);
tree.addValue(10);
tree.addValue(8);
tree.addValue(3);tree.addValue(9);
console.log(tree);
tree.traverse();
var hello = tree.search(5);
if(hello ==null){
    console.log('not found');

}
else {
    console.log(hello);
}