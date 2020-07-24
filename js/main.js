console.log("Hello!")

document.addEventListener('DOMContentLoaded', function() {
    // DOM REFS
    let movementDisplay = document.getElementById('movement');
    let game = document.getElementById('game');

    // CANVAS CONFIG
    game.setAttribute('height', 400);
    game.setAttribute('width', 800);
    let ctx = game.getContext('2d');

    const drawBox = (x, y, size, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    }
    

})