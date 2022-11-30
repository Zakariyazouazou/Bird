var obstacle = document.getElementById("obstacle")
var howle = document.getElementById("howle")
var bird = document.getElementById("bird")
amount = 0 ; 
howle.addEventListener("animationiteration",()=>{
    var Rand = Math.random()*(500-150) ; 
    howle.style.top = Rand + "px"


    amount ++
})

var isjumping = false ; 

setInterval(function(){
    var birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"))
    if(!isjumping){
        bird.style.top = birdTop + 3 + "px"
    }

    var howleLeft = parseInt(getComputedStyle(howle).getPropertyValue("top"))
    var obstacleLEft = parseInt(getComputedStyle(howle).getPropertyValue("left"))
    if(birdTop > 480 || obstacleLEft < 20 && (birdTop > (howleLeft + 150) || birdTop < howleLeft )){
         if(confirm("you lose try agian " + amount)){
            window.location = "bird.html"

            bird.style.top = 100 + "px";
            obstacle.style.left = "100%";
            howle.style.left = "100%";
        
            amount = 0;
         }
    }
    
   
},10)




// let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));


document.addEventListener('click',()=>{
    isjumping = true ; 
    var jumpTimer = 0 ; 


    var jumpInterval = setInterval(function(){
               jumpTimer++;
               var birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"))
               if(jumpTimer < 15 && birdTop > 0 ){
                bird.style.top = birdTop - 5 + "px" 
               }




                if (jumpTimer > 20){
                clearInterval(jumpInterval)
                jumpTimer = 0 ;
                isjumping = false ;  

               }
      },10)
})