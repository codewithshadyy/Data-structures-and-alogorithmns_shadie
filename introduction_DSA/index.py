print(0)
print(1)
count = 2


def fibonacci(n1,n2):
    global count
    
    if count <= 19:
        new = n1 + n2
        print(new)
        n2 = n1
        n1=new
        count += 1
        fibonacci(n1,n2)
        
    else:
        return
    
fibonacci(1, 0)        
        
        
        
        