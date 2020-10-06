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

let randCommands=[];
let Commands_user=[];

let Commands_len = Commands.length;

//let Correct_count=-1;
// let Wrong_count=0;
let Wrong=false;

let rand_1,rand_2,rand_3,rand_4;
let rand_arr=[]; 


function RandomNum()
{
    rand_1 = Math.floor(Math.random()*4);
    rand_2 = Math.floor(Math.random()*4);
    rand_3 = Math.floor(Math.random()*4);
    rand_4 = Math.floor(Math.random()*4);

    rand_arr = [rand_1,rand_2,rand_3,rand_4];
    ChoiceCommands(rand_arr);
}

function ChoiceCommands(rand_arr)
{
    for(let i=0;i<Commands_len;i++)
    {
        let temp = rand_arr[i];
        randCommands.push(Commands[temp]);
        console.log(randCommands[i]);
        drawQuestion(rand_arr);
        
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

let next = document.querySelector('.next');
let again = document.querySelector('.again');

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
    Q_count=0;
    user_len=-1;
    Clear();
    coreInit();
    console.log(true);
    console.log(level_count);
});

function test()
{
    ShuffleCommands();
    RandomNum();
    console.log(Commands);
    
    console.log(rand_arr);
    console.log(rand_arr[1]);
    
    
}

//main function
function coreInit() 
{
    test();
    console.log(rand_1,rand_2,rand_3,rand_4);
    //console.log(Commands[1].text,Commands[1].code);
    
    
    ShuffleCommands();
    //console.log(Commands,Commands_text);
    disappearButton();
    questionInit();
    LevelInit();
}

coreInit();







