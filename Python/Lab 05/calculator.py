def add(number_1, number_2):
    return number_1 + number_2


def subtract(number_1, number_2):
    return number_1 - number_2


def multiply(number_1, number_2):
    return number_1 * number_2


def divide(number_1, number_2):
    return number_1 / number_2


def formula(action, number_1, number_2):
    return action, number_1, number_2


def maximum(n, *numbers):
    """
    Finds the maximum value among the given numbers, including the initial value n.

    :param n: The initial value to compare against.
    :param numbers: Any number of additional values to compare.
    :return: The maximum value among n and the numbers provided.
    """
    current_maximum = n

    for number in numbers:
        if number > current_maximum:
            current_maximum = number
    return current_maximum
