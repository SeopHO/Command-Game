//https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa
//https://m.blog.naver.com/PostView.nhn?blogId=ads226&logNo=220587596901&proxyReferer=https:%2F%2Fwww.google.com%2F

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let ca_width=1000;
let ca_height=800;

let qx = 200; //question x
let qy = (ca_height/2)-100; //question y

let ax = qx+500; //player x
let ay = (ca_height/2)-100; //player y

let bx = qx+500-170;
let by = ca_height/2-265;

let commandX = qx+500-120;
let commandY = ca_height/2-168;


let queImage = new Image();
let answImage = new Image();

let up = new Image();
let down = new Image();
let right = new Image();
let left = new Image();

let balloonQ = new Image();
balloonQ.src = "./image/balloonQ.png";

let balloonA = new Image();
balloonA.src = "./image/balloonA.png";

queImage.src = "./image/Answer.png";
answImage.src = "./image/Question.png";

// up.src = command_up.url;
// down.src = command_down.url;
// right.src = command_right.url;
// left.src = command_left.url;

queImage.onload=()=>
{
    ctx.drawImage(queImage,qx,qy);
}
answImage.onload=()=>
{
    ctx.drawImage(answImage,ax,ay);
}

function drawballoonQ()
{
    ctx.drawImage(balloonQ,bx,by);
}

function drawcommand(rev)
{
    switch (rev) {
        case command_up.text:
            up.src = command_up.url;
            up.onload=()=>
            {
                ctx.drawImage(up,commandX,commandY);
            }
            console.log(true);
            break;
        case command_down.text:
            down.src = command_down.url;
            down.onload=()=>
            {
                ctx.drawImage(down,commandX,commandY);
            }
            break;
        case command_right.text:
            right.src = command_right.url;
            right.onload = () => 
            {
                ctx.drawImage(right,commandX,commandY);
            }
            break;
        case command_left.text:
            left.src = command_left.url;
            left.onload = () => 
            {
                ctx.drawImage(left,commandX,commandY);
            }
            break;
        default:
            break;
    }
}








