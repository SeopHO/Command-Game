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
let questionLen;

let Wrong=false;

//random value.
let randNum;
let randNumArr = [];

function QuestionLen()
{
    if(level_count >= 23)
    {
        let temp;
        temp = level_count;
        return questionLen = level_diff[temp - 1];
    }
        
    else
        return questionLen = level_diff[level_count-1];
}

function CreateRandomNum()
{
    for(let i=0;i<QuestionLen();i++)
    {
        randNum = Math.floor(Math.random() * 4);
        randNumArr.push(randNum);
        let temp = randNumArr[i];
        randCommands[i] = Commands[temp];
    }
}

function compareCommands()
{
    for(let i=0;i<QuestionLen();i++)
    {
        if(randCommands[i].code != Commands_user[i])
        {
            Wrong = true;
        }
    }
    compareResult();
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

function Clear()
{
    question.innerHTML="";
    answer.innerHTML="";

    Q_count=0;
    user_len=-1;

    Commands_user.splice(0,QuestionLen());
    randNumArr.splice(0,QuestionLen());
    randCommands.splice(0,QuestionLen());
}

function disappearButton()
{
    next.style.display='none';
    again.style.display='none';
}

//main function
function coreInit() 
{
    CreateRandomNum();
    disappearButton();
    LevelInit();
    questionInit();
    console.log('QuestionLen',QuestionLen());
    console.log('RandArr',randCommands);    
}

coreInit();