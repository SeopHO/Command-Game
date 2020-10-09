let level = document.querySelector('.level');
let level_count=1;
let level_diff=[1,2,3,4,5,6,7,8,9,10];
let temp=0;
let a=10;
let b=8;

function drawLevel(level_count=1)
{
    level.innerText=` ${level_count}`;
}

function LevelInit()
{

    drawLevel(level_count);
}
