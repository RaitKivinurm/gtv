

function chart() {
    // calculate chart percentage
    console.log(results.length + " " + endOfYearTarget);
    let i = 0;
    for (let value of results){
        let percent = (100 * value) / endOfYearTarget;
        console.log(i + " " + value + " " + percent);
        window.document.querySelector("#bar"+[i]+"").style.height = ""+percent+"%";
        window.document.getElementById("text"+[i]+"").innerHTML = percent.toFixed(1)+"%";
        i++
    }
    // motivational message
    setInterval(function () {
        let list = ["Piece of Cake", "No Problemo", "Breeze", "Child's Play", "Duck Soup", "Easy Thing", "At the drop of my Hat"];
        let quotes = list[Math.floor(Math.random()*list.length)];
        console.log(quotes);
        window.document.getElementById("quote").innerHTML = ""+quotes+", it is easy to get " + endOfYearTarget;
    },10000);
    // del motivational message
    setInterval(function () {
        window.document.getElementById("quote").innerHTML = "";
    },6000);
    // refresh page in every 10 min
        setTimeout(function(){
            location = ''
        },10*60000)
}