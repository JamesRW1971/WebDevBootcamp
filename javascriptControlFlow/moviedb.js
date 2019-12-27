console.log("Connected!!");

var movies =
[
    {
        picture : "IT",
        seen : false,
        stars : 3.9
    },
    {
        picture : "Rocky IV",
        seen : true,
        stars : 4.5
    },
    {
        picture : "As Good As it Gets",
        seen : true,
        stars : 5.0
    },
];



function showStatus(movie)
{
    var str = "You have ";
    if (movie.seen)
        str += "watched ";
    else
        str += "not seen ";

    str += "\""  + movie.picture + "\" - " + movie.stars + " stars";
    console.log(str);
}

movies.forEach(showStatus);