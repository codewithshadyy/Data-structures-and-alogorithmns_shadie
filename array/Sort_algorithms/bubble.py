numbers = [78, 56, 23, 11, 3, 5,8]

n = len(numbers)

for i in range(n-1):
    for j in range(n-1-1):
        if numbers[j]> numbers[j + 1]:
            numbers[j], numbers[j + 1] = numbers[j + 1],numbers[j]
            

print(numbers)                   