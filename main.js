var one=document.getElementById("one")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomnumber= Math.floor(Math.random()*10)+1
var scores=10
function check()
{
    var enternum=one.value
        if(randomnumber==enternum)
        {
            console.log("Right")
            result.textContent="Right"
            alert("You Won...")
        }
        else{
            scores=scores-1
            score.textContent="score"+scores
            console.log("Wrong")
            result.textContent="Wrong"
        }

} 
