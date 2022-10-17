const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor(){
    this.array = []
  }
  
getUnderlyingList() {
   
    for(let i=0; i<this.array.length; i++){
        if (this.array[i]!=null){
        queue['value']=this.array[i]
        queue['next']={getUnderlyingList(queue)}}
}
    return queue
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
       this.array.push(value)
       console.log(this.array)
    return this.array
  }

  dequeue(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let a = this.array[0]
    this.array.shift()
    console.log(a, this.array)
    return a
  }
}

module.exports = {
  Queue
};
