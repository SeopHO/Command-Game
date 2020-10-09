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

let randCommands=[];
let Commands_user=[];
let Commands_len = Commands.length;

let Wrong=false;

let rand_1,rand_2,rand_3,rand_4;

let addrand;
let addCheck = false;

let rand_arr=[]; 


function CreateRandomNum()
{
    rand_1 = Math.floor(Math.random()*4);
    rand_2 = Math.floor(Math.random()*4);
    rand_3 = Math.floor(Math.random()*4);
    rand_4 = Math.floor(Math.random()*4);

    rand_arr = [rand_1,rand_2,rand_3,rand_4];
    ChoiceCommands(rand_arr);

    
}

function AddRandomNum()
{
    addrand = Math.floor(Math.random()*4);

    rand_arr.push(addrand);
    Commands.push(Commands[addrand]);
    //Commands_len++;
}

function ChoiceCommands(rand_arr)
{
    for(let i=0;i<Commands_len;i++)
    {
        let temp = rand_arr[i];
        // randCommands.push(Commands[temp]);
        randCommands[i] = Commands[temp];
    }
}

function ShuffleCommands()
{
    for(let i=0;i<Commands_len;i++)
    {
        let j = Math.floor(Math.random()*(i+1));
        let temp1 = Commands[i];
        Commands[i] = Commands[j];
        Commands[j] = temp1;
    }
}

function AddCommands()
{
    //rand_arr.push(rand_arr);

    for(let i=0;i<Commands_len;i++)
    {
        randCommands.push(randCommands[i]);
    }
    // Commands_len+=Commands_len;
    Commands_len += Commands_len;
}

function compareResult()
{
    if(Wrong == true)
    {
        alert('WRONG!!');
        again.style.display = 'block';

        Wrong = false; //Change default value.
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
        if(randCommands[i].code != Commands_user[i])
        {
            Wrong = true;
        }
    }
    compareResult();
}

let finish_check=false;

function Clear()
{
    question.innerHTML="";
    answer.innerHTML="";


    Commands_user.splice(0,Commands_len);
}

function disappearButton()
{
    next.style.display='none';
    again.style.display = 'none';
}

//main function
function coreInit() 
{
    CreateRandomNum();
    if(level_count%3 == 0)
    {
        AddRandomNum();
    }
    ShuffleCommands();
    disappearButton();
    LevelInit();
    questionInit();

    console.log(Commands);
    console.log(randCommands);
    console.log(rand_arr);
    console.log(Commands_len);
    
    console.log(addrand);

}

coreInit();







