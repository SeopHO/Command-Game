//command object.
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
    code:39
}

let command_left={
    text:'LEFT',
    code:37,
}

let command_wrong={
    text:'X',
    code:0,
}

let Commands=[command_up, command_down, command_right, command_left]; //data
let Commands_text=[command_up.text, command_down.text, command_right.text, command_left.text]; //print
let Commands_user=[];

let user_len=1;

let Commands_len = Commands.length;


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
}

let question = document.querySelector('.question');
let answer = document.querySelector('.answer');

function Qshow()
{
    let Q = Commands_text;
    question.append(Q);
}

function key() 
{
    document.onkeydown = function(event) 
    {
        switch (event.keyCode) 
        {
            case 37:
                answer.append('LEFT ');
                Commands_user.push(command_left.code);
                console.log(Commands_user);
                break;
            case 38:
                answer.append('UP ');
                Commands_user.push(command_up.code); 
                console.log(Commands_user);
                break;
            case 39:
                answer.append('RIGHT ');
                Commands_user.push(command_right.code); 
                console.log(Commands_user);
                break;
            case 40:
                answer.append('DOWN ');
                Commands_user.push(command_down.code); 
                console.log(Commands_user);
                break;
            default:
                answer.append('X ');
                Commands_user.push(command_wrong.code); 
                console.log(Commands_user);
        }
    };
}

function ConfineCommands()
{
    if(Commands_user.length === Commands_len)
    {
        console.log('check');
    }
    else
    {
        key();
    }
}

function CompareCommands()
{

}








