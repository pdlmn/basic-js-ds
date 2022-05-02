const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
  constructor() {
    this.head = null
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    const node = new ListNode(value)
    if (!this.head) {
      this.head = node
    } else {
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      curr.next = node
    }
  }

  dequeue() {
    if (!this.head) return null

    const deleted = this.head
    if (deleted.next) {
      this.head = deleted.next
    } else {
      this.head = null
    }
    return deleted.value
  }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

module.exports = {
  Queue
};
