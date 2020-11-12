//https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa
//https://m.blog.naver.com/PostView.nhn?blogId=ads226&logNo=220587596901&proxyReferer=https:%2F%2Fwww.google.com%2F

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let ca_width=1000;
let ca_height=800;

let qx = 200; //player x

let queImage = new Image();
let answImage = new Image();

let up = new Image();
let down = new Image();
let right = new Image();
let left = new Image();

let balloon = new Image();
balloon.src = "./image/balloon.png";


queImage.src = "./image/Answer.png";
answImage.src = "./image/Question.png";

// up.src = command_up.url;
// down.src = command_down.url;
// right.src = command_right.url;
// left.src = command_left.url;

queImage.onload=()=>
{
    ctx.drawImage(queImage,qx,(ca_height/2)-100);
}
answImage.onload=()=>
{
    ctx.drawImage(answImage,qx+500,ca_height/2-100);
}

function drawballoon()
{
    ctx.drawImage(balloon,qx+500-170,ca_height/2-240);
}

function drawcommand(rev)
{
    switch (rev) {
        case command_up.text:
            up.src = command_up.url;
            up.onload=()=>
            {
                ctx.drawImage(up,30,10);
            }
            console.log(true);
            break;
        case command_down.text:
            down.src = command_down.url;
            down.onload=()=>
            {
                ctx.drawImage(down,30,10);
            }
            break;
        case command_right.text:
            right.src = command_right.url;
            right.onload = () => 
            {
                ctx.drawImage(right, 30, 10);

            }
            break;
        case command_left.text:
            left.src = command_left.url;
            left.onload = () => 
            {
                ctx.drawImage(left, 30, 10);

            }
            break;
        default:
            break;
    }
}







