/*
A queue is a basic data structure that is used throughout programming. You can think of it as a line in a grocery store. The first one in the line is the first one to be served.Just like a queue.
A queue is also called a FIFO (First In First Out) to demonstrate the way it accesses data.

enqueue - Adds an item onto the end of the queue.
front - Returns the item at the front of the queue.
dequeue - Removes the item from the front of the queue.
isEmpty - True if no more items can be dequeued and there is no front item.
isFull - True if no more items can be enqueued.
getSize - Returns the number of elements in the queue.
*/

function Queue(maxQueueLength) {
  this.queue = {};
  this.counter = 0;
  this.max =  maxQueueLength;
  this.dequeueIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  if (this.counter < this.max) {
    this.counter++;
    this.queue[this.counter] = value;
  } else {
    return false;
  }
};
Queue.prototype.front = function() {
  const queueIsNotEmpty = !this.isEmpty();
  if (queueIsNotEmpty) {
    return this.queue[this.dequeueIndex + 1];
  } else {
    return false;
  }
};

Queue.prototype.dequeue = function() {
  const queueIsNotEmpty = !this.isEmpty();
  if (queueIsNotEmpty) {
    this.dequeueIndex++;
    var dequeueValue = this.queue[this.dequeueIndex];
    delete this.queue[this.dequeueIndex];
    return dequeueValue;
  } else {
    return false;
  }
};

Queue.prototype.isEmpty = function() {
  return this.getSize() === 0 ? true : false;
};

Queue.prototype.isFull = function() {
  return this.counter === this.max ? true : false;
};

Queue.prototype.getSize = function() {
  return this.counter - this.dequeueIndex;
};

module.exports = Queue;