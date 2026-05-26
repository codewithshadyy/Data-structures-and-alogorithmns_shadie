

# enqueue() >>> adding element to the queue
#dequeue() >>> removing element from the queue
#peek() >>> top most element in the queue
#isEmpty >>> checks if the queue is empty
#size() >>>checks number of elements in the queue


class Queue:
    
    def __init__(self):
        self.queue = []
    
    def enqueue(self, element):
        self.queue.append(element) 
        
    def dequeue(self):
        if self.isEmpty():
            return "The queue is empty"
        return self.queue.pop(0)
    def peek(self):
        if self.isEmpty():
            return "The queue is empty"
        return self.queue[0]
    def isEmpty(self):
        return len(self.queue) == 0
    def size(self):
        return len(self.queue)
    
myQueue = Queue()

myQueue.enqueue('A')
myQueue.enqueue('B')
myQueue.enqueue('C')
print("Queue: ", myQueue.queue)

print("Dequeue: ", myQueue.dequeue())

print("Peek: ", myQueue.peek())

print("isEmpty: ", myQueue.isEmpty())

print("Size: ", myQueue.size())   
               