var age = prompt("What is your age?");

if (age < 0)
{
    console.log("your age can't be negative");
}
else
{
    if ((age % 2) == 1)
    {
        console.log("your age is odd.");
    }

    if (age % Math.sqrt(age)  === 0)
    {
        console.log("your age is a perfect square.");
    }

    
    if (age < 18)
    {
        console.log("Sorry, you are not old enough to enter");
    }
    else if (age < 21)
    {
        console.log("You can come in but not drink.");
    }
    else if (age == 21)
    {
        console.log("Happy 21st birthday!");
    }
    else
    {
        console.log("Come on in. You can drink.");
    }
}