let answer = document.querySelector('.answer');
// let user_len=Commands_len;
let user_len=-1;

let keyOnOff=true;
//true-can. false-can't

let user_stop=false;

function userSubmit()
{
    if(user_len === (Commands_len-1))
    {
        user_stop = true;
        alert('STOP');
        compareCommands();
    }
}

function drawAnswer(text)
{
    let textA = `${text} `; 
    answer.append(textA);

    user_len++;
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
    