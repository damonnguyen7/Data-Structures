const expect = require('chai').expect;
const Queue = require('../src/queue.js');
const assert = require('assert');

describe('Queue', function() {
  let myQueue;

  beforeEach(function() {
    myQueue = new Queue(100);
  });

  it('should be a function', function() {
    expect(typeof Queue).to.equal('function');
  });

  it('should have all methods expected below', function() {
    const methods = ['enqueue', 'dequeue', 'front', 'isEmpty', 'isFull', 'getSize'];
    methods.forEach(function(method) {
      expect(myQueue).to.have.property(method);
    });
  });

  describe('isEmpty', function() {
    it('should be a function', function() {
      expect(typeof myQueue.isEmpty).to.equal('function');
    });

    it('should return true if queue is empty', function() {
      expect(myQueue.isEmpty()).to.equal(true);
    });    

    it('should return false if queue is not empty', function() {
      myQueue.enqueue(1);
      expect(myQueue.isEmpty()).to.equal(false);
    });
  });

  describe('isFull', function() {
    it('should be a function', function() {
      expect(typeof myQueue.isFull).to.equal('function');
    });

    it('should return false if stack is not full', function() {
      expect(myQueue.isFull()).to.equal(false);
    });

    it('should return true if stack is not full', function() {
      for (let i = 0; i < 100; i++) {
        myQueue.enqueue(i);
      };
      expect(myQueue.isFull()).to.equal(true);
      expect(myQueue.enqueue(101)).to.equal(false);
    });
  });

  describe('getSize', function() {
    it('should be a function', function() {
      expect(typeof myQueue.getSize).to.equal('function');
    });

    it('should return the correct size', function() {
      const size = 3;
      for (let i = 0; i < 3; i++) {
        myQueue.enqueue(i);
      }
      expect(myQueue.getSize()).to.equal(3);
    });    
  });

  describe('enqueue', function() {
    it('should be a function', function() {
      expect(typeof myQueue.enqueue).to.equal('function');
    });

    it('should be a length of 3 after enqueueing 3 times', function() {
      for (let i = 0; i < 3; i++) {
        myQueue.enqueue(i);
      }
      expect(myQueue.getSize()).to.equal(3);
    });
  });

  describe('dequeue', function() {
    it('should be a function', function() {
      expect(typeof myQueue.dequeue).to.equal('function');
    });

    it('should return false when trying to dequeue with no element in stack', function() {
      expect(myQueue.dequeue()).to.equal(false);
    });

    it('should remove the item from the front of the queue', function() {
      const animals = ['dog', 'cat', 'snake'];
      animals.forEach(function(animal) {
        myQueue.enqueue(animal);
      });
      expect(myQueue.dequeue()).to.equal('dog');
      expect(myQueue.getSize()).to.equal(2);
      myQueue.enqueue('bird');
      expect(myQueue.getSize()).to.equal(3);
      expect(myQueue.dequeue()).to.equal('cat');
    });
  });

  describe('front', function() {
    it('should be a function', function() {
      expect(typeof myQueue.front).to.equal('function');
    });

    it('should return element at the front of the stack', function() {
      const animals = ['dog', 'cat', 'snake'];
      animals.forEach(function(animal) {
        myQueue.enqueue(animal);
      });
      expect(myQueue.front()).to.equal('dog');
    });    

    it('should return false if attempt to return element on front of the stack that does not exist', function() {
      expect(myQueue.front()).to.equal(false);
    });
  });
});
