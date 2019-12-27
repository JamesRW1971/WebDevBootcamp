function isEven(num)
{
    return num % 2 === 0;
}

function factorial(num)
{
    if (num === 0)
    {
        return 1;
    }

    var ans = num;
    for (var i = ans-1; i > 0; i--)
    {
        ans *= i;
    }
    return ans;
}

function kebabToSnake(str)
{
    var tmp = str;

    while (tmp.indexOf("-") != 0)
    {
        tmp = tmp.replace("-","_");
    }
    return tmp;
}

