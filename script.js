
var score=0;
var hitrn=0;




// jispe click karoge wo element par event rise hoga 

function makebubble(){
    var clutter="";
        for(var i=1;i<=75;i++){
    var temp=Math.floor(Math.random()*10);
    clutter+=  `<div class="bubble">${temp}</div>`;
    }

document.querySelector("#pbtm").innerHTML=clutter ; 

}

function runtimmer(timer){
    setInterval(function(){
        if(timer>0){
             timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML=`<h1 style="color:RED;">GAME OVER DUDE 😜</h1>
            
           `;
        }
           
        
        
    },1000)
}



function getnewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function inscore(){
    score+= 10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clicknum=(Number(dets.target.textContent));
    if(clicknum===hitrn){
        inscore();
        makebubble();
        getnewhit();
    }
})




getnewhit();
runtimmer(60);
makebubble();


