var run = true;

var list = [];
window.setTimeout(function()
{
    while (run)
    {
        var ans = prompt("What would you like to do?");
        if (ans === "new")
         {
            var todo = prompt("Enter a new TODO");
            list.push(todo);
        } 
        else if (ans === "delete")
        {
            var index = prompt("Enter an index to delete");
            list.splice(index, 1);
        }
        else if (ans === "list")
        {
            if (list.length>0)
            {
                console.log("***********");
                for (var i =0 ; i <list.length; i++)
                {
                    console.log(i + ": " + list[i]);
                }
                console.log("***********");
            }
            else{
                console.log("List is empty.");
            }
        }
        else if (ans === "quit")
        {
            run = false;
        }
    }
}, 500);