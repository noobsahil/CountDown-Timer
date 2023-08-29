AFRAME.registerComponent("game-play", {
    schema:{
        elementId: {type:'string', default:null}
    },
    init: function(){
        var dur = 180;
        var timerEl = document.querySelector("#timer");
        this.startTimer(dur, timerEl);
    },
    startTimer: function(dur, timerEl){
        var min, sec;
        var gameState = this.data.gameState;
        setInterval(()=>{
            gameState = this.data.gameState;
            if (dur >= 0){
                min = parseInt(dur/60);
                sec = parseInt(dur%60);
                if (min < 10){ min = "0" + min };
                if (sec < 10){ sec = "0" + sec };
                timerEl.setAttribute("text", { value: min+":"+sec });
                dur-=1;
            } else { 
                this.gameOver(); 
            };
        },1000);
    },
    update: function(){
        this.isCollided(this.data.elementId);
    },
    isCollided: function(elementId){
        const diverEl = document.querySelector(elementId);
        diverEl.addEventListener("collide", (e)=>{
            if (elementId.includes("#coin")){
                diverEl.setAttribute("visible", false)
                diverEl.setAttribute("position", {z: 100});
                this.updateCoins();
                this.updateScore();
            }
            else if (elementId.includes("#fish")){
                this.gameOver();
            };
        });
    },
    updateCoins: function(){
        var element = document.querySelector("#coins");
        var count = element.getAttribute("text").value;

        var coins = parseInt(count);
        coins-=1;

        if (coins === 0){
            var textEl = document.querySelector("#gameover");
            textEl.setAttribute("visible", true);
            textEl.setAttribute("text", { value: "YOU WIN" });
    
            var diverEl = document.querySelector("#diver");
            diverEl.setAttribute("dynamic-body", { mass: 1 });
    
            var bubbleEl = document.querySelector("#bubbles");
            bubbleEl.setAttribute("visible", false);
        }

        element.setAttribute("text", { value: coins })
    },
    updateScore: function(){
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;

        var score = parseInt(count);
        score+=50;

        element.setAttribute("text", { value: score })
    },
    gameOver: function(){
        var textEl = document.querySelector("#gameover");
        textEl.setAttribute("visible", true);

        var diverEl = document.querySelector("#diver");
        diverEl.setAttribute("dynamic-body", { mass: 1 });

        var bubbleEl = document.querySelector("#bubbles");
        bubbleEl.setAttribute("visible", false);
    }
});