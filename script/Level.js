let level = document.querySelector('.level');
let level_count=1;
let level_diff=[];


function drawLevel(level_count=1)
{
    level.innerText=` ${level_count}`;
}

function LevelInit()
{
    drawLevel(level_count);
}
