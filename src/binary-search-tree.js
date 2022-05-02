const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  #root

  constructor() {
    this.#root = null
  }

  root() {
    return this.#root
  }

  add(data) {
    this.#root = addWithin(this.#root, data)

    function addWithin(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return searchWithin(this.#root, data)

    function searchWithin(node, data) {
      if (!node) {
        return false
      }

      if (data === node.data) {
        return true
      }

      if (data < node.data) {
        return searchWithin(node.left, data)
      } else {
        return searchWithin(node.right, data)
      }
    }
  }

  find(data) {
    let result = findWithin(this.#root, data)

    function findWithin(node, data) {
      if (!node) {
        return null
      }

      if (data === node.data) {
        return node
      }

      if (data < node.data) {
        return findWithin(node.left, data)
      } else {
        return findWithin(node.right, data)
      }
    }

    return result
  }

  remove(data) {
    this.#root = removeWithin(this.#root, data)

    function removeWithin(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeWithin(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeWithin(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeWithin(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    if (!this.#root) {
      return
    }

    let curr = this.#root
    while (curr.left) {
      curr = curr.left
    }

    return curr.data
  }

  max() {
    if (!this.#root) {
      return
    }

    let curr = this.#root
    while (curr.right) {
      curr = curr.right
    }

    return curr.data
  }
}

const tree = new BinarySearchTree()
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(14)
// tree.remove(8)
// tree.remove(9)
// console.log(tree.has(14))
// console.log(tree.has(8))
// console.log(tree.has(9))
// tree.has(2) 
// tree.has(6) 
// tree.has(128)
// tree.has(31)
// tree.has(54)
// tree.has(1)
tree.add(2)
tree.add(3)
tree.add(1)
tree.remove(2)
console.log(tree.root())

module.exports = {
  BinarySearchTree
};
