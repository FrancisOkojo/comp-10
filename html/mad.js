//mad lib

// Event listener
document.getElementById("mad-libs-button").addEventListener("click", buildMadLib);

//Event function
function buildMadLib(){
    //input
let pluralnoun = document.getElementById("plural-noun").value;
let adjective = document.getElementById("adjective").value;
let verb = document.getElementById("verb").value;
let noun = document.getElementById("noun").value;
//process
let result = '"There are too many ' + pluralnoun + ' on this ' + adjective + ' aeroplane!", I screamed. "Somebody has to ' + verb + ' on the ' + noun + ' to solve this problem."';
//output
document.getElementById("result").innerHTML = result;
}
