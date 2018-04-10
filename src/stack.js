/* 
A stack is a basic data structure that can be logically thought as linear structure represented by a real physical stack or pile, a structure where insertion and deletion of items takes place at one end called top of the stack. The basic concept can be illustrated by thinking of your data set as a stack of plates or books where you can only take the top item off the stack in order to remove things from it. This structure is used all throughout programming.

The basic implementation of a stack is also called a LIFO (Last In First Out) to demonstrate the way it accesses data, since as we will see there are various variations of stack implementations.

There are basically three operations that can be performed on stacks . They are 1) inserting an item into a stack (push). 2) deleting an item from the stack (pop). 3) displaying the contents of the stack(pip).

Below are some of operations a stack data type normally supports:
push - Adds an item onto the stack.
top - Returns the last item pushed onto the stack.
pop - Removes the most-recently-pushed item from the stack.
isEmpty(Boolean) - True if no more items can be popped and there is no top item.
isFull(Boolean) - True if no more items can be pushed.
getSize(Integer) - Returns the number of elements on the stack.
*/

function Stack(maxStackLength) {
  this.stack = {};
  this.size = 0;
  this.max = maxStackLength;
};

Stack.prototype.getSize = function() {
  return this.size;
};

Stack.prototype.isEmpty = function() {
  return this.size === 0 ? true : false;
};

Stack.prototype.top = function() {
  const stackIsNotEmpty = !this.isEmpty();
  if (stackIsNotEmpty) {
    return this.stack[this.size];
  } else {
    return false;
  }
};

Stack.prototype.isFull = function() {
  return this.size < this.max ? false : true;
};

Stack.prototype.push = function(value) {
  this.size++;
  this.stack[this.size] = value;
};

Stack.prototype.pop = function() {
  const stackIsNotEmpty = !this.isEmpty();
  const isNotFull = !this.isFull();

  if (stackIsNotEmpty && isNotFull) {
    let poppedValue = this.stack[this.size];
    delete this.stack[this.size];
    this.size--;
    return poppedValue;
  } else {
    return false;
  }
};

module.exports = Stack;