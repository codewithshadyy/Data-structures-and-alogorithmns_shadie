
def search(arr, target):
    
    for i in range(len(arr)):
        
        if arr[i] == target:
            print(f"Great your number {target} found")
            return
        else:
            print("OOp! number not found dear")
            return 
    
array = [7,89, 9, 11, 13,23]
find = int(input("Enter a target number:"))
print(f"{find}")
searching = search(array, find)  

print(searching)  
    
    