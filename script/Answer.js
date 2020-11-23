let answer = document.querySelector('.answer');

let before_user_len=null;
let user_len=-1;

let keyOnOff=true;
//true-can. false-can't

let user_stop=true;

function userSubmit()
{
    if(user_len === (QuestionLen())-1)
    {
        user_stop = true;
        alert('STOP');
        compareCommands();
    }
}

function disappearAnswer()
{
    ctx.clearRect(bxA,byA,195,180);
}

function drawAnswer(text)
{
    drawballoonA();
    let textA = `${text} `; 
    answer.append(textA);

    let before_user_len = user_len;

    switch (text) {
        case command_up.text:
            up.src = command_up.url;
            up.onload=()=>
            {
                ctx.drawImage(up,commandX-333,commandY-7);
            }
            break;
        case command_down.text:
            down.src = command_down.url;
            down.onload=()=>
            {
                ctx.drawImage(down,commandX-333,commandY-7);
            }
            break;
        case command_right.text:
            right.src = command_right.url;
            right.onload = () => 
            {
                ctx.drawImage(right,commandX-333,commandY-7);
            }
            break;
        case command_left.text:
            left.src = command_left.url;
            left.onload = () => 
            {
                ctx.drawImage(left,commandX-333,commandY-7);
            }
            break;
        default:
            break;
    }

    setTimeout(disappearAnswer,2000);

    console.log('before user len',before_user_len);
    
    user_len++;

    console.log('user len ',user_len);
    if(before_user_len<user_len)
    {
        disappearAnswer();
        drawballoonA();
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) 
{
    if(keyOnOff == true && user_stop == false)
    {
        keyOnOff = false;
        switch (event.keyCode) 
        {
            case command_up.code:
                Commands_user.push(command_up.code);
                drawAnswer(command_up.text);
                break;
            case command_down.code:
                Commands_user.push(command_down.code);
                drawAnswer(command_down.text);
                break;
            case command_right.code:
                Commands_user.push(command_right.code);
                drawAnswer(command_right.text);
                break;
            case command_left.code:
                Commands_user.push(command_left.code);
                drawAnswer(command_left.text);
                break;
            default:
                Commands_user.push(command_wrong.code);
                drawAnswer(command_wrong.text);
        }
    }
};

function keyUpHandler()
{
    if(keyOnOff==false)
    {
        keyOnOff=true;
        userSubmit();
    }
}



