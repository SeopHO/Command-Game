//https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let ca_width=1000;
let ca_height=800;

let qx = 200;
let queImage = new Image();
let answImage = new Image();


queImage.src = "./image/Answer.png";
answImage.src = "./image/Question.png";

queImage.onload = ()=>{
    ctx.drawImage(queImage,qx,(ca_height/2)-100);
    ctx.drawImage(answImage,qx+500,ca_height/2-100);
    ctx,drawImage()
}

console.log(screen.width, screen.height);





