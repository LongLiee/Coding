function SingeItem(array) {
    array.sort((x, y) => x - y)                  // *1
    for (let i = 0; i < array.length; i++) {     // *2    
        if (array[i] === array[i + 1]) {
            i += 2;
        } else {
            return array[i]
        }
    }
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * *1 : Make sure the input is ascending order
 * *2 : Loop the array. If the first number is equal to the next number then skip the next two numbers
 *      Else keep looping
 */


