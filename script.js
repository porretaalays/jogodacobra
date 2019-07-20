window.onload = function(){

    let tabuleiro =  document.getElementById('tabuleiro');
    let ctx = tabuleiro.getContext("2d");
    document.addEventListener("keydown", keyPush);  

    setInterval(game, 60);
    const vel = 1;
    let vx = vy = 0;
    let px = 10;
    let py = 15;
    let tp = 20;
    let qt = 20;
    let ax =ay = 15;

    let trail = [];
    trail = 5;

    function game(){
       px += vx;
       py += vy;
       if(px < 0){
           px = qt-1;
       }
       if(px > qt-1){
        px = 0;
       }
       if(py < 0){
           py = qt-1;
       }
       if(py > qt){
           py = 0;

       }
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, tabuleiro.clientWidth, tabuleiro.heigth);

    ctx.fillStyle = "red";
    ctx.fillRect(ax*tp, ay*tp, tp,tp);

    ctx.fillStyle = "gray";
    for( let i =0; i < trail.length; i++){
        ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp,tp);
        if(trail[i.x === px && trail[i].y === py]){
            vx = vy = 0;
        }
    }
    trail.push({x:px,y:py})
    while(trail.length > trail){
        trail.shift();
    }

    if(ax === px && ay === py){
        trail++;
        ax = Math.floor(Math.random()*qp);
        ay = Math.floor(Math.random()*qp);

    }


   
}
function keyPush(event){
    switch(event.keyCode){
        case 37: //letf
        vx = -vel;
        vy = 0;
        break;
        case 38: //up
        vx = 0;
        vy = -vel;
        break;
        case 39: //right
        vx = vel;
        vy = 0;
        break;
        case 40: //down
        vx = 0;
        vy = vel;
        break;
    }
    
}


































}