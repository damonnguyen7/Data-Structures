const expect = require('chai').expect;
const Stack = require('../src/stack.js');
const assert = require('assert');


describe('Stack', function() {
  let myStack;

  beforeEach(function() {
    myStack = new Stack(100);
  });

  it('should be a function', function() {
    expect(typeof Stack).to.equal('function');
  });

  it('should have all methods expected below', function() {
    const methods = ['push', 'pop', 'top', 'isEmpty', 'isFull', 'getSize'];
    methods.forEach(function(method) {
      expect(myStack).to.have.property(method);
    });
  });

  describe('isEmpty', function() {
    it('should be a function', function() {
      expect(typeof myStack.isEmpty).to.equal('function');
    });

    it('should return true if stack is empty', function() {
      expect(myStack.isEmpty()).to.equal(true);
    });    

    it('should return false if stack is not empty', function() {
      myStack.push(1);
      expect(myStack.isEmpty()).to.equal(false);
    });
  });

  describe('isFull', function() {
    it('should be a function', function() {
      expect(typeof myStack.isFull).to.equal('function');
    });

    it('should return false if stack is not full', function() {
      expect(myStack.isFull()).to.equal(false);
    });

    it('should return true if stack is not full', function() {
      for (let i = 0; i < 100; i++) {
        myStack.push(i);
      };
      expect(myStack.isFull()).to.equal(true);
    });
  });

  describe('getSize', function() {
    it('should be a function', function() {
      expect(typeof myStack.getSize).to.equal('function');
    });

    it('should return the correct size', function() {
      const size = 3;
      for (let i = 0; i < 3; i++) {
        myStack.push(i);
      }
      expect(myStack.getSize()).to.equal(3);
    });    
  });

  describe('push', function() {
    it('should be a function', function() {
      expect(typeof myStack.push).to.equal('function');
    });

    it('should be a length of 3 after pushing 3 times', function() {
      for (let i = 0; i < 3; i++) {
        myStack.push(i);
      }
      expect(myStack.getSize()).to.equal(3);
    });
  });

  describe('pop', function() {
    it('should be a function', function() {
      expect(typeof myStack.pop).to.equal('function');
    });

    it('should return false when trying to pop with no element in stack', function() {
      expect(myStack.pop()).to.equal(false);
    });

    it('should return the last element on top of the stack', function() {
      const animals = ['dog', 'cat', 'snake'];
      animals.forEach(function(animal) {
        myStack.push(animal);
      });
      expect(myStack.pop()).to.equal('snake');
      expect(myStack.getSize()).to.equal(2);
    });
  });

  describe('top', function() {
    it('should be a function', function() {
      expect(typeof myStack.top).to.equal('function');
    });

    it('should return element at the top of the stack', function() {
      const animals = ['dog', 'cat', 'snake'];
      animals.forEach(function(animal) {
        myStack.push(animal);
      });
      expect(myStack.top()).to.equal('snake');
    });    

    it('should return false if attempt to return element on top of the stack that does not exist', function() {
      expect(myStack.top()).to.equal(false);
    });
  });
});
