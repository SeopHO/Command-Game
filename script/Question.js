let question = document.querySelector('.question');
let count=-1;

function appearQuestion()
{
    count++;
    let rec = Commands_text[count];
    question.append(`${rec} `);
    stopappearQuestion();
}

function stopappearQuestion()
{
    if(count === Commands_len)
    {
        clearInterval(appearQuestion);
        console.log(true);    
    }
}


function drawQuestion()
{
    setInterval(appearQuestion,1000);
}

function questionInit()
{
    drawQuestion();
}

