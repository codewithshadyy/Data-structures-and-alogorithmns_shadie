numbers = [23, 6, 7, 8, 1, 98, 34]

n = len(numbers)

for i in range(1, n):
    insert_index = i
    current_value = numbers.pop(i)
    
    for j in range(i-1, -1, -1):
        if numbers[j] > current_value:
            insert_index = j
            
    numbers.insert(insert_index, current_value)
    

print("Sorted index:", numbers)    