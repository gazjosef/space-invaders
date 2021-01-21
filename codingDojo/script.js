document.onkeydown = (e) => {
    console.log("click", e);
    if(e.keyCode === 37) {
        console.log("LEFT");
    } else if (e.keyCode === 39) {
        console.log("RIGHT");
    }
}