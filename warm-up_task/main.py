def is_palindrome(string):
    return string == string[::-1]


if __name__ == '__main__':
    # positive:
    assert is_palindrome('abcba')
    assert is_palindrome('abcba abcba')
    assert is_palindrome('')
    assert is_palindrome('1234567890987654321')

    # negative:
    assert not is_palindrome(' @" ')
    assert not is_palindrome('12 + 3 = 15')
    assert not is_palindrome('Lorem Ipsum')
    assert not is_palindrome(' .')

    # errors checking
    try:
        is_palindrome(0)
    except TypeError:
        assert True

    try:
        is_palindrome()
    except TypeError:
        assert True
