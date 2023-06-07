var dice1 = Math.random() * 6;
var dice2 = Math.random() * 6;
dice1 = Math.floor(dice1) + 1;
dice2 = Math.floor(dice2) + 1;
if(dice1 < dice2)
{
    document.querySelector("h2").innerHTML = "Player 2 is the winner🚩";
}
// else(dice1 > dice2)
// {
//     document.querySelector("h2").innerHTML = "Player 1 is the winner";
// }
if(dice1 === 1)
{
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(dice1 === 2)
{
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(dice1 === 3)
{
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(dice1 === 4)
{
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(dice1 === 5)
{
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}

if(dice2 === 1)
{
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(dice2 === 2)
{
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(dice2 === 3)
{
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(dice2 === 4)
{
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(dice2 === 5)
{
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}


