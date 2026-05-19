
def binary_search(arr, target):
    
    left = 0
    right = len(arr) - 1
    
    if left <= right:
        
        mid = (left + right) // 2
        
        if arr[mid] == target:
            
            
            return mid
        
        elif arr[mid] < target:
            left = mid + 1
        
        else:
            right = mid -1
    return -1        
   


array = [1, 2,3,5, 8, 13, 27]
find = int(input("Search:"))
print(f"{find}")
result = binary_search(array, find) 

if result != -1:
    print("Value",find,"found at index", result)
else:
    print("Target not found in array.")           
        