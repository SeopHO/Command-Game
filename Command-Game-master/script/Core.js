let command_up={
    text:'UP',
    code:38,
}
let command_down={
    text:'DOWN',
    code:40,
}
let command_right={
    text:'RIGHT',
    code:39,
}
let command_left={
    text:'LEFT',
    code:37,
}
let command_wrong={
    text:'X',
    code:0,
}

let question = document.querySelector('.question');
let answer = document.querySelector('.answer');

let user_len=-1;

let Commands=[command_up, command_down, command_right, command_left];
let Commands_text=[command_up.text, command_down.text, command_right.text, command_left.text];
let Commands_user=[];
let Commands_len = Commands.length;

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(event) 
{
    switch (event.keyCode) 
    {
        case command_up.code:
            answer.append(command_up.text);
            Commands_user.push(command_up.code);
            console.log(Commands_user.length);
            console.log(Commands_user);
            break;
        case command_down.code:
            answer.append(command_down.text);
            Commands_user.push(command_down.code);
            console.log(Commands_user.length);
            console.log(Commands_user);
            break;
        case command_right.code:
            answer.append(command_right.text);
            Commands_user.push(command_right.code);
            console.log(Commands_user.length);
            console.log(Commands_user);
            break;
        case command_left.code:
            answer.append(command_left.text);
            Commands_user.push(command_left.code);
            console.log(Commands_user.length);
            console.log(Commands_user);
            break;
        default:
            answer.append('X ');
            Commands_user.push(command_wrong.code);
            console.log(Commands_user);          
            console.log(Commands_user.length);
    }
};








function drawQuestion()
{
    question.append(Commands_text);
}

function ShuffleCommands()
{
    for(let i=0;i<Commands_len;i++)
    {
        let j = Math.floor(Math.random()*(i+1));
        let temp1 = Commands[i];
        Commands[i] = Commands[j];
        Commands[j] = temp1;
        
        //Command text
        let temp2 = Commands_text[i];
        Commands_text[i] = Commands_text[j];
        Commands_text[j] = temp2;
    }
}

function AddCommands()
{
    for(let i =0;i<Commands_len;i++)
    {
        Commands.push(Commands[i]);
        Commands_text.push(Commands_text[i]);
    }
    Commands_len+=Commands_len;
    update();
}

let user_check=false;

function userFinish()
{
    if(user_len == Commands_len)
    {
        user_check=true;
    }
}

function compareCommands()
{
    let Correct_count=-1;
    let Wrong_count=-1;
    for(let i=0;i<Commands_len;i++)
    {
        if(Commands[i].code == Commands_user[i])
        {
            Correct_count++;
        }
        else if(Commands[i].code != Commands_user[i])
        {
            Wrong_count++;
        }
    }
    if(Correct_count == Commands_len)
        alert("GOOD!");
    else if(Wrong_count>-1)
        alert("BAD");
    }
    
function draw() 
{
    ShuffleCommands();
    drawQuestion();
    
    if(Commands_user.length == Commands_len)
    {
        compareCommands();
    }
}


//let t = Commands[0].code === Commands[1].code
//console.log(t);

console.log(Commands_user.length);

console.log(Commands_len);

console.log(Commands[0].code);









