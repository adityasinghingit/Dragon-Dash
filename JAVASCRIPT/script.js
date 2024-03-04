score = 0;
cross = true;

audio = new Audio("/Dragon-Dash/Audio/game_time.mp3");
audiogo = new Audio("/Dragon-Dash/Audio/screaming_goat.mp3");
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function(e) {
    // console.log("The keycode is:", e.keyCode);
    audio.play();
    if(e.keyCode == 38){
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 700);
    }if(e.keyCode == 39){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left =( dinoX + 112) + "px";
    }if(e.keyCode == 37){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left =( dinoX - 112) + "px";
    }

}

setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacles = document.querySelector(".obstacles");


    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
  
    ox = parseInt(window.getComputedStyle(obstacles, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacles, null).getPropertyValue("top"));


    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    // console.log(offsetX, offsetY);
    if(offsetX< 93 && offsetY<52){
        gameOver.style.visibility = "Visible";
        obstacles.classList.remove("obstaclesAni");
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 500);


    // to make dino crashed
    dino.classList.add("dino-crashed");

    }else if(offsetX< 145 && cross){
        score+= 1;
        updateScore(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacles, null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.015;
            obstacles.style.animationDuration = newDur + 's';
            console.log("New animation duration", newDur);
        }, 500);
      

    }

}, 10);

    function updateScore(score) {
        scoreCount.innerHTML = "Your Score: " + score;
    }

