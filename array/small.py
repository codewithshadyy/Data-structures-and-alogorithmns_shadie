
numbers = [12, 67, 83, 7, 89]

smallest = numbers[0]

for currentNumber in numbers:
    if currentNumber < smallest:
        smallest = currentNumber
print("Smallest:",smallest)