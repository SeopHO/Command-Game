let question = document.querySelector('.question');

let Q_count=0;



function appearQuestion()
{
    question.style.display='block';
    user_stop=true;
}
function disappearQuestion()
{
    question.style.display='none';
    user_stop = false;
}

function drawQuestion()
{
    let timer=setInterval(function()
    {
        let rec = randCommands[Q_count].text;
        question.append(`${rec} `);
        
        Q_count++;

        if(Q_count === QuestionLen())
        {
            clearInterval(timer);
            setTimeout(disappearQuestion,3000);
            clearTimeout(timer);
        }
    },1000)
}

function questionInit()
{
    console.log(level_len);
    
    appearQuestion();
    drawQuestion();
}
