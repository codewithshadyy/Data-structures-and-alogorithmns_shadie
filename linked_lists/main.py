

class Node:
    def __init__(self, data):
        
        self.data = data
        self.next = None
        
        
class LinkedList:
    def __init__(self):
         self.head =   None
         
    def prepend(self, data):
        node = Node(data)
        self.head = node 
    def append(self, data):
        node = Node(data)
        
        if not self.head:
            self.head = node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = node    
    def delete(self, data):
        
                            