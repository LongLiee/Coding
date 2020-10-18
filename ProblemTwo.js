function Tree(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

function sumGrandChildren() {
    let result = 0;
    if (root === null) return result;           // *1
    if (root.data % 2 === 0) {                  // *2
        if (root.left) {
            if (root.left.left) {
                result += root.left.left.data
            }
            if (root.left.right) {
                result += root.left.right.data
            }
        }
        if (root.right) {
            if (root.right.left) {
                result += root.right.left.data
            }
            if (root.right.right) {
                result += root.right.right.data
            }
        }
    }
    result += sumGrandChildren(root.left);      // *3 
    result += sumGrandChildren(root.right);
    return result;
}

/**
  * Time complexity: O(2^n)
  * Space complexity: O(n)
  * 1: To prevent infinite loops.
  * 2: Check grandparent is divisible by 2 and grandchildren do exist (both left and right)
  * 3: Parent (left and right) becomes root and we start the process over again
*/