const hero = {
    top: 700,
    left: 500
}

let missiles = []


document.onkeydown = (e) => {
    if(e.keyCode === 37) {
        console.log("LEFT");
        hero.left = hero.left - 10;
        moveHero()
    } else if (e.keyCode === 39) {
        console.log("RIGHT");
        hero.left = hero.left + 10;
        moveHero()   
    } else if(e.keyCode === 32) {
        console.log("SPACE");
        missiles.push({
            left: hero.left + 15,
            top: hero.top
        })
        console.log(missiles);
        drawMissiles()
    }
}

function moveHero() {
    document.getElementById('hero').style.left = hero.left + "px"
}


function drawMissiles() {
    document.getElementById('missiles').innerHTML = '';
    for(let missile = 0; missile < missiles.length; missile++) {
        document.getElementById('missiles').innerHTML += `<div class='missile' style='left:${missiles[missile].left}px; top:${missiles[missile].top}px;'></div>`
    }
}