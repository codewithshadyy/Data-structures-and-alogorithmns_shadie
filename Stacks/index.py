# stack = []


# # stacking
# stack.append("mwangi")
# stack.append("kimathi")
# stack.append("shadrack")
# stack.append("james")

# # unstacking via LIFO theory

# stack.pop()



# print(stack)


class Stack:
    def __init__(self):
        self.stack = []
    def push(self, element):
        self.stack.append(element)
    
    def pop(self):
        if self.isEmpty():
            return "The array is empty"
        return self.stack.pop()
    def peek(self):
        if self.isEmpty():
            return "The array is empty"
        return self.stack[-1]   
    def isEmpty(self):
        return len(self.stack)==0
    def size(self):
        return len(self.stack)
    
    
myStack = Stack()

myStack.push("mwangi")     
myStack.push("shadrack")  
myStack.push("onyango")  
myStack.push("kimani")   

print("stack:", myStack.stack)
print("Pop: ", myStack.pop())

print("Peek: ", myStack.peek())

print("isEmpty: ", myStack.isEmpty())

print("Size: ", myStack.size())