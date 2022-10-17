const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 
 function removeKFromList(l, k, a = []) {
    let c =[]
       for(key in l){
           
           a.push(Number(key))
         if(l[key]!=null){console.log(l[key])
           if(typeof l[key]!= 'object'){
               a.push(l[key])
           }
             removeKFromList(l[key], k, a)
       }else{console.log(l)}}
       for (j of a){if(j!==k){
           c.push(j)
       }}
       return c
     }
module.exports = {
  removeKFromList
};