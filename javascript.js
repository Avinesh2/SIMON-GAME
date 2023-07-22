const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomNumber;
var randomChosenColor;

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);


    $("#" + randomChosenColor).css("opacity", "0.4");

    playSound(randomChosenColor)

    setTimeout(opacity, 200);


    function opacity() {
        $("#" + randomChosenColor).css("opacity", "1");
    }
    $("h1").text("Level " + level);
    
    level++;
    
}


var i=0;
var flag1=0;

$(".btn").click(function () {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
     
    for(i=0;i<userClickedPattern.length;i++)
    {
        if (userClickedPattern[i]==gamePattern[i])
        { continue; }
        else{
            console.log("wrong ans");
            var audio2= new Audio("sounds/wrong.mp3")
            audio2.play();
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },100)
            $("h1").text("Game Over, Press Any Key to Restart")

            flag1=1;

            startOver();

            
        }

    }

    if(i==gamePattern.length )
    {
        console.log("correct ans");
        nextSequence();
        userClickedPattern=[];


    }
    
    

    playSound(userChosenColor);
    animatePress(userChosenColor);


})


function playSound(name) {
    var audio1 = new Audio("sounds/" + name + ".mp3");
    audio1.play();
}


function animatePress(currentColour) {

    $("." + currentColour).addClass("pressed");

    setTimeout(function () {
        $("." + currentColour).removeClass("pressed");

    }, 100);


}
var level = 0;
var flag = 0;


    $("body").keydown(function (event) {

        

        if (flag==0){
           
        nextSequence();
        flag=1;
        }

        


    })
    
function startOver()
{
    gamePattern=[];
    level=0;
    flag=0
    i=0;
    flag1=0;
}





