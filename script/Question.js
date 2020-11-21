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
    // user_stop = false;
    //disappearballoonQ();
    ctx.clearRect(bxQ,byQ,200,173);
    //ctx.clearRect(qx+500-120,ca_height/2-145,125,100);
}

function changeTurn()
{
    user_stop = false;
    question.style.display='none';
    // user_stop = false;
    //ctx.clearRect(qx+500-120,ca_height/2-145,125,100);
    ctx.clearRect(bxQ,byQ,200,173);
}

function drawQuestion()
{
    let timer=setInterval(function()
    {
        let rec = randCommands[Q_count].text;
        drawballoonQ();
        drawcommand(rec);
        question.append(`${rec} `);
        
        //ctx.clearRect(qx+500-170,ca_height/2-240,200,200);
        Q_count++;

        if(Q_count === QuestionLen())
        {
            clearInterval(timer);
            setTimeout(changeTurn,2000);
            clearTimeout(timer);
        }
        else
        {
            setTimeout(disappearQuestion,1000);
        }

    },2000)
}

function questionInit()
{
    console.log(level_len);
    
    appearQuestion();
    drawQuestion();
}

