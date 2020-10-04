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

//let Correct_count=-1;
// let Wrong_count=0;
let Wrong=false;

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

function compareResult()
{
    if(Wrong == true)
    {
        alert('WRONG!!');
        again.style.display = 'block';
    }
    else
    {
        alert('CORRECT!');
        next.style.display = 'block';
    }
}

function compareCommands()
{
    for(let i=0;i<Commands_len;i++)
    {
        if(Commands[i].code != Commands_user[i])
        {
            Wrong = true;
        }
    }
    compareResult();
}

//Test...function
function compareCommandsTest()
{
    for(let i=0;i<Commands_len;i++)
    {
    // if(Commands[i].code == Commands_user[i])
    // {
    //     Correct_count++;
    // }
    // else if(Commands[i].code != Commands_user[i])
    // {
    //     Wrong_count++;
    // }
    }
        //console.log(Correct_count,Wrong_count);
}

let div=document.querySelector('div');

function Clear()
{
    div.classList.remove(".question");
}

function reCoreinit()
{
    Clear();
    disappearButton();
    appearQuestion();
    ShuffleCommands();
    questionInit();
    LevelInit();

}

let next = document.querySelector('.next');
let again = document.querySelector('.again');

function disappearButton()
{
    next.style.display='none';
    again.style.display = 'none';
}


next.addEventListener("mouseover",function(){
    next.style.color='red';
    next.style.cursor='pointer';
});

next.addEventListener("mouseout",function(){
    next.style.color='black';
});

next.addEventListener("click",function(){
    //location.reload();
    level_count++;
    reCoreinit();
    console.log(true);
    console.log(level_count);
});

//main function
function coreInit()
{
    disappearButton();
    ShuffleCommands();
    questionInit();
    LevelInit();
}

coreInit();







