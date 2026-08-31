
# def stock_prices(prices):
#     for price in range(len(prices)):
#         if prices[price] == 300:
#             print(price)
        
        
# money = [56, 300, 89, 78]

# stock_prices(money)  


from array import array      

months = ['january', 'february', 'march', 'april', 'may']
expenses = array("f", [2000, 2300, 2600, 2130, 2190])

def get_expense_by_month(month_name:str) -> int:
    
    if month_name not in months:
        raise ValueError("Month not foound!!")
    idx  = months.index(month_name)
    
    return expenses[idx]

    

