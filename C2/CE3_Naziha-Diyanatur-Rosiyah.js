let data = [
    {
        title: "The Only Guide You Need",
        score:8,
        status: "Posted",
    },
    {
        title: "The Advanced Guide To Archive",
        score:5,
        status: "Unposted",

    },
    {
        title: "In Defense of the Figurative Use of Literally.",
        score:6,
        status: "Unposted",
    },
    {
        title: "The Best Ways to Do Market Research For Your Business Plan",
        score:7,
        status: "Unposted",
    },
    {
        title: "The Only Guide You Need Part 2",
        score:8,
        status: "Unposted",
    },
]

// Jawaban:
function Jobs(array){
    for(let i=0; i<array.length; i++){
        if(array[i].score >= 7) {
            array[i].status = 'Posted';
        }
    }
    return array;
}

console.log(Jobs(data));
