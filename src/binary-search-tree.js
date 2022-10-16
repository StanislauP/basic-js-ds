const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;

  }
}
class BinarySearchTree {
  constructor(){
    this.tree={}
    this.root = null
  }

  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function addWithin(node, data){
      if(!node){
        return new Node(data)
      }

      if (node.value === data){
        return node
      }
      if (data<node.value){
        node.left = addWithin(node.left, data)
      }else{
        node.right = addWithin(node.right, data)
      }
      return node
    }
    this.root = addWithin(this.root, data)
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};