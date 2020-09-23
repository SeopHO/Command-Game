//command object.
let command_up={
    text:'UP',
    code:'ArrowUp',
}

let command_down={
    text:'DOWN',
    code:'ArrowDown',
}

let command_right={
    text:'RIGHT',
    code:'ArrowRight',
}

let command_left={
    text:'LEFT',
    code:'ArrowLeft',
}

let Commands=[command_up, command_down, command_right, command_left];

let Commands_len = Commands.length;

function ShuffleCommands(Commands)
{
    for(let i=0;i<Commands_len;i++)
    {
        let j = Math.floor(Math.random()*(i+1));
        let temp = Commands[i];
        Commands[i] = Commands[j];
        Commands[j] = temp;       
    }
    return Commands;
}

function AddCommands()
{
    for(let i =0;i<Commands_len;i++)
    {
        Commands.push(Commands[i]);
    }
    Commands_len+=Commands_len;
}

let question = document.querySelector('.question');

//problem..
function QuestionText()
{
    let qt = document.createTextNode(Commands.text);
    question.appendChild(qt);
}








