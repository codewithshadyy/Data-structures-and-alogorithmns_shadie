
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)


unsorted_arry = [45,-7, 0, 23, 78, 9]


sorted_array = quick_sort(unsorted_arry)

print("Sorted Array:", sorted_array)
    