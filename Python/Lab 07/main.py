from calculator.simple_operations import add, subtract, multiply, divide
from calculator.advanced_operations import power

print('==========\nCALCULATOR\n==========')

operations_map = {
    'add': {'function': add, 'symbol': '+'},
    'subtract': {'function': subtract, 'symbol': '-'},
    'multiply': {'function': multiply, 'symbol': '×'},
    'divide': {'function': divide, 'symbol': '÷'},
    'power': {'function': power, 'symbol': '^'}
}

# allow the user to select a mathematical operation
operation_name = input(f'Choose which operation you would like to perform ({", ".join(operations_map.keys())}):\n')

if operation_name in operations_map.keys():
    # allow the user to input the two operands
    operand_1 = int(input('Enter the first number:\n'))
    operand_2 = int(input('Enter the second number:\n'))

    # find which function and symbol correspond to the user's selection
    selected_operation = operations_map[operation_name]
    (operation_function, operation_symbol) = (selected_operation['function'], selected_operation['symbol'])

    # display result
    print(f'{operand_1} {operation_symbol} {operand_2} = {operation_function(operand_1, operand_2)}')
else:
    print('Error: please choose one of the operations listed.')