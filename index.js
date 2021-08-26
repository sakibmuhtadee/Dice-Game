
function rand(){
  var r=Math.floor(Math.random()*6)+1;
  return r;
}
var button=document.querySelector("button");

button.onclick=function()
{
     var p1=rand();
     var image1=document.querySelectorAll("img")[0];
     image1.setAttribute("src",("images/dice"+p1+".png"));

     var p2=rand();
     var image2=document.querySelectorAll("img")[1];
     image2.setAttribute("src",("images/dice"+p2+".png"));


     if (p1>p2)
      {
          document.getElementById("head").innerHTML="🚩 Player 1 Wins!";
      }
     else if (p2>p1) {
          document.getElementById("head").innerHTML="🚩 Player 2 Wins!";
     }
     else
     {
        document.getElementById("head").innerHTML="🙁 Tie! ";
     }
}
