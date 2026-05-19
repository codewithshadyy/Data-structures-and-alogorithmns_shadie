
def count_sort(arr):
    
    
    max_val =max(arr)
    count = [0] * (max_val + 1)
    
    for num in arr:
        count[num] +=1
        
    result = []
    
    for i in  range(len(count)):
        result.extend([i] * count[i])
            
    return result   
        
# count = [0] * (5)  
# print(count)      