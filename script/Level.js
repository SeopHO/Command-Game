let level = document.querySelector('.level');
let level_count=1;
let level_diff=[1,2,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10];

let level_len = level_diff.length;


function drawLevel(level_count=1)
{
    level.innerText=` ${level_count}`;
}

function LevelInit()
{
    drawLevel(level_count);
}