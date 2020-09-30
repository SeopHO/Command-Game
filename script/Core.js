const command_up={
    text:'UP',
    code:38,
}
const command_down={
    text:'DOWN',
    code:40,
}
const command_right={
    text:'RIGHT',
    code:39,
}
const command_left={
    text:'LEFT',
    code:37,
}
const command_wrong={
    text:'X',
    code:0,
}

let Commands=[command_up, command_down, command_right, command_left];
let Commands_text=[command_up.text, command_down.text, command_right.text, command_left.text];
let Commands_user=[];
let Commands_len = Commands.length;

let Correct_count=0;
let Wrong_count=0;

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

function compareCommands()
{
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
    console.log(Correct_count,Wrong_count);
}

function coreInit()
{
    ShuffleCommands();
    questionInit();
}

coreInit();








