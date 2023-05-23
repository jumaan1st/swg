let score=0,scorec=0;
const collection = document.getElementsByClassName("listen");
for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener("click", compare);  
}
function compare()
{
    let comp=Math.floor((Math.random()*3)+1);
    let hum=this.getAttribute('id');
    light(hum);
    light("0"+comp);
    hum=parseInt(hum);
    if(hum==comp)
    {
        document.getElementsByClassName("head")[0].innerHTML="DRAW! TRY AGAIN";
    }
    else if(hum==1)
    {
        if(comp==3)
        {
            document.getElementsByClassName("head")[0].innerHTML="YOU LOSE"; 
            score++ 
        }
        else if(comp==2)
        {
            document.getElementsByClassName("head")[0].innerHTML="YOU WIN";
            scorec++
        }
    }
    else if(hum==2)
    {
        if(comp==1)
        {
            document.getElementsByClassName("head")[0].innerHTML="YOU LOSE"; 
            score++ 
        }
        else if(comp==3)
        {
            document.getElementsByClassName("head")[0].innerHTML="YOU WIN";
            scorec++
        }
    }
    else if(hum==3)
    {
        if(comp==2)
        {
            document.getElementsByClassName("head")[0].innerHTML="YOU LOSE"; 
            score++ 
        }
        else if(comp==1)
        {
            document.getElementsByClassName("head")[0].innerHTML="YOU WIN";
            scorec++
        }
    }
    finalscore();
   
}
function light(hum)
{
        document.getElementById(hum).classList.add("pressed");
        setTimeout(function () {
            document.getElementById(hum).classList.remove("pressed");
        }, 1000);
    
}
const finalscore=()=>
{
    document.getElementsByClassName("you")[0].innerHTML=scorec;  
    document.getElementsByClassName("comp")[0].innerHTML=score; 
}