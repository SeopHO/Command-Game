let level = document.querySelector('.level');
let level_count=1;
let level_diff=[1,2,3,4,5,6,7,8,9,10];

let a=10;
let b=8;


function drawLevel(level_count=1)
{
    level.innerText=` ${level_count}`;
}

function CheckLevel(level_count,level_diff)
{
    switch (level_count) 
    {
        case a-b:
            console.log('good');
            
            break;
        case 10:
            console.log(false);
        default:
            break;
    }
}

function LevelInit()
{
    CheckLevel(level_count,level_diff);
    drawLevel(level_count);
}
